import { QuantitySeelector, Title } from '@/components'
import { initialData } from '@/seed/seed'
import Image from 'next/image'
import Link from 'next/link'


export default function CheckoutPage() {
   const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],

  ]
  return (
  <>
       <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>

        <div className='flex flex-col w-[1000px] '>
          <Title title='Verificar orden '/>

          <div className=' grid grid-cols-1 sm:grid-cols-2 gap-10 '>
            {/* carrito  */}
            <div className='flex flex-col mt-5'>
              <span className='text-xl '> Ajustar compra </span>
              <Link href='/cart' className='underline mb-5 '>Editar compra </Link>
            

            {/* items */}
              {
                productsInCart.map( product => (
                  <div className='flex mb-5' key={product.slug}>
                     <Image src={`/products/${product.images[0]}`}
                     alt={product.title}
                     width={100}
                     height={100}
                     className='mr-5 rounded'
                     />
                     <div>
                      <p>{product.title}$</p>
                      <p>${product.price}</p>
                      <p className='font-bold'>Subtotal: {product.price * 3}</p>
                     </div>
                  </div>
                ))
              }
              </div>

            {/* checkout  */}

            <div className='bg-white rounded-xl shadow-xl p-7'>
              <h2 className='text-2xl mb-2 font-bold'> Direccion de entrega</h2>
              <div className='mb-10'>
                <p className='text-xl'>Jorge carvajal</p>
                <p>calle 67 #43-17</p>
                <p>colombia </p>
                <p>atlantico</p>
                <p>CP 12334</p>
                <p>#12345678</p>
              </div>

              {/* divider */}

              <div className='bg-gray-200 w-full rounded h-0.5 mb-8'/>

              <h2 className='mb-2 text-2xl font-bold'>Resumen de orden</h2>
              <div className='grid grid-cols-2'>
                <span> No. Productos</span>
                <span className='text-right'>3 articulos </span>

                <span> Subtotal </span>
                <span className='text-right'>$ 100 </span>

                <span> Impuestos 15% </span>
                <span className='text-right'>$100 </span>

                <span className='font-bold text-2xl mt-4'> Total </span>
                <span className='text-right mt-4 text-2xl'>$000</span>

              </div>

              <div className='w-full mb-2 mt-4'>

                <p className=' mb-5'>
                  <span className='text-xs'> Al hacer click en &quot;colocar orden&quot;,aceptas nuestros   
                    <a href="#" className='underline mx-1'>
                    Terminos y condiciones 
                    </a> 
                    <a href="#" className='underline'>
                    Politica y Privacidad 
                    </a>
                  </span>
                </p>
                <Link className='flex btn-primary justify-center' href='/orders/123'>Colocar Orden</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
     
  </>
  )
}

