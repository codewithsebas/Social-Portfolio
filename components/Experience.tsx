import { ExperienceInterface } from "@/interface/Experience.Interface";
import Image from "next/image";

import {BiWorld} from "react-icons/bi"

export default function Experience ({mode, image, title, company, country, date, description, techMain}: ExperienceInterface) {
    return(
        <div
      className={`flex flex-col gap-2 w-full h-full rounded-md border ${
        mode ? "bg-white text-zinc-700 border-black/5 hover:border-blue-500/50 hover:shadow-md" : "bg-[#161616] border-zinc-500/20 hover:border-blue-500/50 hover:shadow-xl hover:bg-white/10"
      }`}
    >
      <a
        aria-label="Project"
        rel="noreferrer"
        target="_blank"
        href={image}
        className="w-full h-full rounded-md"
      >
        <Image
          width={3000}
          height={3000}
          priority
          src={image}
          alt="Experience"
          className="rounded-t-md object-cover w-full h-60 border-b border-white/5"
        />

        <div className="flex items-center gap-3 pt-3 pb-4 px-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-xl">{title}</h1>
            <div className="flex items-center">
              <p className="flex items-center gap-1">
                {country} - <BiWorld />
              </p>
              <p className="px-3">{date}</p>
            </div>

            <p className={`border-t pt-3 ${mode ? 'border-black/10 text-black/70' : 'border-white/10 text-white/70'}`}>
                {description}
            </p>
            <h1 className="font-bold">{techMain}</h1>
          </div>
        </div>
      </a>
    </div>
    )
}