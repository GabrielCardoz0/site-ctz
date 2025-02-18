import { FaTimes } from 'react-icons/fa';
import logo from '../../public/logo-full-color.svg';
import Link from 'next/link';
import Image from 'next/image';
import { sitePages } from '@/utils/infos';


export default function Sidebar({ handleClose }: any) {
  return (

      <div className='fixed left-0 top-0 w-full h-screen z-30 flex'>
        <div className='w-2/3 h-full relative z-10 bg-white text-[#002D72]'>
          <div className='w-full py-4 px-8'>
            {/* <img src={logo} alt="logo" className="h-10 mb-8" /> */}
            {/* <Image src={logo} alt="Logo" width={150} className='text-white h-10 mb-8'  /> */}
            <Image src={logo} alt="Logo" width={150} className=''  />
          </div>

          <div className='gap-4 flex flex-col font-medium items-start mt-8 px-8'>
            {
              sitePages.map((item, index) => (
                <Link onClick={handleClose} key={index} href={item.path} className="font-semibold underline">{item.title}</Link>
              ))
            }
          </div>

          <div className="text-xs self-end py-4 absolute bottom-0 left-0 text-center">
            <p className="mb-2">© 2025 CTZ manutenção e instalações elétricas. Todos os direitos reservados.</p>
            <p>Desenvolvido por Kumo Tecnologia</p>
          </div>
        </div>

        <div className='w-1/3 h-full bg-gray-800 bg-opacity-80' onClick={handleClose}>
          <FaTimes className='text-white absolute top-4 right-4' size={24} onClick={handleClose} />
        </div>

      </div>
  )
};