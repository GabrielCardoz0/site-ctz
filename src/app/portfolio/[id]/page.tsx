"use client";

import { redirectToWhatsapp } from "@/utils";
import { portfólio } from "@/utils/infos"
import React, { useMemo } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Params {
  id: string;
}

interface Item {
  id: string;
  category: string;
  clients: {
      name: string;
      local: string;
      client: string;
      construct_area?: string;
      execution_time?: string;
  }[];
}

export default function Portfolio({ params }: { params: Promise<Params> }) {

  const unwrappedParams = React.use(params);


  const item = useMemo(() => {
    return portfólio.find((item) => item.id === unwrappedParams.id);
  }, [unwrappedParams.id])

  return (
    <div className="w-full max-w-[1200px] mx-auto">

      <div className="w-full max-w-[1200px] px-8 lg:px-0">
        <h1 className="text-center text-3xl font-bold mt-8 text-[#002D72]">{item.category}</h1>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {
          item.clients.map((item, index) => (<Item key={index} item={item }/>))
        }
      </div>


      <div className="w-full py-12">
        <div className="max-w-[1200px] bg-[#002D72] min-h-[250px] py-8 px-16 flex justify-around items-center flex-col gap-8 lg:flex-row">
          <div>
            <h1 className="text-2xl font-bold text-white text-center">Solicitar orçamento</h1>
            <p className="text-gray-200 text-center">Solicite um orçamento dos serviços que oferecemos</p>
          </div>
          <div onClick={() => redirectToWhatsapp()} className="py-4 px-12 rounded text-white bg-blue-500 font-bold text-nowrap scale-125 hover:opacity-90 cursor-pointer">Entrar em contato</div>
        </div>
      </div>

    </div>
  )
};



function Item({ item }: { item: Item['clients'][number] }) {
  return (
    <div className="flex md:gap-12 gap-4 max-w-[300px] w-full mx-auto items-center p-4 md:flex-row flex-col border-b-[#002D72] border-b-2">
      {/* <div className="max-w-[500px]">
        <Image src={item.img} alt={item.titulo} className="h-48 object-cover w-[300px]" />
      </div> */}

      <div className="flex flex-col items-center md:items-start">

        <h1 className="text-[#002D72] leading-relaxed font-semibold text-lg">
          {item.name}
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          {item.local}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold">Cliente: </span>{item.client}</p>
        {
        item.construct_area &&
        <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold">Área construída: </span>{item.construct_area}</p>
        }
        {
        item.execution_time &&
        <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold">Prazo de execução: </span>{item.execution_time}</p>
        }

      </div>
    </div>
  )
}