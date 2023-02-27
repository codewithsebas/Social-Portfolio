import { Dev } from "@/interface/Dev.Interface";
import { Tooltip } from "./Tooltip";
import Image from "next/image";

export default function Dev({image, title, lindedIn}: Dev) {
  return (
    <div className="bg-[#424242] relative group border border-[#313133] w-8 h-8 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
      <Image
        width={3000}
        height={3000}
        priority
        className="w-full h-full object-cover rounded-full"
        src={image}
        alt="Profile"
      />
      <Tooltip
        title={title}
        lindedIn={lindedIn}
      />
    </div>
  );
}
