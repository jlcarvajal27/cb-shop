import { Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSumary } from "./ui/OrderSumary";

export default function CartPage() {
  // redirect('/empty');
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Cart-shop" />

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          {/* carrito  */}
          <div className="flex flex-col mt-5">
            <span className="text-xl font-semibold "> Agregar mas items</span>
            <Link href="/" className="underline mb-5 ">
              {" "}
              Continua Comprando
            </Link>
            {/* items */}

            <ProductsInCart />
          </div>

          {/* checkout  */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="mb-2 text-2xl">Resumen de orden</h2>

            <OrderSumary />

            <div className="w-full mt-4">
              <Link
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                {" "}
                Checkout{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
