"use client";

import { titleFonts } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFonts.className} antialiased font-bold `}>
            Cb-shop
          </span>
          <span> | Shop </span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>

      <div className="flex items-center  m-1">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link
          href={totalItemCart === 0 && loaded ? "/empty" : "/cart"}
          className="mx-2"
        >
          <div className="relative">
            {loaded && totalItemCart > 0 && (
              <span className="fade-in absolute text-xs  rounded-full -top-2 -right-2 px-1 font-bold bg-blue-700 text-white">
                {totalItemCart}
              </span>
            )}

            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className=" m-2 p-2 rounded-s-md transition-all hover:bg-gray-200"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
