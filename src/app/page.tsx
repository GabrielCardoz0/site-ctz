"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { areasAtuacao, homeImages, servicesList2 } from "@/utils/infos";
import HomeImage from "@/components/homeimg";
import ServiceButton from "@/components/serviceButton";
import { FaCheckCircle, FaBriefcase, FaAward, FaClipboardCheck, FaLeaf, FaGlobeAmericas, FaPuzzlePiece } from "react-icons/fa";
import CTZLOCAL from '../../public/CTZLOCAL.png';
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);
  
  const settings: any = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    fade: true,
    beforeChange: (current, next) => setActiveIndex(next),
  };
  
  return (
    <div>
      <Slider {...settings}>
        {
          homeImages.map((item, index) => <HomeImage key={index} item={item} index={index} activeIndex={activeIndex} />)
        }
      </Slider>

      <div className="w-full px-4 py-8 bg-[#002D72]">
        <div className="mx-auto w-full max-w-[1200px] py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            servicesList2.map((item, index) => {
              return (
                <div key={index} className="mx-auto w-full">
                  <ServiceButton key={index} title={item.titulo} description={item.descricao} icon={item.icon} id={item.id} />
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="w-full bg-white py-12 px-8">
        <div className="w-full h-full max-w-[1200px] mx-auto">
          <h1 className="text-2xl text-[#002D72] font-bold text-center md:text-start">Áreas de atuação</h1>

          <div className="flex justify-between items-center gap-8 mt-8 flex-col md:flex-row">
            <p className="max-w-[75%] text-gray-700 font-medium text-center md:text-start">A CTZ, atuando desde 1993 no mercado, adquiriu e consolidou ao longo do tempo uma vasta experiência executando Projetos, Obras de Engenharia Elétrica e Hidráulica, Serviços de Manutenção e Retrofit de Cabines, nos mais variados ramos de atividades de nossos clientes.</p>

            <button className="py-4 px-12 rounded text-white bg-blue-500 font-bold text-nowrap hover:opacity-90">Ver todas</button>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {
              areasAtuacao.map((item, index) => {
                return (
                  <Link
                    href={`/portfolio/${item.redirect}`}
                    key={index}
                    className="mx-auto w-full flex gap-4 items-center p-4 bg-gray-100 rounded transition-transform duration-300 hover:translate-y-[-10px] cursor-pointer hover:opacity-95"
                  >

                    <div className="w-32 h-32 bg-gray-200 rounded-full aspect-square">
                      <Image src={item.img} alt={item.nome} className="w-32 h-32 object-cover rounded-full" width={100} height={100}/>
                    </div>

                    <p className="md:text-2xl text-xl font-extrabold text-gray-700">{item.categoria}</p>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12 px-8">
        <div className="w-full h-full max-w-[1200px] mx-auto flex lg:flex-row flex-col gap-8">
          <div className="w-full">
            <h1 className="text-2xl text-[#002D72] font-bold text-center lg:text-start">Diferenciais de trabalhar com a CTZ</h1>

            <ul className="text-sm font-medium flex flex-col gap-2 mt-8">
              <li className="flex gap-2 items-center text-blue-500">
                <FaCheckCircle size={20} />
                <p className="text-gray-500 font-semibold">Equipe técnica altamente qualificada e treinada</p>
              </li>

              <li className="flex gap-2 items-center text-blue-500">
                <FaCheckCircle size={20} />
                <p className="text-gray-500 font-semibold">Relacionamento direto com a Diretoria</p>
              </li>

              <li className="flex gap-2 items-center text-blue-500">
                <FaCheckCircle size={20} />
                <p className="text-gray-500 font-semibold">Desenvolvimento de projetos customizados</p>
              </li>

              <li className="flex gap-2 items-center text-blue-500">
                <FaCheckCircle size={20} />
                <p className="text-gray-500 font-semibold">Atendimento às normas vigentes</p>
              </li>

              <li className="flex gap-2 items-center text-blue-500">
                <FaCheckCircle size={20} />
                <p className="text-gray-500 font-semibold">Gestão do relacionamento pré e pós-venda</p>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:gap-8 w-full justify-center mt-8">

              <div className="justify-center py-8 w-full sm:w-36 px-12 flex flex-col gap-1 items-center rounded shadow-lg border border-b-8 border-b-blue-500 scale-75 sm:scale-100 mx-auto sm:mx-0">
                <FaBriefcase size={40} color={"#002D72"} />
                <p className="text-gray-500 font-semibold">Desde</p>
                <p className="text-2xl text-[#002D72] font-black">1993</p>
              </div>

              <div className="justify-center py-8 w-full sm:w-36 px-12 flex flex-col gap-1 items-center rounded shadow-lg border border-b-8 border-b-blue-500 scale-75 sm:scale-100 mx-auto sm:mx-0">
                <FaAward size={40} color={"#002D72"} />
                <p className="text-gray-500 font-semibold">Cliente</p>
                <p className="text-2xl text-[#002D72] font-black">80+</p>
              </div>

              <div className="justify-center py-8 w-full sm:w-36 px-12 flex flex-col gap-1 items-center rounded shadow-lg border border-b-8 border-b-blue-500 scale-75 sm:scale-100 mx-auto sm:mx-0">
                <FaClipboardCheck size={40} color={"#002D72"} />
                <p className="text-gray-500 font-semibold">Projetos</p>
                <p className="text-2xl text-[#002D72] font-black">200+</p>
              </div>

            </div>
          </div>

          <div className="w-full relative rounded">
            <Image src={CTZLOCAL} alt={""} width={600} height={600} className="w-full h-[400px] rounded" style={{ objectFit: "cover" }} />
          </div>

          
        </div>
      </div>

      <div className="w-full py-12">
        <div className="w-full h-full max-w-[1200px] mx-auto flex flex-col gap-4 mb-8 px-8">

          <div>
            <h2 className="text-sm text-center lg:text-start">CTZ</h2>
            <h1 className="text-2xl text-[#002D72] font-bold text-center lg:text-start">Conheça nossa história</h1>
          </div>

          <div>
            Desde 1993 quando da sua fundação, a CTZ se consolidou como uma empresa de alto padrão de qualidade e seriedade na execução de Instalações Elétricas, Hidráulicas, Prevenção e Combate a Incêndio, Montagens Eletromecânicas, Montagem de Quadros, Painéis de Baixa, Tensão, Consultorias e Contratos de Manutenção.
          </div>
        </div>

        <div className="w-full h-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-8 px-8">
          <div className="py-8 px-12 md:px-12 bg-blue-500 text-white w-full sm:w-72 rounded mx-auto">
            <FaGlobeAmericas size={40}/>
            <h1 className="text-xl md:text-2xl font-bold my-4">Missão</h1>
            <p>Oferecer as melhores soluções em serviços de engenharia, contribuindo com a qualidade de vida e o bem-estar dos consumidores, através de uma gestão sustentável</p>
          </div>
          <div className="py-8 px-12 bg-blue-500 text-white w-full sm:w-72 rounded mx-auto">
            <FaPuzzlePiece size={40}/>
            <h1 className="text-xl md:text-2xl font-bold my-4">Visão</h1>
            <p>Buscar o melhor resultado por meio de equipes bem treinadas e motivadas a promover o melhor serviço, tornando a CTZ referência no mercado.</p>
          </div>
          <div className="py-8 px-12 bg-blue-500 text-white w-full sm:w-72 rounded mx-auto">
            <FaLeaf size={40}/>
            <h1 className="text-xl md:text-2xl font-bold my-4">Valores</h1>
            <p>Transparência, Ética, Sustentabilidade, Excelência em Qualidade e Valorização dos Colaboradores.</p>
          </div>
        </div>
      </div>

      <div className="w-full py-12">
          <div className="w-full h-full max-w-[1200px] mx-auto px-8">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 mb-8 w-full">
              <div>
                <h2 className="text-sm text-center lg:text-start">Nossos clientes</h2>
                <h1 className="text-2xl text-[#002D72] font-bold text-center lg:text-start">Parcerias de sucesso</h1>
              </div>

              <Link href="/portfolio" className="py-4 px-12 rounded text-white bg-blue-500 font-bold text-nowrap hover:opacity-90">Portfólio</Link>
            </div>

            <div className="w-full h-[300px] bg-blue-700 text-white text-center">
              WIP: Aqui Lista de clientes da CTZ
            </div>

          </div>
        </div>

    </div>
  )
};



// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
