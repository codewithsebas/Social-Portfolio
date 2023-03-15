import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { ProjectInterface } from "@/interface/Project.Interface";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

export default function Project({
  mode,
  image,
  title,
  day,
  year,
  link,
  deploy,
  description,
}: ProjectInterface) {
  return (
    <div
      className={`flex flex-col gap-2 w-full h-full md:rounded-md border cursor-pointer ${
        mode
          ? "bg-white text-zinc-700 border-black/5 hover:border-blue-500/50 hover:shadow-md"
          : "bg-[#161616] border-zinc-500/20 hover:border-blue-500/50 hover:shadow-xl hover:bg-white/10"
      }`}
    >
      <div className="w-full h-full md:rounded-md">
        <Image
          width={3000}
          height={3000}
          priority
          src={image}
          alt=""
          className="md:rounded-t-md object-cover object-top w-full h-64 border-b border-white/5"
        />

        <div className="flex items-center gap-3 py-4 px-4 ">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-xl">{title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex">
                <p className="flex items-center gap-1">
                  {day} d - <BiWorld />
                </p>
                <p className="px-3 text-lg">{year}</p>
              </div>
              <div className="text-2xl flex gap-2">
                <a
                  aria-label="Project"
                  rel="noreferrer"
                  target="_blank"
                  href={link}
                >
                  <FaGithub />
                </a>
                {deploy && (
                  <a
                    aria-label="Project"
                    rel="noreferrer"
                    target="_blank"
                    href={deploy}
                  >
                    <FaTelegramPlane />
                  </a>
                )}
              </div>
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
