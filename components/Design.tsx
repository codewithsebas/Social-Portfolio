import Image from "next/image";
import { DesignInterface } from "@/interface/Design.Interface";

export default function Design({
  image,
  link,
}: DesignInterface) {
  return (
    <div className="flex flex-col gap-2 w-full overflow-hidden rounded-md border border-zinc-500/20">
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
          className="object-cover w-full h-full"
        />
      </a>
    </div>
  );
}
