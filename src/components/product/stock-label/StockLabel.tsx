"use client";

import { getStockSlug } from "@/actions";
import { titleFonts } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      const inStock = await getStockSlug(slug);
      setStock(inStock);
      setIsLoading(false);
    };

    getStock();
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFonts.className} antialiased font-bold text-lg animate-pulse bg-gray-300`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${titleFonts.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
