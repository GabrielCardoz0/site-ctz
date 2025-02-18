import { infos } from "@/utils/infos";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from '../../public/logo-full-white.svg';
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="w-full bg-[#002D72]">

      <div className="p-8 flex flex-col gap-8 md:flex-row items-center justify-around">

        <Image src={logo} alt="Logo" width={150} className='text-white'  />

        {/* <div className="flex items-center gap-16"> */}
          <div className="text-white">
            <h1 className="text-2xl font-extrabold">Endereço</h1>
            <div className="my-4"></div>
            <div className="my-4">
              <p>R. Cap. Alberto Mendes Júnior, 886</p>
              <p>Jardim França, São Paulo - SP</p>
              <p>CEP 02335-011</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center cursor-pointer">
                <FaWhatsapp size={20} />
                <p>{infos.phone}</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <FaEnvelope size={20} />
                <p>{infos.email}</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <FaInstagram size={20} />
                <p>{infos.instagram}</p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <FaFacebook size={20} />
                <p>{infos.facebook}</p>
              </div>
            </div>
          </div>
          
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4239857689395!2d-46.614051599999996!3d-23.4812333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef641b452010d%3A0xf66cc1f328d1131b!2sR.%20Cap.%20Alberto%20Mendes%20J%C3%BAnior%2C%20886%20-%20Jardim%20Franca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002335-011!5e0!3m2!1spt-BR!2sbr!4v1738873034236!5m2!1spt-BR!2sbr" width="450" height="350" style={{border: 0}} className="max-w-full" loading="lazy"></iframe>
        </div>

      {/* </div> */}


      <div className="bg-blue-800 text-white py-12 text-sm">
        <p className="text-center mb-2">© 2025 CTZ manutenção e instalações elétricas. Todos os direitos reservados.</p>
        <p className="text-center">Desenvolvido por Kumo Tecnologia</p>
      </div>
    </footer>
  )
};


