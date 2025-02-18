import Link from "next/link";

export default function ServiceButton({ title, description, icon, id }: { title: string, description: string, icon: any, id: number }) {
  return (
    <Link href={`/servicos/${id}`} passHref
      className="w-full h-full px-8 py-4 rounded cursor-pointer bg-white flex flex-col justify-between transition-transform duration-300 hover:translate-y-[-10px] hover:opacity-95"
    >
      <div>
      <p className="text-lg font-bold text-[#002D72]">{title}</p>
      <p className="text-sm font-medium my-2 text-gray-600">{description}</p>
      </div>

      <div className="flex justify-end text-[#002D72]">
      {icon}
      </div>
    </Link>
  )
};