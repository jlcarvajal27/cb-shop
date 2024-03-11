"use client";

import { QuantitySeelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductCart = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div
          className="flex mb-5 font-semibold"
          key={`${product.slug}-${product.size} `}
        >
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            className="mr-5 rounded"
          />

          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              <p>
                {" "}
                {product.size} - {product.title}
              </p>
            </Link>

            <p>${product.price}</p>
            <QuantitySeelector
              quantity={product.quantity}
              onQuantityChanged={(quantity) =>
                updateProductCart(product, quantity)
              }
            />
            <button
              onClick={() => removeProduct(product)}
              className="underline mt-3"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
