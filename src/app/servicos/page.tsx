"use client";

import { servicesList2 } from "@/utils/infos";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


export default function Servicos() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-center text-3xl font-bold mb-16 mt-8 text-[#002D72]">Conheça Nossos Serviços</h1>
      </div>

      <div className="w-full grid grid-col-1 lg:grid-cols-2 gap-12 px-12 max-w-full">
        {
          servicesList2.map((item, index) => ( <Item key={index} item={item} /> ))
        }
      </div>

      <div className="h-20"/>
    </div>
  )
};


function Item({ item }: { item: { img: StaticImageData, titulo: string, descricao: string, id: number } }) {
  return (
    <div className="flex md:gap-12 gap-4 max-w-[800px] w-full mx-auto items-center p-4 md:flex-row flex-col border-b-[#002D72] border-b-2">
      <div className="max-w-[500px]">
        <Image src={item.img} alt={item.titulo} className="h-48 object-cover w-[300px]" />
      </div>

      <div className="font-semibold flex flex-col items-center md:items-start">
        <h1 className="text-[#002D72] leading-relaxed">
          {item.titulo}
        </h1>
        <h2 className="text-gray-600 text-sm leading-relaxed md:my-4 my-2">
          {item.descricao}
        </h2>

        <Link href={`/servicos/${item.id}`} className="py-4 px-8 rounded text-white bg-blue-500 font-bold text-nowrap text-sm hover:opacity-90">
          Saiba Mais
        </Link>
      </div>
    </div>
  )
}