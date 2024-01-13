"use client";

import Link from "next/link";

export default function Providers({ icon, heading, date, href }) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 rounded-md border bg-emerald-50 border-emerald-400 min-w-[150px] min-h-[100px] p-4"
    >
      <h1>{heading}</h1>
      <aside>
        <span>{date}</span>
        <span></span>
        <span></span>
      </aside>
    </Link>
  );
}
