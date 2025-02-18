"use client";

import Image from 'next/image';
import logo from '../../public/logo-full-white.svg';
import { FaWhatsapp, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import Link from 'next/link';
import { infos, sitePages } from '@/utils/infos';
import { redirectToFacebook, redirectToInstagram, redirectToWhatsapp } from '@/utils';
import { useState } from 'react';
import Sidebar from './sidebar';

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#002D72]">

      {open && <Sidebar handleClose={() => setOpen(false)} />}


      <div className='w-full py-4'>
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center px-8">
          <Image src={logo} alt="Logo" width={150} className='text-white'  />

          <div className='hover:opacity-90 sm:flex gap-2 text-lg font-semibold justify-center items-center bg-white py-2 px-8 rounded text-[#002D72] cursor-pointer hidden' onClick={() => redirectToWhatsapp()}>
            <FaWhatsapp size={20} />
            <span>{infos.phone}</span>
          </div>

          <div className='gap-2 bg-white rounded text-[#002D72] p-2 sm:hidden'>
            <FaBars size={15} onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      <div className='w-full bg-white text-[#002D72]'>
        <nav className="w-full max-w-[1200px] mx-auto justify-between py-8 px-8 hidden sm:flex">
          <ul className="flex gap-8 text-base font-semibold">
            {
              sitePages.map((item, index) => (
                <Link className='hover:opacity-90 hover:underline' key={index} href={item.path}>{item.title}</Link>
              ))
            }
          </ul>

          <ul className='flex gap-4'>
            <FaFacebook size={20} className='cursor-pointer' onClick={redirectToFacebook} />
            <FaInstagram size={20} className='cursor-pointer' onClick={redirectToInstagram}/>
            <FaWhatsapp size={20} className='cursor-pointer' onClick={() => redirectToWhatsapp()}/>
          </ul>
        </nav>
      </div>
    </div>
  );
};
