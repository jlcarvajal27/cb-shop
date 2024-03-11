"use client";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export const OrderSumary = () => {
  const [loaded, setLoaded] = useState(false);
  const { itemInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSumaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;

  return (
    <>
      <div className="grid grid-cols-2">
        <span> No. Productos</span>
        <span className="text-right">
          {itemInCart === 1 ? "1 Articulo" : `${itemInCart} Articulos`}{" "}
        </span>

        <span> Subtotal </span>
        <span className="text-right">${subTotal} </span>

        <span> Impuesto 15% </span>
        <span className="text-right">${tax}</span>

        <span className="font-bold text-2xl mt-4"> Total</span>
        <span className="text-right mt-4 text-2xl">${total}</span>
      </div>
    </>
  );
};
