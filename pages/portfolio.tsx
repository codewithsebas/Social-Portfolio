import { HiLocationMarker } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaDiscord, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FcOpenedFolder, FcFile } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import Header from "../components/Header";
import Image from "next/image";
import { Tooltip } from "@/components/Tooltip";
import Dev from "@/components/Dev";
import Project from "@/components/Project";
import Design from "@/components/Design";

export default function Portfolio() {
  return (
    <>
      <div className="w-full h-[40rem] lg:h-[38.8rem] flex flex-col justify-center items-center bg-[#161616] border-b border-white/5">
        <div className="h-full w-full max-w-[60rem] relative">
          <Header />
          <div className="w-full sm:h-[25.3rem] h-[20rem]  rounded-b-lg bg-gradient-to-t from-black/50 to-transparent flex items-end justify-end overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dovavvnjx/image/upload/v1677451999/banner_pvmpnf.jpg"
              alt="Banner"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className="w-full px-3 relative bg-[#161616]">
            <div className="w-full flex-row lg:justify-between lg:flex">
              <div className="w-full flex flex-col lg:flex items-center gap-5 relative">
                <a
                  aria-label="Tooltip"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/code-sebastian-giraldo/"
                  className="absolute bottom-36 lg:bottom-5 lg:left-0 w-44 h-44 rounded-full flex items-center justify-center cursor-pointer border-4 border-[#242424]"
                >
                  <Image
                    width={3000}
                    height={3000}
                    priority
                    className="w-full h-full object-cover rounded-full"
                    src="/profile.jpg"
                    alt="Profile"
                  />
                  <div className="absolute w-full h-full bg-white/5 rounded-full duration-100 hover:bg-white/10"></div>
                </a>
                <div className="flex flex-col gap-2 py-6 ml-0 mt-16 items-center lg:ml-16 lg:items-start lg:mt-0">
                  <p className="text-white text-4xl font-bold">
                    Sebastián Giraldo
                  </p>
                  <p className="w-full text-white/60 font-medium text-base text-center lg:text-left">
                    Friends Developers
                  </p>
                  <div className="flex">
                    <Dev
                      image="/profile1.jpg"
                      title="Laura Andrea Gómez"
                      lindedIn="https://www.linkedin.com/in/laura-andrea-g%C3%B3mez-carmona-651a0aa0/"
                    />

                    <Dev
                      image="/profile3.jpg"
                      title="Jahzeel Santacruz"
                      lindedIn="https://www.linkedin.com/in/jahzeelsantacruz/"
                    />

                    <Dev
                      image="/profile4.jpg"
                      title="Damaris Hernandez"
                      lindedIn="https://www.linkedin.com/in/jahzeelsantacruz/"
                    />

                    <Dev
                      image="/profile6.jpg"
                      title="Laura Pregonero"
                      lindedIn="https://www.linkedin.com/in/laura-camila-pregonero-mart%C3%ADnez-07449b22b/"
                    />

                    <Dev
                      image="/profile7.jpg"
                      title="Valeria Maldonado"
                      lindedIn="https://www.linkedin.com/in/valeria-maldonado-69696a210/"
                    />

                    <Dev
                      image="/profile8.jpg"
                      title="Lucía González"
                      lindedIn="https://www.linkedin.com/in/luciagonzalezlara/"
                    />

                    <div className="bg-[#ff0e0e] relative group border border-[#313133] text-white w-8 h-8 rounded-full flex items-center justify-center duration-150 cursor-pointer hover:bg-[#ff4b4b]">
                      <FaDiscord />
                      <Tooltip
                        title="Omar Gonzales"
                        lindedIn="https://www.linkedin.com/in/orglez/"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-center pb-5 lg:w-1/2 flex lg:items-end lg:justify-end gap-2 lg:py-5">
                <a
                  aria-label="GitHub"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/codewithsebas"
                  className="flex items-center gap-2 bg-white text-black py-2 px-3 rounded-md duration-150 cursor-pointer hover:bg-white/90"
                >
                  <FaGithub />
                  <h2 className="font-medium text-sm">GitHub</h2>
                </a>
                <a
                  aria-label="LinkedIn"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/code-sebastian-giraldo/"
                  className="flex items-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-md duration-150 cursor-pointer hover:bg-blue-500"
                >
                  <FaLinkedin />
                  <h2 className="font-medium text-sm">LinkedIn</h2>
                </a>

                <a
                  aria-label="Curriculum"
                  rel="noreferrer"
                  target="_blank"
                  download="WebDeveloperSebastianGiraldo.pdf"
                  href="/download/Web Developer.pdf"
                  className="flex items-center gap-2 bg-white/10 text-white py-2 px-3 rounded-md duration-150 cursor-pointer hover:bg-white/20"
                >
                  <FcFile />
                  <h2 className="font-medium text-sm">Curriculum</h2>
                </a>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/10"></div>
            <div className=" flex items-center justify-start">
              <ul className="text-white/60 font-medium text-lg flex gap-0">
                <li className="text-blue-500 border-b-2 border-blue-500 duration-150 cursor-pointer py-3 px-4">
                  Projects
                </li>
                <li className="duration-150 cursor-pointer border-b-2 border-transparent hover:border-blue-500 py-3 px-4">
                  Designs
                </li>
                <li className="duration-150 cursor-pointer border-b-2 border-transparent hover:border-blue-500 py-3 px-4">
                  Experience
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-3 m-3 pb-3 ">
            <div className="w-full lg:w-3/4 flex flex-col gap-3">
              <div className="w-full flex flex-col gap-3 bg-[#161616] rounded-md py-3 px-4 pb-5 border border-white/5">
                <h1 className="text-white font-medium text-2xl">Detalles</h1>
                <div className="flex items-start gap-3">
                  <AiFillCode className="text-white text-2xl" />
                  <p className="text-white cursor-text font-semibold">
                    Frontend Developer
                  </p>
                </div>
                <div className="w-full mt-1 flex flex-col gap-4">
                  <div className="w-full flex items-center gap-3 text-white text-xl">
                    <HiLocationMarker className="text-white text-2xl" />
                    <h1 className="flex gap-1 text-base">
                      De <p className="font-semibold">Ibagué, Colombia</p>
                    </h1>
                  </div>

                  <div className="w-full flex items-center gap-3 text-white text-xl">
                    <MdWork className="text-white text-2xl" />
                    <h1 className="flex gap-1 text-base">Open To Work</h1>
                  </div>

                  <div className="w-full flex items-center gap-3 text-white text-xl">
                    <FaTwitter className="text-white text-2xl" />
                    <a
                      rel="noreferrer"
                      target="_blank"
                      aria-label="Github"
                      className="text-base text-blue-400 hover:underline"
                      href="https://twitter.com/codewithsebas"
                    >
                      codewithsebas
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 bg-[#161616] rounded-md py-3 px-4 pb-5 border border-white/5">
                <h1 className="text-white font-medium text-2xl">
                  Next Page{" "}
                  <span className="hover:underline cursor-pointer">
                    Designs
                  </span>
                </h1>
                <div className="w-full mt-1 flex flex-col gap-4">
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524620/prettyform_jmzelz.webp"
                    link="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524620/prettyform_jmzelz.webp"
                  />
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524780/cretten_abzwqy.webp"
                    link="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524780/cretten_abzwqy.webp"
                  />
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524898/cretten2_tqgig7.webp"
                    link="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524898/cretten2_tqgig7.webp"
                  />
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524970/soft_boapbs.webp"
                    link="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524970/soft_boapbs.webp"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 ">
              <div className="w-full bg-[#161616] rounded-md border border-white/5">
                <div className="flex-row gap-5 md:items-center justify-between py-3 px-4 md:flex  text-xl">
                  <h1 className="text-white font-semibold">Projects</h1>
                  <FcOpenedFolder />
                </div>
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex justify-between px-4">
                  <button className="w-full flex justify-center items-center gap-2 text-blue-500 border-b-2 border-blue-500 duration-150 cursor-pointer py-3 px-4">
                    <RxHamburgerMenu className="text-xl" />
                    <h1>Vista de lista</h1>
                  </button>
                  <button className="w-full flex justify-center items-center gap-2 border-b-2 border-transparent text-white/60 hover:border-blue-500 duration-150 cursor-pointer py-3 px-4">
                    <RiLayoutGridFill className="text-xl" />
                    <h1>Vista de cuadrícula</h1>
                  </button>
                </div>
              </div>

              <Project
                image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677102204/Captura_de_pantalla_2023-02-22_154244_gyh8is.png"
                title="Airbnb App"
                link="https://github.com/codewithsebas/Login-Register-for-Airbnb"
                day={4}
                year={2023}
              />

              <Project
                image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673320050/Captura_de_pantalla_2023-01-09_220535_dshabw.png"
                title="Real State"
                link="https://github.com/codewithsebas/Project-Real-State"
                day={7}
                year={2023}
              />

              <Project
                image="https://res.cloudinary.com/dovavvnjx/image/upload/v1676183351/f_xfboge.png"
                title="Facebook clone App"
                link="https://github.com/codewithsebas/Facebook-App"
                day={14}
                year={2023}
              />

              <Project
                image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673716764/Captura_de_pantalla_2023-01-14_121548_bbgs0a.png"
                title="Linktree"
                link="https://github.com/codewithsebas/Project-Linktree-Clone"
                day={50}
                year={2022}
              />

              <Project
                image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673655903/Captura_de_pantalla_2023-01-13_191504_m0kjtj.png"
                title="Spotify clone App"
                link="https://github.com/codewithsebas/Project-Spotify-2.0"
                day={70}
                year={2022}
              />

              <Project
                image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673745546/Captura_de_pantalla_2023-01-14_201840_ghu9qi.png"
                title="Rick and Morty"
                link="https://github.com/codewithsebas/Project-Rick-And-Morty"
                day={243}
                year={2022}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
