"use client";

import { QuantitySeelector, SizeSelector } from "@/components";
import type { Product, Size, CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [Size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(true);

  const addToCart = () => {
    setPosted(true);

    if (!Size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: Size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {posted && !Size && (
        <span className="mt-2 text-red-600 fade-in">
          {" "}
          Por favor selecione una talla{" "}
        </span>
      )}

      <SizeSelector
        onSizeChanged={setSize}
        availableSize={product.sizes}
        selectedSize={Size}
      />

      <QuantitySeelector quantity={quantity} onQuantityChanged={setQuantity} />

      <button className="btn-primary my-5" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
};
