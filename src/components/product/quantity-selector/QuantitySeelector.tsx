"use client";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;

  onQuantityChanged: (value: number) => void;
}

export const QuantitySeelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChange = (value: number) => {
    if (quantity + value < 1) return;

    onQuantityChanged(quantity + value);
  };
  return (
    <div className="flex">
      <button onClick={() => onValueChange(-1)}>
        {" "}
        <IoRemoveCircleOutline size={30} />{" "}
      </button>
      <span className="w-18 text-lg mx-2 px-4 bg-gray-300 rounded-lg text-center items-center">
        {" "}
        {quantity}{" "}
      </span>
      <button onClick={() => onValueChange(+1)}>
        {" "}
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
