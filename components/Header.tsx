import { FiSearch } from "react-icons/fi";
import { HiHome, HiUsers } from "react-icons/hi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#161616] border border-white/10 flex justify-between items-center px-4 absolute w-full z-10 py-2 lg:py-2">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-full flex gap-3 items-center">
          <Image
            width={100}
            height={100}
            priority
            src="/favicon.svg"
            alt="Logo Facebook"
          />
          <h1 className="font-bold text-xl text-white">Portfolio</h1>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-[#424242] text-white/90 text-xl w-9 h-9 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
          <AiOutlinePlus />
        </div>
        <div className="bg-[#424242] text-white/90 text-xl w-9 h-9 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#4e4e4e]">
          <RiMessengerFill />
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
          <Image
            width={300}
            height={300}
            priority
            className="w-full h-full object-cover rounded-full"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
