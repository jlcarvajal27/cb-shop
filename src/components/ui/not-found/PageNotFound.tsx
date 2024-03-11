import { titleFonts } from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] w-full items-center justify-center align-middle'>
      <div className='text-center px-5 mx-5'>
        <h2 className={`${titleFonts.className} antialiased text-9xl`}> 404</h2>
        <p className='font-semibold text-xl'>Lo sentimos mucho!!</p>
        <p className='font-light'> 
        <span>
            puedes regresar al
          </span> 
            <Link href='/' className='font-normal hover:underline transition-all'> Inicio </Link>
        </p>
      </div>
      <div>
        <Image src="/imgs/starman_750x750.png"
        height={550}
        width={550}
        className='p-5 sm:p-0'
        alt='starman'
        />
      </div>
    </div>
  )
}
