import { ExperienceInterface } from "@/interface/Experience.Interface";
import Image from "next/image";

import { BiWorld } from "react-icons/bi";

export default function Experience({
  grid,
  mode,
  image,
  title,
  company,
  country,
  date,
  description,
  techMain,
}: ExperienceInterface) {
  return (
    <div
      className={`flex flex-col gap-2 w-full h-full rounded-md border duration-150 ${
        mode
          ? "bg-white text-zinc-700 border-black/5 md:hover:border-blue-500/50 hover:shadow-lg"
          : "bg-[#161616] border-zinc-500/20 md:hover:border-blue-500/50 hover:shadow-xl hover:bg-white/10"
      }`}
    >
      <div className="w-full h-full rounded-md cursor-pointer">
        <Image
          width={3000}
          height={3000}
          priority
          src={image}
          alt="Experience"
          className="rounded-t-md object-cover object-top w-full h-64 border-b border-white/5"
        />

        <div className="flex flex-wrap items-center gap-3 pt-3 pb-4 px-4">
          <div className="flex flex-col justify-between h-full gap-3">
            <h1 className="font-bold text-2xl">{title}</h1>
            <div className="flex flex-col items-start gap-1">
              <h2 className="font-semibold text-xl">{company}</h2>
              <p className="flex items-center gap-3">
                {country}
                <BiWorld />
                {date}
              </p>
            </div>

            <p
              className={`border-t pt-3 ${
                mode
                  ? "border-black/10 text-black/70"
                  : "border-white/10 text-white/70"
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
