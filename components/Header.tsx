import { RiPhoneFill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { ModeInterface } from "@/interface/Mode.Interface";

const Header = ({ mode, setMode }: ModeInterface) => {
  return (
    <header
      className={` border  flex justify-between items-center px-4 absolute w-full z-10 py-2 lg:py-2 ${
        mode
          ? "bg-white border-black/10 text-zinc-700"
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
      <div className="flex items-center gap-1">
        <a
          aria-label="Contact"
          rel="noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3152058712&text=Hola,%20Sebasti%C3%A1n%20buenos%20d%C3%ADas,%20%20te%20escribo%20por%20que%20aplicaste%20a%20una%20oferta%20laboral%20por%20medio%20del%20LinkedIn"
          className={`text-xl w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
            mode
              ? "bg-[#e2e2e2] text-zinc-700 border border-black/10 hover:bg-[#d3d3d3]"
              : "bg-[#2c2c2c] text-zinc-100 border border-white/10 hover:bg-[#4e4e4e]"
          }`}
        >
          <RiPhoneFill />
        </a>
        <div
          onClick={() => setMode(!mode)}
          className={`text-xl w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
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
