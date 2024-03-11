import { titleFonts } from "@/config/fonts"
import Link from "next/link"


export const Footer = () => {
  return (
    <div className=" flex w-full justify-center   mb-10 text-xs">
      <Link href='/'>
        <span className={`${titleFonts.className} antialiased font-bold`}>CB</span>
        <span>| Shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>
    </div>
  )
}


