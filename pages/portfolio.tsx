import { HiLocationMarker } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaDiscord,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import { FcOpenedFolder, FcFile, FcBriefcase } from "react-icons/fc";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiBitbucket,
  SiJirasoftware,
  SiBootstrap,
  SiChakraui,
  SiFigma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import Header from "../components/Header";
import Image from "next/image";
import { Tooltip } from "@/components/Tooltip";
import Dev from "@/components/Dev";
import Project from "@/components/Project";
import Design from "@/components/Design";
import { useState } from "react";
import { ModeInterface } from "@/interface/Mode.Interface";
import Experience from "@/components/Experience";

export default function Portfolio({ mode, setMode }: ModeInterface) {
  const [grid, setGrid] = useState(false);
  const [menu, setMenu] = useState(1);
  return (
    <div
      className={`w-full relative flex flex-col justify-start items-center border-b border-white/5 ${
        mode ? "bg-[#f8f8f8] text-zinc-700" : "bg-[#1b1b1b] text-zinc-50"
      }`}
    >
      <div className="w-full max-w-[60rem] relative">
        <Header mode={mode} setMode={setMode} />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div
            className={`w-full h-[22.7rem] md:rounded-b-lg flex items-end justify-end overflow-hidden ${
              mode ? "opacity-100" : "opacity-80"
            }`}
          >
            <Image
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dovavvnjx/image/upload/v1677451999/banner_pvmpnf.jpg"
              alt="Banner"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className="w-full">
            <div className="w-full flex-row lg:justify-between lg:flex">
              <div className="w-full flex flex-col lg:flex items-center gap-5 relative">
                <a
                  aria-label="Tooltip"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/code-sebastian-giraldo/"
                  className={`absolute bottom-36 md:bottom-36 lg:bottom-5 lg:left-0 w-44 h-44 rounded-full flex items-center justify-center cursor-pointer border-4 ${
                    mode ? "border-[#f8f8f8]" : "border-[#1b1b1b]"
                  }`}
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
                <div className="flex flex-col gap-2 py-6 ml-0 mt-16 items-center lg:ml-12 lg:items-start lg:mt-0">
                  <p className="text-4xl font-bold text-center">
                    Sebastián Giraldo
                  </p>
                  <p
                    className={`w-full  font-medium text-base text-center lg:text-left ${
                      mode ? "text-black/60" : "text-white/60"
                    }`}
                  >
                    Reccomended Developers
                  </p>
                  <div className="flex flex-wrap justify-center w-full lg:justify-start">
                    <Dev
                      mode={mode}
                      image="/profile1.jpg"
                      title="Laura Andrea Gómez"
                      lindedIn="https://www.linkedin.com/in/laura-andrea-g%C3%B3mez-carmona-651a0aa0/"
                    />

                    <Dev
                      mode={mode}
                      image="/profile3.jpg"
                      title="Jahzeel Santacruz"
                      lindedIn="https://www.linkedin.com/in/jahzeelsantacruz/"
                    />

                    <Dev
                      mode={mode}
                      image="/profile6.jpg"
                      title="Laura Pregonero"
                      lindedIn="https://www.linkedin.com/in/laura-camila-pregonero-mart%C3%ADnez-07449b22b/"
                    />

                    <Dev
                      mode={mode}
                      image="/profile7.jpg"
                      title="Valeria Maldonado"
                      lindedIn="https://www.linkedin.com/in/valeria-maldonado-69696a210/"
                    />

                    <Dev
                      mode={mode}
                      image="/profile8.jpg"
                      title="Lucía González"
                      lindedIn="https://www.linkedin.com/in/luciagonzalezlara/"
                    />

                    <div
                      className={`bg-[#ff0e0e] relative group border text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff4b4b] ${
                        mode ? "border-[#bdbdbd]" : "border-[#313133]"
                      }`}
                    >
                      <FaDiscord />
                      <Tooltip
                        mode={mode}
                        title="Omar Gonzales"
                        lindedIn="https://www.linkedin.com/in/orglez/"
                      />
                    </div>

                    <Dev
                      mode={mode}
                      image="/profile9.jpg"
                      title="Julian Pachon"
                      lindedIn="https://www.linkedin.com/in/juliantm/"
                    />

                    <Dev
                      mode={mode}
                      image="/profile10.jpg"
                      title="Camila Quimbaya"
                      lindedIn="https://www.linkedin.com/in/camila-quimbaya/"
                    />

                    <Dev
                      mode={mode}
                      image="/profile11.jpg"
                      title="Afor_Digital"
                      lindedIn="youlinkedin"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full lg:justify-end justify-center items-center pb-5 lg:w-1/2 flex lg:py-5">
                <div className="w-80 flex flex-wrap gap-2 justify-center px-2 lg:px-0 lg:w-60">
                  <a
                    aria-label="GitHub"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/codewithsebas"
                    className={`grow justify-center flex items-center gap-2  py-2 px-3 rounded-md cursor-pointer ${
                      mode
                        ? "bg-zinc-700 border text-white hover:bg-zinc-800"
                        : "bg-white border text-zinc-700 hover:bg-white/90"
                    }`}
                  >
                    <FaGithub />
                    <h2 className="font-medium text-sm">GitHub</h2>
                  </a>
                  <a
                    aria-label="LinkedIn"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/codewithsebas/"
                    className="grow justify-center flex items-center gap-2 bg-blue-600 border-transparent text-white py-2 px-3 rounded-md duration-150 cursor-pointer hover:bg-blue-500"
                  >
                    <FaLinkedin />
                    <h2 className="font-medium text-sm">LinkedIn</h2>
                  </a>

                  <a
                    aria-label="Curriculum"
                    rel="noreferrer"
                    target="_blank"
                    download="FullStack Developer Joab Giraldo.pdf"
                    href="/download/FullStack Developer Joab Giraldo.pdf"
                    className={`grow justify-center flex items-center gap-2  py-2 px-3 rounded-md cursor-pointer border ${
                      mode
                        ? "bg-white border text-zinc-700 hover:bg-white/20"
                        : " bg-zinc-800 text-white border-white/5 hover:bg-white/10"
                    }`}
                  >
                    <FcFile />
                    <h2 className="font-medium text-sm">Curriculum</h2>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`flex items-center justify-start md:rounded-lg px-4 lg:mx-0 text-zinc-400  ${
                mode
                  ? "bg-[#ffffff] border border-black/5"
                  : "bg-[#161616] border border-white/5"
              }`}
            >
              <ul className="font-medium text-base flex flex-wrap justify-center gap-0">
                <li
                  onClick={() => setMenu(1)}
                  className={`grow duration-150 cursor-pointer py-3 px-4 border-b-2 ${
                    menu === 1
                      ? "text-blue-500 border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <span className="pr-1">Projects</span> &
                  <span
                    className={`pl-2 duration-150 ${
                      menu === 1 && "text-orange-300"
                    }`}
                  >
                    Designs
                  </span>
                </li>
                <li
                  onClick={() => setMenu(2)}
                  className={`grow duration-150 cursor-pointer py-3 px-4 border-b-2 ${
                    menu === 2
                      ? "text-blue-500 border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <span className="pr-1">About Me</span> &{" "}
                  <span
                    className={`pl-1 duration-150 ${
                      menu === 2 && "text-orange-300"
                    }`}
                  >
                    Experience
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col items-start pt-3 lg:px-0 gap-3 pb-3 ">
          <div
            className={`h-full flex flex-col lg:flex-row items-start gap-3 duration-200 ${
              menu === 1
                ? "opacity-100"
                : "opacity-0 pointer-events-none hidden"
            }`}
          >
            <div className="w-full lg:w-3/4 flex flex-col gap-3">
              <div
                className={`w-full flex flex-col gap-3 md:rounded-md border py-3 px-4 pb-5 ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <h1 className="font-medium text-2xl">Details</h1>
                <div className="flex items-start gap-3">
                  <AiFillCode className="text-2xl" />
                  <p className="cursor-text font-semibold">
                    Frontend Developer
                  </p>
                </div>
                <div className="w-full mt-1 flex flex-col gap-4">
                  <div className="w-full flex items-center gap-3 text-xl">
                    <HiLocationMarker className="text-2xl" />
                    <h1 className="flex gap-1 text-base">
                      Of <p className="font-semibold">Ibagué, Colombia</p>
                    </h1>
                  </div>

                  <div className="w-full flex items-center gap-3 text-xl">
                    <MdWork className="text-2xl" />
                    <h1 className="flex gap-1 text-base">Open To Work</h1>
                  </div>

                  <div className="w-full flex items-center gap-3 text-xl">
                    <FaTwitter className="text-2xl" />
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
              <div
                className={`w-full flex flex-col gap-3 md:rounded-md py-3 px-4 pb-5 border ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <h1 className="font-medium text-2xl">
                  <span className="hover:underline cursor-pointer">
                    Designs
                  </span>
                </h1>
                <div className="w-full mt-1 flex flex-col gap-4">
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524620/prettyform_jmzelz.webp"
                    link="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524620/prettyform_jmzelz.webp"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 ">
              <div
                className={`w-full  rounded-md border ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <div className="flex-row gap-5 md:items-center justify-between py-3 px-4 md:flex  text-xl">
                  <h1 className="font-semibold">Projects</h1>
                  <FcOpenedFolder />
                </div>
                <div
                  className={`w-full h-[1px] ${
                    mode ? "bg-black/5 " : "bg-white/5"
                  }`}
                ></div>
                <div className="flex flex-col lg:flex-row justify-between px-4">
                  <button
                    onClick={() => setGrid(false)}
                    className={`w-full flex justify-center items-center gap-2 cursor-pointer py-3 px-4 border-b-2 ${
                      grid
                        ? "border-transparent hover:border-blue-500"
                        : "text-blue-500 border-b-2 border-blue-500"
                    }`}
                  >
                    <RxHamburgerMenu className="text-xl" />
                    <h1>List</h1>
                  </button>
                  <button
                    onClick={() => setGrid(true)}
                    className={`w-full flex justify-center items-center gap-2 cursor-pointer py-3 px-4 border-b-2 ${
                      grid
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "border-transparent hover:border-blue-500"
                    }`}
                  >
                    <RiLayoutGridFill className="text-xl" />
                    <h1>Grid</h1>
                  </button>
                </div>
              </div>

              <div
                className={`gap-3 ${
                  grid ? "w-full grid grid-cols-2" : "flex flex-col"
                }`}
              >
                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677102204/Captura_de_pantalla_2023-02-22_154244_gyh8is.png"
                  title="Airbnb App"
                  link="https://github.com/codewithsebas/Login-Register-for-Airbnb"
                  day={4}
                  year={2023}
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673320050/Captura_de_pantalla_2023-01-09_220535_dshabw.png"
                  title="Real State"
                  link="https://github.com/codewithsebas/Project-Real-State"
                  day={7}
                  year={2023}
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1676183351/f_xfboge.png"
                  title="Facebook clone App"
                  link="https://github.com/codewithsebas/Facebook-App"
                  day={14}
                  year={2023}
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673716764/Captura_de_pantalla_2023-01-14_121548_bbgs0a.png"
                  title="Linktree"
                  link="https://github.com/codewithsebas/Project-Linktree-Clone"
                  day={50}
                  year={2022}
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673655903/Captura_de_pantalla_2023-01-13_191504_m0kjtj.png"
                  title="Spotify clone App"
                  link="https://github.com/codewithsebas/Project-Spotify-2.0"
                  day={70}
                  year={2022}
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673745546/Captura_de_pantalla_2023-01-14_201840_ghu9qi.png"
                  title="Rick and Morty"
                  link="https://github.com/codewithsebas/Project-Rick-And-Morty"
                  day={243}
                  year={2022}
                />
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col lg:flex-row items-start gap-3 duration-200 ${
              menu === 2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20 pointer-events-none -z-30 hidden"
            }`}
          >
            <div className="w-full lg:w-3/4 flex flex-col gap-3">
              <div
                className={`w-full flex flex-col gap-3 border md:rounded-md py-3 px-4 pb-5 ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium text-2xl">About me</h1>
                  <div className="flex items-start gap-3">
                    <p
                      className={`cursor-text font-semibold ${
                        mode ? "text-zinc-500" : "text-zinc-300"
                      }`}
                    >
                      I am passionate about Web Development, who treats his work
                      with a high level of professionalism. I consider myself a
                      responsible, respectful person and I am constantly looking
                      for new opportunities to improve my skills and knowledge.{" "}
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-medium text-2xl">Skills</h1>
                  <div className="flex flex-wrap gap-3 text-3xl">
                    <FaHtml5 className="cursor-pointer duration-150 hover:text-orange-400" />
                    <FaCss3Alt className="cursor-pointer duration-150 hover:text-blue-300" />
                    <SiJavascript className="cursor-pointer duration-150 hover:text-yellow-400" />
                    <FaReact className="cursor-pointer duration-150 hover:text-blue-300" />
                    <TbBrandNextjs className="cursor-pointer duration-150 hover:text-slate-300" />
                    <SiTypescript className="cursor-pointer duration-150 hover:text-blue-500" />
                    <FaNodeJs className="cursor-pointer duration-150 hover:text-green-500" />
                    <FaPhp className="cursor-pointer duration-150 hover:text-blue-500" />
                    <SiTailwindcss className="cursor-pointer duration-150 hover:text-blue-300" />
                    <SiBootstrap className="cursor-pointer duration-150 hover:text-purple-300" />
                    <SiChakraui className="cursor-pointer duration-150 hover:text-blue-300" />
                    <SiFigma className="cursor-pointer duration-150 hover:text-purple-300" />
                    <SiMongodb className="cursor-pointer duration-150 hover:text-green-500" />
                    <SiMysql className="cursor-pointer duration-150 hover:text-blue-300" />
                    <FaGitAlt className="cursor-pointer duration-150 hover:text-orange-400" />
                    <FaGithub className="cursor-pointer duration-150 hover:text-slate-300" />
                    <SiBitbucket className="cursor-pointer duration-150 hover:text-blue-500" />
                    <SiJirasoftware className="cursor-pointer duration-150 hover:text-blue-300" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium text-2xl">Languages</h1>
                  <div className="flex items-start gap-3">
                    <p
                      className={`cursor-text font-semibold ${
                        mode ? "text-zinc-500" : "text-zinc-300"
                      }`}
                    >
                      Spanish - Native <br />
                    </p>
                    <p
                      className={`cursor-text font-semibold ${
                        mode ? "text-zinc-500" : "text-zinc-300"
                      }`}
                    >
                      English - A2 / B1
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full flex flex-col gap-3 md:rounded-md py-3 px-4 pb-5 border ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <h1 className="font-medium text-2xl">
                  <span className="hover:underline cursor-pointer">
                    Building Library -{" "}
                    <span className="text-orange-300">Prettyform</span>
                  </span>
                </h1>
                <div className="w-full mt-1 flex flex-col gap-4">
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524620/prettyform_jmzelz.webp"
                    link="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524620/prettyform_jmzelz.webp"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 ">
              <div
                className={`w-full md:rounded-md border ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <div className="flex-row gap-5 md:items-center justify-between py-3 px-4 md:flex  text-xl">
                  <h1 className="font-semibold">Experience</h1>
                  <FcBriefcase />
                </div>

                <div
                  className={`flex flex-col lg:flex-row justify-between px-4 border-t w-full md:rounded-md ${
                    mode
                      ? "bg-white border-black/5"
                      : "bg-[#161616] border-white/5"
                  }`}
                >
                  <button
                    onClick={() => setGrid(false)}
                    className={`w-full flex justify-center items-center gap-2 cursor-pointer py-3 px-4 border-b-2 ${
                      grid
                        ? "border-transparent hover:border-blue-500"
                        : "text-blue-500 border-b-2 border-blue-500"
                    }`}
                  >
                    <RxHamburgerMenu className="text-xl" />
                    <h1>List</h1>
                  </button>
                  <button
                    onClick={() => setGrid(true)}
                    className={`w-full flex justify-center items-center gap-2 cursor-pointer py-3 px-4 border-b-2 ${
                      grid
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "border-transparent hover:border-blue-500"
                    }`}
                  >
                    <RiLayoutGridFill className="text-xl" />
                    <h1>Grid</h1>
                  </button>
                </div>
              </div>

              <div
                className={`gap-3 ${
                  grid ? "w-full grid grid-cols-2" : "flex flex-col"
                }`}
              >
                <Experience
                  grid={grid}
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1678135887/Captura_de_pantalla_2023-03-06_154946_crxg51.png"
                  title="FullStack Developer & UI/UX Designer"
                  company="Innova Ingenieria Integral S.A.S"
                  country="Colombia"
                  date="Feb 2021 - Feb 2022"
                  description="Technical support and web development, Full Stack for 1 year, helping them in 1 year, helping them in the development, to solve problems, doubts and to face the insecurities and frustrations that arose along the way. Develop Web App for people with disabilities disabilities, help and improve the family nucleus with the person with disabilities. Using programming languages such as JavaScript and PHP, as well as using a strong MySQL database."
                  techMain="PHP, HTML, CSS, JavaScript, React, MySQL"
                />

                <Experience
                  grid={grid}
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1678139447/Frame_24_dm0d9e.png"
                  title="UI/UX Designer"
                  company="Open Bootcamp"
                  country="España"
                  date="Sep 2022 - Nov 2022"
                  description="The experience at Open Bootcamp was incredible, too much teamwork, development activities between teamwork, development activities between 3 or 4 people, so that the community gets people, for the community to get a real work experience. real work experience. I was in charge of designing the Apps that all the teams were assigned to develop. teams were assigned to develop."
                  techMain="Figma"
                />

                <Experience
                  grid={grid}
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1678137594/Captura_de_pantalla_2023-03-06_161933_sqjmue.png"
                  title="FullStack Developer & UI/UX Designer"
                  company="Cattleya"
                  country="Colombia"
                  date="Oct 2022 - Actualmente"
                  description="At Cattleya I have started working on a personal project for the company. for the company, which is my parents' company. The company develops in garments, clothing and sportswear creation. creation of sportswear. I am currently developing an Ecommerce, whose purpose is to improve the sales of the company, with online payment methods such as Stripe, Mercado Pago, PayPal."
                  techMain="React, Next, Typescript, Node, MondoDB, Tailwindcss"
                />

                <Experience
                  grid={grid}
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673371513/web.psd4_gjk0ck.png"
                  title="Frontend Developer & UI/UX Designer"
                  company="Cretten"
                  country="Colombia - Mexico"
                  date="Oct 2022 - Actualmente"
                  description="Cretten is a mini-company that I am developing with a great team of developers a great team of developers, colleagues from Colombia and Mexico. Colombia and Mexico. Cretten is a Web gaming platform. We are currently in development of design and programming."
                  techMain="React, Vite, Typescript, Jest, Node, MondoDB, Tailwindcss"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
