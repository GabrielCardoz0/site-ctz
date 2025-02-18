"use client";


import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeImages } from "@/utils/infos";
import Image from "next/image";
import { FaGlobeAmericas, FaLeaf, FaPuzzlePiece } from "react-icons/fa";
import Link from "next/link";

export default function Institucional() {

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    fade: true,

    // beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-center text-3xl font-bold mb-16 mt-8 text-[#002D72]">Conheça Nossa História</h1>
      </div>

      <div className="flex gap-12 w-full max-w-[1200px] mx-auto flex-col items-center px-8 lg:flex-row">
        <div className="max-w-[500px] w-full">
          <Slider {...settings}>
            {
              homeImages.map((item, index) => <Image key={index} src={item.img} alt={item.title} className="h-72 object-cover" />)
            }
          </Slider>
        </div>

        <div className="font-semibold">
          <h1 className="text-lg text-[#002D72] leading-relaxed mb-4 text-justify">
            Desde 1993 quando da sua fundação, a CTZ se consolidou como uma empresa de alto padrão de qualidade e seriedade na execução de Instalações Elétricas, Hidráulicas, Prevenção e Combate a Incêndio, Montagens Eletromecânicas, Montagem de Quadros, Painéis de Baixa Tensão, Consultorias e Contratos de Manutenção.
          </h1>
          <h2 className="text-gray-600 text-sm leading-relaxed text-justify">
            O nosso objetivo é a satisfação total de nossos clientes, e isso se dá pela prática das melhores técnicas de gestão de pessoas e processos do mercado, seja preparando e mantendo as equipes motivadas para a execução de projetos com excelência, seja na Gestão da Cadeia de Suprimentos e Serviços estabelecendo parcerias que garantam o comprometimento com os resultados da CTZ e seus Clientes. Utilizamos os conhecimentos e as técnicas de Gerenciamento de Projetos para a busca constante dos melhores resultados e cumprimento de nossos prazos. Somos uma das primeiras empresas de Engenharia a receber certificação ISO, pela Fundação Vanzolini.
          </h2>
        </div>
      </div>

      <div className="h-10"/>

      <div  className="w-full py-12">
        <div className="w-full h-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-8 px-8">
          <div className="py-8 px-12 md:px-12 bg-blue-500 text-white w-full md:w-72 rounded mx-auto">
            <FaGlobeAmericas size={40}/>
            <h1 className="text-xl md:text-2xl font-bold my-4">Missão</h1>
            <p>Oferecer as melhores soluções em serviços de engenharia, contribuindo com a qualidade de vida e o bem-estar dos consumidores, através de uma gestão sustentável</p>
          </div>
          <div className="py-8 px-12 bg-blue-500 text-white w-full md:w-72 rounded mx-auto">
            <FaPuzzlePiece size={40}/>
            <h1 className="text-xl md:text-2xl font-bold my-4">Visão</h1>
            <p>Buscar o melhor resultado por meio de equipes bem treinadas e motivadas a promover o melhor serviço, tornando a CTZ referência no mercado.</p>
          </div>
          <div className="py-8 px-12 bg-blue-500 text-white w-full md:w-72 rounded mx-auto">
            <FaLeaf size={40}/>
            <h1 className="text-xl md:text-2xl font-bold my-4">Valores</h1>
            <p>Transparência, Ética, Sustentabilidade, Excelência em Qualidade e Valorização dos Colaboradores.</p>
          </div>
        </div>
      </div>

      <div className="w-full py-12">
        <div className="max-w-[1200px] bg-[#002D72] min-h-[250px] py-8 px-16 flex justify-around items-center flex-col gap-8 lg:flex-row">
          <div>
            <h1 className="text-2xl font-bold text-white text-center">Conheça nossos serviços</h1>
            <p className="text-gray-200 text-center">Conheça todos os serviços que oferecemos</p>
          </div>
          <Link href={"/servicos"} className="py-4 px-12 rounded text-white bg-blue-500 font-bold text-nowrap scale-125 hover:opacity-90">Conhecer</Link>
        </div>
      </div>

      <div className="w-full py-12">
        <div>
          <h1 className="text-2xl font-bold text-[#002D72] text-center">Nossos Clientes</h1>
          <p className="text-gray-600 text-center">Conheça alguns de nossos clientes</p>
          <div className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-center gap-8 px-8 py-8">
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src="/images/clients/1.png" alt="Client 1" width={80} height={80}/>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
