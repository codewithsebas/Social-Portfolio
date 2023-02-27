import Image from "next/image";
import { Design } from "@/interface/Design.Interface";

export default function Design({
  image,
  link,
}: Design) {
  return (
    <div className="flex flex-col gap-2 w-full bg-[#161616] rounded-md border border-white/5">
      <a
        aria-label="Design"
        rel="noreferrer"
        target="_blank"
        href={link}
        className="w-full h-full rounded-md"
      >
        <Image
          width={3000}
          height={3000}
          priority
          src={image}
          alt=""
          className="rounded-md object-cover w-full h-full"
        />
      </a>
    </div>
  );
}
