'use client'

import { routes } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full items-center sticky border-b border-black/20 top-0 z-40 bg-white">
    <div className=" flex flex-col justify-around mx-auto container   ">
       <div className="px-6 md:px-16 h-16 flex items-center justify-between">
        <Link className="text-2xl font-bold tracking-wide" href="/">
         <Image src="/logo.png" alt="Logo" width={160} height={140} />    
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {routes.slice(0, routes.length - 2).map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.name}
                href={route.href}
                className={`block text-lg font-semibold ${
                  isActive
                    ? "text-blue-600"
                    : "font-semibold hover:text-gray-900 text-red-400"
                }`}              >
                {route.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {routes.slice(routes.length - 2).map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.name}
                href={route.href}
                className={
                  isActive
                    ? "text-md  text-blue-800 "
                    : " hover:text-gray-900"
                }
              >
                {route.name}
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-4 h-0.5 bg-black">
            
          </span>
          <span className="w-4 h-0.5 bg-black">

          </span>
          <span className="w-4 h-0.5 bg-black"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/20 bg-white px-6 py-4 space-y-4">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.name}
                href={route.href}
                onClick={() => setOpen(false)}
                className={`block text-lg ${
                  isActive
                    ? "text-blue-600 underline"
                    : "font-semibold hover:text-gray-900 text-red-400"
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      )}
   </div>
    </header>
  );
}
