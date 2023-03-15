import { BlogInterface } from "@/interface/Blog.Interface";
import Image from "next/image";

export default function Blog({
  mode,
  image,
  author,
  title,
  description,
  date,
  link,
}: BlogInterface) {
  return (
    <a
      aria-label="Dev"
      rel="noreferrer"
      target="_blank"
      href={link}
      className={`flex flex-col gap-2 w-full h-full md:rounded-md border cursor-pointer hover:duration-150 ${
        mode
          ? "bg-white text-zinc-700 border-black/5 hover:border-blue-500/50 hover:shadow-md"
          : "bg-[#161616] border-zinc-500/20 hover:border-blue-500/50 hover:shadow-xl"
      }`}
    >
      <div className="w-full h-full md:rounded-md overflow-hidden">
        <div className="relative">
          <Image
            width={3000}
            height={3000}
            priority
            src={image}
            alt="Blog"
            className="md:rounded-t-md object-cover object-top w-full h-64"
          />
          <div
            className={`absolute bottom-0 w-full h-40 bg-gradient-to-t ${
              mode ? "from-white" : " from-[#161616]"
            }`}
          ></div>
        </div>

        <div className="flex items-center gap-3 py-4 px-4 ">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <p className="text-lg">{author}</p>|
                <p className="flex items-center gap-1">Posted on {date}</p>
              </div>
            </div>
            <p
              className={`border-t pt-3 ${
                mode
                  ? "border-black/10 text-black/70"
                  : "border-white/10 text-white/70"
              }`}
            >
              {description}......
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
