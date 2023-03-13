import { DevInterface } from "@/interface/Dev.Interface";
import { Tooltip } from "./Tooltip";
import Image from "next/image";

export default function Dev({ mode, image, title, lindedIn }: DevInterface) {
  return (
    <div
      className={`relative group border  rounded-full flex items-center justify-center cursor-pointer ${
        mode ? "border-[#bdbdbd]" : "border-[#313133] "
      }`}
    >
      <a
        className="w-8 h-8"
        aria-label="Dev"
        rel="noreferrer"
        target="_blank"
        href={lindedIn}
      >
        <Image
          width={3000}
          height={3000}
          priority
          className="w-full h-full object-cover rounded-full"
          src={image}
          alt="Profile"
        />
      </a>
      <Tooltip mode={mode} title={title} lindedIn={lindedIn} />
    </div>
  );
}
