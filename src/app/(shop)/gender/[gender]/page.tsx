export const revalidate = 60; // 60 segundos 

import { getPaginatedProducstWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";


import { Gender } from "@prisma/client";
import {  redirect } from "next/navigation";

interface Props{
  params :{
    gender: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function GenderByPage({params, searchParams}: Props) {
  const {gender} = params

  const page = searchParams.page ? parseInt( searchParams.page ) : 1 

  const {products, currentPage, totalPages } = await getPaginatedProducstWithImages(
    {page, gender: gender as Gender});
        if( products.length ===  0) {
         redirect(`/gender${ gender }`);
  }


  const labels: Record<string, String> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos',
  }

  // if( id === "kids"){
  //  notFound();
  // }
  return (
    <>
    <Title 
    title={`Articulos de ${labels[gender] }`} 
    subtitle="Todos los productos" className="mb-2"/>
    <ProductGrid products={products}/>

    <Pagination totalPages={totalPages}/>
     </>
  )
}
