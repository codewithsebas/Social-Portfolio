import type { TooltipInterface } from "../interface/Tooltip.Interface";
import type { FC } from "react";

export const Tooltip: FC<TooltipInterface> = ({
  mode,
  title,
  lindedIn,
}: TooltipInterface) => {
  return (
    <div className="absolute w-12 h-[4rem] hidden sm:flex top-7 items-center duration-300 pointer-events-none group-hover:pointer-events-auto">
      <div
        className={`relative whitespace-nowrap rounded  border opacity-0 group-hover:opacity-100  px-3 py-1 text-base font-light  shadow-lg z-20 duration-200 ${
          mode
            ? "bg-white border-black/10 text-zinc-700"
            : "bg-zinc-800 border-white/10 text-white"
        }`}
      >
        <div className="absolute left-5 -top-[4.8px] flex items-center justify-end -z-10">
          <div
            className={`w-2 h-2 -rotate-45 duration-150  border-r border-t  ${
              mode ? "bg-white border-black/10" : "bg-zinc-800 border-white/10"
            }`}
          ></div>
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
