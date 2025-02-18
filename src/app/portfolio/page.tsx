"use client";

import { portfólio } from "@/utils/infos";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="w-full mx-auto max-w-[1200px]">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-center text-3xl font-bold mb-16 mt-8 text-[#002D72]">Conheça Nossos Portfólio</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-8 lg:px-0">
        {
          portfólio.map((item, index) => {
            return (
              <Link href={`/portfolio/${item.id}`} key={index} className="mx-auto w-full flex gap-4 items-center p-4 bg-gray-100 rounded transition-transform duration-300 hover:translate-y-[-10px] cursor-pointer hover:opacity-95">
              <div className="w-32 h-32 bg-gray-200 rounded-full aspect-square">
                <Image src={item.img} alt={item.category} className="w-32 h-32 object-cover rounded-full" width={100} height={100}/>
              </div>
                <p className="md:text-2xl text-xl font-extrabold text-gray-700">{item.category}</p>
              </Link>
            )
          })
        }
      </div>

      <div className="h-20"/>

    </div>
  )
};

