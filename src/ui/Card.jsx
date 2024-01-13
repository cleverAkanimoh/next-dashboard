"use client";

import Link from "next/link";

export default function Card({
  icon,
  heading,
  date,
  href,
  zip,
  state,
  district,
}) {
  return (
    <Link href={`records/${href}`}>
      <div className="flex flex-col justify-center gap-4 rounded-md border bg-emerald-50 border-emerald-400 w-[230px] h-full p-3">
        <h1 className="font-bold font-sans text-sm">{heading}</h1>
        <h3 className="text-sm">{district}</h3>
        
        <aside className="text-xs flex flex-wrap gap-2 ">
          <span>{state}</span>
          <span>{date}</span>
          <span>{zip}</span>
        </aside>
      </div>
    </Link>
  );
}
