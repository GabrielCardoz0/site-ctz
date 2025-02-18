"use client";

import { redirectToFacebook, redirectToInstagram, redirectToWhatsapp } from "@/utils";
import { infos } from "@/utils/infos";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Contato() {
  return (
    <div className="w-full mx-auto max-w-[1200px] flex gap-12 flex-col lg:flex-row py-12">
      <div className="w-full px-8">
        <h1 className="text-2xl text-[#002D72] font-bold">Como podemos te ajudar?</h1>
        <h2 className="text-sm text-gray-600">Entre em contato com um de nossos especialistas e tire todas as suas dúvidas?</h2>

        <form>
          <div className="flex flex-col gap-4 mt-8">
            <input type="text" placeholder="Nome" className="w-full p-4 border border-gray-300 rounded" />
            <input type="email" placeholder="E-mail" className="w-full p-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Telefone" className="w-full p-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Assunto" className="w-full p-4 border border-gray-300 rounded" />
            <textarea placeholder="Mensagem" className="w-full p-4 border border-gray-300 rounded min-h-[150px]"></textarea>
            <button className="py-4 px-12 rounded text-white bg-[#002D72] font-bold text-nowrap hover:opacity-90">Enviar</button>
          </div>
        </form>
      </div>

      <div className="w-full flex justify-center items-start">

        <div className="bg-[#002D72] py-8 px-12 rounded text-white flex flex-col gap-8">
          <div>
            <h2 className="text-sm">Outros canais</h2>     
            <h1 className="text-2xl font-bold">Contato</h1>
          </div>

          <div className='hover:opacity-90 sm:flex gap-2 text-lg font-semibold justify-center items-center bg-white py-2 px-8 rounded text-[#002D72] cursor-pointer' onClick={() => redirectToWhatsapp()}>
            <FaWhatsapp size={20} className="hidden sm:block" />
            <p className="sm:hidden block">Whatsapp</p>
            <p>{infos.phone}</p>
          </div>

          <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center cursor-pointer">
                <FaEnvelope size={20} />
                <p>{infos.email}</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer" onClick={redirectToInstagram}>
                <FaInstagram size={20} />
                <p>{infos.instagram}</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer" onClick={redirectToFacebook}>
                <FaFacebook size={20} />
                <p>{infos.facebook}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};