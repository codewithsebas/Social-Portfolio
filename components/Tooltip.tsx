import type { TooltipInterface } from "../interface/Tooltip.Interface";
import type { FC } from "react";

export const Tooltip: FC<TooltipInterface> = ({
  title,
  lindedIn,
}: TooltipInterface) => {
  return (
    <div className="absolute w-12 h-[3.5rem] hidden md:flex top-7 items-center duration-300 pointer-events-none group-hover:pointer-events-auto">
      <div className="relative whitespace-nowrap rounded bg-zinc-800 border opacity-0 group-hover:opacity-100 border-white/20 px-3 py-1 text-base font-light text-white shadow-lg z-20 duration-200">
        <div className="absolute left-5 -top-[4.8px] flex items-center justify-end -z-10">
          <div className="w-2 h-2 -rotate-45 duration-150 bg-zinc-800 border-r border-t border-white/20"></div>
        </div>
        <a
          className="hover:underline"
          aria-label="Tooltip"
          rel="noreferrer"
          target="_blank"
          href={lindedIn}
        >
          {title}
        </a>
      </div>
    </div>
  );
};
