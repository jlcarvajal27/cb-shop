import type { Size } from "@/interfaces"
import clsx from "clsx";


interface Props {
    selectedSize?: Size;
    availableSize: Size[];

    onSizeChanged:(size: Size) => void;
}

export const SizeSelector = ({selectedSize, availableSize, onSizeChanged}: Props) => {
   
  return (
    <div className="my-5">
     <h3 className="font-bold mb-4">tallas disponibles</h3>

     <div className="flex ">
       {
        availableSize.map(size => (
            <button 
            onClick={() => onSizeChanged(size)}
            className={
                clsx(
                    "mx-2 hover:underline text-lg",
                    {'underline': size === selectedSize}
                )
            } key={size}>
                { size}
            </button>
        ))
       }
     </div>
    </div>
  )
}


