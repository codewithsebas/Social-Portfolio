import { RiLayoutGridFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
  FaTwitch,
  FaDribbble,
  FaDev,
  FaVuejs,
  FaAngular,
  FaJava,
} from "react-icons/fa";
import { FcOpenedFolder, FcFile, FcBriefcase, FcHome } from "react-icons/fc";
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
  SiPostman,
  SiSass,
  SiSpring,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Header from "../components/Header";
import Image from "next/image";
import Dev from "@/components/Dev";
import Project from "@/components/Project";
import Design from "@/components/Design";
import { useState } from "react";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import { PortfolioInterface } from "@/interface/Portfolio.Interface";

export default function Portfolio({ mode, setMode }: PortfolioInterface) {
  const [grid, setGrid] = useState(false);
  const [menu, setMenu] = useState(1);
  return (
    <div
      className={`w-full relative flex flex-col justify-start items-center border-b border-white/5 ${
        mode ? "bg-[#f8f8f8] text-zinc-700" : "bg-[#1b1b1b] text-zinc-50"
      }`}
    >
      <div className="w-full max-w-[60rem] relative">
        <Header mode={mode} setMode={setMode} menu={menu} setMenu={setMenu} />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-[22.7rem] flex items-end justify-end overflow-hidden">
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
            <div
              className={`w-full flex-row lg:justify-between lg:flex px-3 border rounded-b-md ${
                mode ? "bg-white border-black/5" : "bg-[#161616] border-white/5"
              }`}
            >
              <div className="w-full flex flex-col lg:flex items-center gap-5 relative">
                <a
                  aria-label="Tooltip"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/code-sebastian-giraldo/"
                  className={`absolute bottom-32 md:bottom-28 lg:bottom-3 lg:left-0 w-44 h-44 rounded-full flex items-center justify-center cursor-pointer border-4 ${
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
                <div className="flex flex-col gap-2 py-6 ml-0 mt-20 items-center lg:ml-36 lg:items-start lg:mt-0">
                  <p className="text-4xl font-bold text-center">
                    Sebastián Giraldo
                  </p>
                  <p
                    className={`w-full  font-medium text-base text-center lg:text-left px-3 lg:px-0 ${
                      mode ? "text-black/60" : "text-white"
                    }`}
                  >
                    Frontend Developer | Web Programming | React ⭐
                  </p>
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
          </div>
        </div>

        <div className="h-full flex flex-col items-start pt-3 lg:px-0 gap-3 pb-3 ">
          <div
            className={`h-full flex flex-col lg:flex-row items-start gap-3 duration-200 ${
              menu === 2 ? null : "hidden"
            }`}
          >
            <div className="w-full lg:w-2/5 flex flex-col gap-3">
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
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1678682527/Dark_fc5oyr.png"
                    link="https://www.figma.com/file/3AYk0iGg87LuhvL3CRanoG/DPI-Web-Official-Design?node-id=1%3A2&t=vjwgvk8aVCHg6CMT-1"
                  />
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1678139447/Frame_24_dm0d9e.png"
                    link="https://www.figma.com/file/GZ4iUAXavkjrATwmezaR3d/StudioGhibli-Design?node-id=0%3A1&t=OOAdkNqnnXBZATLx-1"
                  />
                  <Design
                    image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677524970/soft_boapbs.webp"
                    link="https://www.figma.com/file/VXejk3ciaoR4C04dviIU3l/Nuestra-empresa?node-id=0%3A1&t=Qj6Azjw1Do8EfOiU-1"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-3 ">
              <div
                className={`w-full md:rounded-md border ${
                  mode
                    ? "bg-white border-black/5"
                    : "bg-[#161616] border-white/5"
                }`}
              >
                <div className="flex gap-5 items-center justify-between py-3 px-4 md:flex text-xl">
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
                    className={`w-full hidden md:flex justify-center items-center gap-2 cursor-pointer py-3 px-4 border-b-2 ${
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
                  grid
                    ? "w-full flex flex-col md:grid grid-cols-2"
                    : "flex flex-col"
                }`}
              >
                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673655903/Captura_de_pantalla_2023-01-13_191504_m0kjtj.png"
                  title="Spotify clone App"
                  link="https://github.com/codewithsebas/Project-Spotify-2.0"
                  deploy="https://project-spotify-2-0.vercel.app/"
                  day={70}
                  year={2022}
                  description="This project was developed in 20 hours, thanks to a tutorial on YouTube, JavaScriptMastery thanks to him I was able to make this great project called Spotify 2.0, I hope it will be useful for future projects, or so you can improve your knowledge in React!"
                />
                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1677102204/Captura_de_pantalla_2023-02-22_154244_gyh8is.png"
                  title="Airbnb App"
                  link="https://github.com/codewithsebas/Login-Register-for-Airbnb"
                  day={4}
                  year={2023}
                  description="This project was developed in 20 hours, thanks to a tutorial on YouTube, JavaScriptMastery thanks to him I was able to make this great project called Spotify 2.0, I hope it will be useful for future projects, or so you can improve your knowledge in React!"
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673320050/Captura_de_pantalla_2023-01-09_220535_dshabw.png"
                  title="Real State"
                  link="https://github.com/codewithsebas/Project-Real-State"
                  deploy="https://project-real-state-beige.vercel.app/"
                  day={7}
                  year={2023}
                  description="This project was developed in 3 hours and a half, thanks to a tutorial on YouTube, content creator and FullStack programmer, JavaScript Mastery thanks to him I could make this great project called Real State, I hope it will be useful for future projects, or so you can improve your knowledge of this project!"
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1676183351/f_xfboge.png"
                  title="Facebook clone App"
                  link="https://github.com/codewithsebas/Facebook-App"
                  deploy="https://facebook-app-three.vercel.app/profile"
                  day={14}
                  year={2023}
                  description="This project was developed in 3 hours and a half, thanks to a tutorial on YouTube, content creator and FullStack programmer, JavaScript Mastery thanks to him I could make this great project called Facebook App"
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673716764/Captura_de_pantalla_2023-01-14_121548_bbgs0a.png"
                  title="Linktree"
                  link="https://github.com/codewithsebas/Project-Linktree-Clone"
                  deploy="https://project-linktree-clone.vercel.app/"
                  day={50}
                  year={2022}
                  description="This project was developed in 2 hours, thanks to a tutorial on YouTube, Lee Robinson thanks to him I was able to make this great project called Linktree Clone, I hope it will be useful for future projects, or so you can improve your knowledge in Nextjs!"
                />

                <Project
                  mode={mode}
                  image="https://res.cloudinary.com/dovavvnjx/image/upload/v1673745546/Captura_de_pantalla_2023-01-14_201840_ghu9qi.png"
                  title="Rick and Morty"
                  link="https://github.com/codewithsebas/Project-Rick-And-Morty"
                  deploy="https://rick-and-morty-six-eta.vercel.app/"
                  day={243}
                  year={2022}
                  description="This project was developed in 1 hour, I hope it will be useful for future projects, or so you can improve your knowledge in React!"
                />
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-start gap-3 duration-200 ${
              menu === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20 pointer-events-none -z-30 hidden"
            }`}
          >
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col lg:flex-row-reverse gap-3">
                <div
                  className={`w-full flex flex-col gap-4 border md:rounded-md py-3 px-4 pb-5 ${
                    mode
                      ? "bg-white border-black/5"
                      : "bg-[#161616] border-white/5"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-2xl">About me</h1>
                    <div className="flex flex-col items-start gap-2">
                      <p
                        className={`cursor-text font-medium ${
                          mode ? "text-zinc-500" : "text-zinc-300"
                        }`}
                      >
                        Passionate about Web Development. I consider myself a
                        responsible, respectful person and I am constantly
                        looking for new opportunities to improve my skills and
                        knowledge.
                      </p>
                      <p
                        className={`cursor-text font-medium ${
                          mode ? "text-zinc-500" : "text-zinc-300"
                        }`}
                      >
                        Also studying at Bootcamp FullStack at{" "}
                        <a
                          aria-label="OpenBootcamp"
                          rel="noreferrer"
                          target="_blank"
                          className="text-blue-500 underline"
                          href="https://campus.open-bootcamp.com/"
                        >
                          OpenBootcamp
                        </a>{" "}
                        and waiting for a response from{" "}
                        <a
                          aria-label="Academlo"
                          rel="noreferrer"
                          target="_blank"
                          className="text-blue-500 underline"
                          href="https://www.academlo.com/"
                        >
                          Academlo
                        </a>{" "}
                        to improve my knowledge and skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h1 className="font-medium text-2xl">Skills</h1>
                    <div className="flex flex-wrap gap-4 text-3xl">
                      <FaHtml5 className="cursor-pointer duration-150 text-orange-500" />
                      <FaCss3Alt className="cursor-pointer duration-150 text-blue-500" />
                      <SiSass className="cursor-pointer duration-150 text-rose-400" />
                      <SiJavascript className="cursor-pointer duration-150 text-yellow-300" />
                      <FaReact className="cursor-pointer duration-150 text-blue-400" />
                      <TbBrandNextjs
                        className={`cursor-pointer duration-150 ${
                          mode ? "text-black" : "text-white"
                        }`}
                      />
                      <FaVuejs className="cursor-pointer duration-150 text-emerald-400" />
                      <FaAngular className="cursor-pointer duration-150 text-red-500" />
                      <SiTypescript className="cursor-pointer duration-15 text-blue-500" />
                      <FaNodeJs className="cursor-pointer duration-150 text-green-400" />
                      <FaPhp className="cursor-pointer duration-150 text-blue-400" />
                      <FaJava className="cursor-pointer duration-150 text-blue-600" />
                      <SiSpring className="cursor-pointer duration-150 text-green-500" />
                      <SiTailwindcss className="cursor-pointer duration-150 text-blue-200" />
                      <SiBootstrap className="cursor-pointer duration-150 text-purple-500" />
                      <SiChakraui className="cursor-pointer duration-150 text-blue-200" />
                      <SiFigma className="cursor-pointer duration-150 text-purple-400" />
                      <SiMongodb className="cursor-pointer duration-150 text-green-500" />
                      <SiMysql className="cursor-pointer duration-150 text-blue-400" />
                      <FaGitAlt className="cursor-pointer duration-150 text-orange-500" />
                      <FaGithub
                        className={`cursor-pointer duration-150 ${
                          mode ? "text-black" : "text-white"
                        }`}
                      />
                      <SiBitbucket className="cursor-pointer duration-150 text-blue-400" />
                      <SiJirasoftware className="cursor-pointer duration-150 text-blue-400" />
                      <SiPostman className="cursor-pointer duration-150 text-orange-500" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-medium text-2xl">Languages</h1>
                    <div className="flex items-start gap-3">
                      <p
                        className={`cursor-text font-semibold ${
                          mode ? "text-zinc-500" : "text-zinc-300"
                        }`}
                      >
                        Spanish - Native <br />
                      </p>
                      |
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
                  className={`w-full lg:w-2/5 flex flex-col gap-3 md:rounded-md border py-3 px-4 pb-5 ${
                    mode
                      ? "bg-white border-black/5"
                      : "bg-[#161616] border-white/5"
                  }`}
                >
                  <div className="w-full flex flex-col gap-4">
                    <h1 className="font-medium text-2xl">Details</h1>
                    <div className="w-full flex items-center gap-2 text-xl">
                      <FcHome className="text-2xl" />
                      <h1 className="flex gap-1 text-base">
                        From <p className="font-semibold">Colombia</p>
                      </h1>
                    </div>

                    <div className="w-full flex items-center gap-2 text-xl">
                      <FcBriefcase className="text-2xl" />
                      <h1 className="flex gap-1 text-base">Open To Work</h1>
                    </div>

                    <div className="w-full text-xl">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        aria-label="Github"
                        className="flex gap-2 text-base text-violet-500 hover:underline"
                        href="https://www.twitch.tv/codewithsebas"
                      >
                        <FaTwitch className="text-2xl text-violet-500" />
                        Twitch
                      </a>
                    </div>
                    <div className="w-full text-xl">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        aria-label="Github"
                        className="flex gap-2 text-base text-rose-300 font-semibold hover:underline"
                        href="https://dribbble.com/codewithsebas"
                      >
                        <FaDribbble className="text-2xl text-rose-300" />
                        Dribbble
                      </a>
                    </div>
                    <div className="w-full text-xl">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        aria-label="Github"
                        className="flex gap-2 text-base font-semibold hover:underline"
                        href="https://dev.to/codewithsebas"
                      >
                        <FaDev className="text-2xl" />
                        Dev
                      </a>
                    </div>
                    <h1 className="font-medium text-2xl mt-1">
                      Developer friends
                    </h1>
                    <div className="flex flex-wrap w-full lg:justify-start">
                      <Dev
                        mode={mode}
                        image="/profile11.jpg"
                        title="Sara Montagud Rodríguez"
                        lindedIn="https://www.linkedin.com/in/sara-montagud-rodr%C3%ADguez/"
                      />

                      <Dev
                        mode={mode}
                        image="/profile7.jpg"
                        title="Valeria Maldonado"
                        lindedIn="https://www.linkedin.com/in/valeria-maldonado-69696a210/"
                      />

                      <Dev
                        mode={mode}
                        image="/profile1.jpg"
                        title="Laura Andrea Gómez"
                        lindedIn="https://www.linkedin.com/in/laura-andrea-g%C3%B3mez-carmona-651a0aa0/"
                      />

                      <Dev
                        mode={mode}
                        image="/profile6.jpg"
                        title="Laura Pregonero"
                        lindedIn="https://www.linkedin.com/in/laura-camila-pregonero-mart%C3%ADnez-07449b22b/"
                      />

                      <Dev
                        mode={mode}
                        image="/profile8.jpg"
                        title="Lucía González"
                        lindedIn="https://www.linkedin.com/in/luciagonzalezlara/"
                      />

                      <Dev
                        mode={mode}
                        image="/profile9.jpg"
                        title="Julian Pachon"
                        lindedIn="https://www.linkedin.com/in/juliantm/"
                      />

                      <Dev
                        mode={mode}
                        image="/profile12.jpg"
                        title="Cecilia Ines"
                        lindedIn="www.linkedin.com/in/ines-castañeda-886a46212"
                      />
                    </div>
                  </div>
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
                <div className="flex gap-5 items-center justify-between py-3 px-4 md:flex text-xl">
                  <h1 className="font-semibold">Experience</h1>
                  <FcBriefcase />
                </div>

                <div
                  className={`flex flex-col md:flex-row justify-between px-4 border-t w-full md:rounded-md ${
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
                    className={`w-full hidden md:flex justify-center items-center gap-2 cursor-pointer py-3 px-4 border-b-2 ${
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
                  grid
                    ? "w-full flex flex-col md:grid grid-cols-2"
                    : "flex flex-col"
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

          <div
            className={`flex flex-col items-start gap-3 duration-200 ${
              menu === 3
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20 pointer-events-none -z-30 hidden"
            }`}
          >
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col lg:flex-row-reverse gap-3">
                <div
                  className={`w-full flex flex-col gap-4 border md:rounded-md py-3 px-4 pb-5 ${
                    mode
                      ? "bg-white border-black/5"
                      : "bg-[#161616] border-white/5"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-2xl">Blog that can help you</h1>
                    <div className="flex flex-col items-start gap-2">
                      <p
                        className={`cursor-text font-medium ${
                          mode ? "text-zinc-500" : "text-zinc-300"
                        }`}
                      >
                        I leave you some very interesting articles, where you
                        can improve your knowledge or add to your current
                        project. <br />I hope this mini blog will help you, all
                        these posts are thanks to{" "}
                        <a
                          className="text-blue-500 underline"
                          href="https://dev.to/"
                          aria-label="Dev"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Dev.to
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Blog
                  mode={mode}
                  image="https://res.cloudinary.com/practicaldev/image/fetch/s--c0RbPhuH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/drnfio6sc2b74bbhq80a.png"
                  author="Heather Parker"
                  title="Great GitHub repositories that developers love"
                  description="GitHub is a well-known open-source platform for code hosting, collaboration, and version control. I doubt there is a single developer who is unfamiliar with GitHub. It not only allows its users to store and share code but also serves as an educational platform for many development-related topics. I decided to make my own list of preferred repositories, which helped me a lot (and still does!!) in my work. Please have a seat and enjoy my top 8 GitHub repositories for developers of all kinds!"
                  date="10 mar"
                  link="https://dev.to/swordheath/great-github-repositories-that-developers-love-1g97"
                />
                <Blog
                  mode={mode}
                  image="https://res.cloudinary.com/practicaldev/image/fetch/s--FM4Y0Nvb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ysok9x48b0futkssmvn3.png"
                  author="Francisco Mendes"
                  title="How to Build a Custom Calendar/Date picker Component in React"
                  description="Many web applications need to manage dates using a calendar, however the overwhelming majority of articles/tutorials always use third-party libraries. It's not that it's bad, on the contrary, it helps a lot to prototype an application, but if the design and requirements are custom, it's very difficult for the developer."
                  date="Updated on 5 oct 2022"
                  link="https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj"
                />
                <Blog
                  mode={mode}
                  image="https://res.cloudinary.com/practicaldev/image/fetch/s--7wvcjsx0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sc9o0gefbc5jj6afw2lw.png"
                  author="Dima Sukharev"
                  title="Get respects at job for doing Conventional Commits"
                  description="Using Conventional Commits can help make your commit messages clearer and easier to understand. By using a consistent format, you can convey important information about the changes you made and help others understand the progress of your project."
                  date="14 mar"
                  link="https://dev.to/disukharev/how-to-make-semantic-commits-with-conventional-commits-41of"
                />
                <Blog
                  mode={mode}
                  image="https://res.cloudinary.com/practicaldev/image/fetch/s--xxZMspL8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1607705703571-c5a8695f18f6%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzNDExMjB8MHwxfHNlYXJjaHwxMXx8cHl0aG9uJTIwY29kZXxlbnwwfHx8fDE2Nzg4MjgyNzU%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080"
                  author="Satyanchal"
                  title="5 Tips for Developing Accessible Websites"
                  description="Accessibility is becoming increasingly important in web development. With over one billion people worldwide living with some form of disability, it's crucial that we as developers ensure our websites are accessible to everyone. In this blog post, we'll discuss five tips for developing accessible websites."
                  date="15 mar"
                  link="https://dev.to/iamsatyanchal/5-tips-for-developing-accessible-websites-4h56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
