'use client';

import { redirectToWhatsapp } from "@/utils";
import { servicesList2 } from "@/utils/infos";
import React, { useMemo, useState } from "react";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";


interface Params {
  id: string;
}

export default function ServiceId({ params }: { params: Promise<Params> }) {

  const unwrappedParams = React.use(params);
  
  const service = useMemo(() => {
    return servicesList2.find((service) => service.id === Number(unwrappedParams.id));
  }, [unwrappedParams.id])

  const iconsClassName = `grid md:grid-cols-2 grid-cols-1 gap-12 xl:grid-cols-${ service.icons.length > 4 ? 4 : service.icons.length }`
  const icons2ClassName = `w-full max-w-[1200px] grid md:grid-cols-2 grid-cols-1 gap-8 py-12 px-8 lg:px-0 xl:grid-cols-${ service?.icons2?.length > 4 ? 4 : service?.icons2?.length ?? 0 }`

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="w-full max-w-[1200px] px-8 lg:px-0">
        <h1 className="text-center text-3xl font-bold mt-8 text-[#002D72]">{service.titulo}</h1>
        <h2 className="text-center text-lg text-[#002D72] leading-relaxed">{service.descricao}</h2>
      </div>

      <div className="w-full max-w-[1200px] px-8 lg:px-0 py-12">
        {service.icons_title &&
        <h1 className="mb-8 text-center text-[#002D72] leading-relaxed text-lg">{service?.icons_title}</h1>
        }

        <div className={iconsClassName}>
          {
            service.icons.map((icon, index) => (<Item key={index} {...icon} />))
          }
        </div>
      </div>

      <div className="w-full max-w-[1200px] py-12 px-8">
        <h1 className="text-center text-lg text-[#002D72] leading-relaxed font-semibold">{service.subtitle}</h1>

        <div className="h-12"/>

        <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
          {
            service.steps.map((step, index) => (<StepItem key={index} step={step} />))
          }
        </div>
      </div>
      

      {service?.icons2?.length > 0 &&
      <div className={icons2ClassName}>
        {
          service.icons2.map((icon, index) => (<Item key={index} {...icon} />))
        }
      </div>
      }

      <div className="w-full py-12">
        <div className="max-w-[1200px] bg-[#002D72] min-h-[250px] py-8 px-16 flex justify-around items-center flex-col gap-8 lg:flex-row">
          <div>
            <h1 className="text-2xl font-bold text-white text-center">Solicitar orçamento</h1>
            <p className="text-gray-200 text-center">Solicite um orçamento dos serviços que oferecemos</p>
          </div>
          <div onClick={() => redirectToWhatsapp()} className="py-4 px-12 rounded text-white bg-blue-500 font-bold text-nowrap scale-125 hover:opacity-90 cursor-pointer">Entrar em contato</div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] py-12 px-8">
        <h1 className="text-center text-3xl font-bold mt-8 text-[#002D72] mb-8">Perguntas frequentes</h1>
        <div className="w-full flex flex-col gap-2">
          {
            service.faq.map((faq, index) => (<FaqItem key={index} {...faq} />))
          }
        </div>
      </div>



    </div>
  );
};


function FaqItem({ question,answer }: { question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full text-[#002D72] bg-white p-4 border">
      <div className="flex gap-4 items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>
          {
          isOpen
          ? <FaChevronUp size={20} />
          : <FaChevronDown size={20} />
          }
        </div>
        <p className="text-md font-semibold">{question}</p>
      </div>
      {isOpen && <div className="mt-4 whitespace-pre-line">{answer}</div>}
    </div>
  )
  
}


function StepItem(item: any) {
  return (
    <div className="w-full flex gap-4 items-center p-4 text-[#002D72] bg-white">
      <div>
        <FaCheck size={20} />
      </div>
      <p className="text-md">{item.step}</p>
    </div>
  )
}

function Item(item: any) {

  return (

    <div className="p-8 bg-blue-500 text-white w-full sm:w-72 rounded mx-auto">
    {item.icon}
    <h1 className="text-md md:text-xl font-bold my-4">{item.description}</h1>
    {/* <p>{item.description}</p> */}
  </div>
  )
  return (
    <div
      className="w-full h-full px-8 py-4 flex flex-col justify-between hover:opacity-95 text-[#002D72] bg-white border-b-2 border-b-[#002D72]"
    >
      <div>
      <p className="text-sm font-bold">{item.description}</p>
      </div>

      <div className="flex justify-end">
      {item.icon}
      </div>
    </div>
  )
}