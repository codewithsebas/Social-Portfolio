import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import Image from "next/image";
import { ModeInterface } from "@/interface/Mode.Interface";
import { useState } from "react";
import { FcBriefcase, FcIdea, FcOpenedFolder } from "react-icons/fc";

const Header = ({ mode, setMode, menu, setMenu }: ModeInterface) => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <div
        onClick={() => setMenuMobile(!menuMobile)}
        className={`fixed w-full h-full z-20 duration-200
        ${menuMobile ? "opacity-100 overflow-y-hidden" : "opacity-0 pointer-events-none"}
         ${
           mode
             ? "bg-white/20 border-black/5 text-zinc-700"
             : "bg-[#16161685] border-white/5 text-white"
         }`}
      ></div>
      <div
        onClick={() => setMenuMobile(!menuMobile)}
        className={`w-full h-48 fixed bottom-0 right-0 z-40 duration-200 p-3 border-t flex items-center 
        ${
          menuMobile
            ? "opacity-100 translate-y-0"
            : "pointer-events-none translate-y-60"
        } ${mode ? "bg-white" : "bg-[#1d1d1d]  border-zinc-500/20"}`}
      >
        <ul className="w-full font-medium text-base flex flex-col justify-center gap-0 sincopy">
          <li
            onClick={() => setMenu(1)}
            className={`grow duration-150 font-bold cursor-pointer py-2 px-2 border-b-2 h-14 flex items-center justify-between ${
              menu === 1
                ? "text-blue-500 border-blue-500"
                : "border-transparent"
            }`}
          >
            <span className="pr-1 text-lg">About me & Experience</span>
            <span className="text-2xl">
              <FcBriefcase />
            </span>
          </li>
          <li
            onClick={() => setMenu(2)}
            className={`grow duration-150 font-bold cursor-pointer py-2 px-2 border-b-2 h-14 flex items-center justify-between ${
              menu === 2
                ? "text-blue-500 border-blue-500"
                : "border-transparent"
            }`}
          >
            <span className="pr-1 text-lg">Designs & Projects</span>
            <span className="text-2xl">
              <FcOpenedFolder />
            </span>
          </li>
          <li
            onClick={() => setMenu(3)}
            className={`grow duration-150 font-bold cursor-pointer py-2 px-2 border-b-2 h-14 flex items-center justify-between ${
              menu === 3
                ? "text-blue-500 border-blue-500"
                : "border-transparent"
            }`}
          >
            <span className="pr-1 text-lg">Blog</span>
            <span className="text-2xl">
              <FcIdea />
            </span>
          </li>
        </ul>
      </div>
      <header
        className={`border flex flex-wrap justify-between items-center sticky top-0 px-4 w-full z-10 sincopy ${
          mode
            ? "bg-white border-black/5 text-zinc-700"
            : "bg-[#161616] border-white/5 text-white"
        }`}
      >
        <div className="flex gap-2 items-center my-3">
          <div className="w-full h-full flex gap-3 items-center">
            <Image
              width={100}
              height={100}
              priority
              className="w-8"
              src="/favicon.svg"
              alt="Logo Facebook"
            />
            <h1 className="font-bold text-xl">Portfolio</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ul className="font-medium text-base  h-full hidden md:flex flex-wrap justify-center gap-0 sincopy">
            <li
              onClick={() => setMenu(1)}
              className={`grow duration-150 cursor-pointer py-2 px-2 border-b-2 h-14 flex items-center ${
                menu === 1
                  ? "text-blue-500 border-blue-500"
                  : "border-transparent"
              }`}
            >
              <span className="pr-1">About me & Experience</span>
            </li>
            <li
              onClick={() => setMenu(2)}
              className={`grow duration-150 cursor-pointer py-2 px-2 border-b-2 h-14 flex items-center ${
                menu === 2
                  ? "text-blue-500 border-blue-500"
                  : "border-transparent"
              }`}
            >
              <span className="pr-1">Designs & Projects</span>
            </li>
            <li
              onClick={() => setMenu(3)}
              className={`grow duration-150 cursor-pointer py-2 px-2 border-b-2 h-14 flex items-center ${
                menu === 3
                  ? "text-blue-500 border-blue-500"
                  : "border-transparent"
              }`}
            >
              <span className="pr-1">Blog</span>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setMode(!mode)}
            className={`text-xl w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
              mode
                ? "bg-[#e2e2e2] text-zinc-700 border border-black/10 hover:bg-[#d3d3d3]"
                : "bg-[#2c2c2c] text-zinc-100 border border-white/10 hover:bg-[#4e4e4e]"
            }`}
          >
            {mode ? <MdDarkMode /> : <MdLightMode />}
          </button>

          <button
            onClick={() => setMenuMobile(!menuMobile)}
            type="button"
            className={`text-2xl w-9 h-9 rounded-md flex items-center justify-center cursor-pointer md:hidden ${
              mode
                ? "bg-[#e2e2e2] text-zinc-700 border border-black/10 hover:bg-[#d3d3d3]"
                : "bg-[#2c2c2c] text-zinc-100 border border-white/10 hover:bg-[#4e4e4e]"
            }`}
          >
            <MdMenu />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
