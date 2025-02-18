import { classNames } from "@/utils";
import Image from "next/image";
import Link from "next/link";


export default function HomeImage({ item, index, activeIndex }) {
  const isActive = index === activeIndex;

  return (
    <div className="min-h-[600px] w-full relative flex justify-center items-center text-white flex-col gap-4 py-4 px-8">
      {/* Camada do fundo com a animação */}
      {/* <div
        className={classNames(
          "absolute inset-0 bg-cover bg-center transition-all duration-500",
          isActive ? "animate-zoom-in-out" : ""
        )}
        style={{ backgroundImage: `url(${item.img})` }}
      ></div> */}
      <Image src={item.img} alt="" fill style={{ objectFit: "cover" }} className={isActive ? "animate-zoom-in-out" : ""} />

      {/* Gradientes sobre o fundo */}
      <>
        <div className="absolute inset-0 bg-gradient-to-b to-[#002D72] from-transparent opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-t to-[#002D72] from-transparent opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b to-gray-900 from-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t to-gray-900 from-transparent opacity-40"></div>
      </>

      {/* Conteúdo textual com animação */}
      <div
        className={classNames(
          "relative z-[1] flex flex-col items-center",
          isActive ? "fade-in-up" : ""
        )}
      >
        <p className="text-center font-medium">{item.firstTitle}</p>
        <p className="text-center font-semibold md:text-6xl text-3xl my-2 max-w-[900px]">{item.title}</p>
        <p className="text-center font-medium">{item.description}</p>

        <Link href={"/contato"}>
          <button className="py-4 px-8 rounded text-white bg-blue-500 font-bold mt-8 hover:opacity-90">Entre em contato</button>
        </Link>

      </div>
    </div>
  );
}
