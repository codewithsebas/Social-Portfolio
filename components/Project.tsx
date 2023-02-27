import Image from "next/image";
import { RiMoreFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { Project } from "@/interface/Project.Interface";

export default function Project({image, title, day, year, link}: Project) {
  return (
    <div className="flex flex-col gap-2 w-full bg-[#161616] rounded-md border border-white/5">
      <a
        aria-label="Project"
        rel="noreferrer"
        target="_blank"
        href={link}
        className="w-full h-full rounded-md"
      >
        <Image
          width={3000}
          height={3000}
          priority
          src={image}
          alt=""
          className="rounded-t-md object-cover w-full h-full border-b border-white/5"
        />

        <div className="flex items-center gap-3 py-2 px-3 ">
          <div className="flex flex-col">
            <h1 className="text-white font-medium">
              {title}
            </h1>
            <p className="text-white/50 flex items-center gap-1">
              {day} d - <BiWorld />
            </p>
          </div>
        </div>
        <p className="text-white px-4 pb-3">{year}</p>
      </a>
    </div>
  );
}
