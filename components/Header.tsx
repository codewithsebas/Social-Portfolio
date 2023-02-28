import { RiMessengerFill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { ModeInterface } from "@/interface/Mode.Interface";

const Header = ({ mode, setMode }: ModeInterface) => {
  return (
    <header
      className={` border  flex justify-between items-center px-4 absolute w-full z-10 py-2 lg:py-2 duration-200 ${
        mode
          ? "bg-[#f0f0f0] border-black/10 text-zinc-700"
          : "bg-[#161616] border-white/10 text-white"
      }`}
    >
      <div className="flex gap-2 items-center">
        <div className="w-8 h-full flex gap-3 items-center">
          <Image
            width={100}
            height={100}
            priority
            src="/favicon.svg"
            alt="Logo Facebook"
          />
          <h1 className="font-bold text-xl ">Portfolio</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`text-xl w-9 h-9 rounded-full flex items-center justify-center duration-150 cursor-pointer ${
            mode
              ? "bg-[#e2e2e2] text-zinc-700 border border-black/10 hover:bg-[#d3d3d3]"
              : "bg-[#2c2c2c] text-zinc-100 border border-white/10 hover:bg-[#4e4e4e]"
          }`}
        >
          <AiOutlinePlus />
        </div>
        <div
          className={`text-xl w-9 h-9 rounded-full flex items-center justify-center duration-150 cursor-pointer ${
            mode
              ? "bg-[#e2e2e2] text-zinc-700 border border-black/10 hover:bg-[#d3d3d3]"
              : "bg-[#2c2c2c] text-zinc-100 border border-white/10 hover:bg-[#4e4e4e]"
          }`}
        >
          <RiMessengerFill />
        </div>
        <div
          onClick={() => setMode(!mode)}
          className={`text-xl w-9 h-9 rounded-full flex items-center justify-center duration-150 cursor-pointer ${
            mode
              ? "bg-[#e2e2e2] text-zinc-700 border border-black/10 hover:bg-[#d3d3d3]"
              : "bg-[#2c2c2c] text-zinc-100 border border-white/10 hover:bg-[#4e4e4e]"
          }`}
        >
          {mode ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </header>
  );
};

export default Header;
