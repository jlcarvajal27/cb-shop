export const revalidate = 604800; 

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideShow, ProductSlideShow, StockLabel } from "@/components";
import { titleFonts } from "@/config/fonts";
import { AddToCart } from "./ui/AddToCart";


interface Props{
  params:{
    slug: string;
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const slug = params.slug;
 
  const product = await getProductBySlug(slug);
 
  return {
      title: product?.title ?? 'producto no encontrado',
      description: product?.description ?? '',
      openGraph: {
      title: product?.title ?? 'producto no encontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1] }`],
    },
  }
}



export default async function ProductBySlugPage({params}: Props) {

  const {slug} = params
  const product = await  getProductBySlug(slug);

  if(!product){
    notFound()
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">

        {/* mobile slideshow */}
        <ProductMobileSlideShow 
        title={product.title} 
        images={product.images} 
        className="block md:hidden"
        />


        {/* desktop slideshow */}
        <ProductSlideShow 
        title={product.title}
        images={product.images}
        className="hidden md:block"
        />
        
        </div>

      <div className="col-span-1 px-5 ">
        
        <StockLabel slug={product.slug}/>
        <h1 className={`${titleFonts.className} antialiased font-bold text-xl`}>
           {product.title}
        </h1>

        <p className="text-lg mb-5"> {product.price}</p>

        <AddToCart product={product}/>

        <h3 className="font-bold text-sm ">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  )
}
