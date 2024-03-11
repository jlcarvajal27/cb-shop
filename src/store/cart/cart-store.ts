import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {
    cart: CartProduct[];

    getTotalItems: () => number;
    
     getSumaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemInCart: number;
    }

    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void; 
    removeProduct: ( product: CartProduct) => void;
}

export const useCartStore = create<State>()(

    persist(
         
        (set, get) => ({
            cart:[],
     
         // methods

         getTotalItems: () => {
             const { cart } = get();
             return cart.reduce( (total, item ) => total + item.quantity ,  0);
         },

         getSumaryInformation: () => {
            const { cart } = get();

            const subTotal = cart.reduce( 
                (subTotal, product) => product.quantity * product.price + subTotal , 0 );

                const tax = subTotal * 0.15;
                const total = subTotal + tax;
                const itemInCart = cart.reduce( (total, item ) => total + item.quantity ,  0);

                return {
                    subTotal, tax, total, itemInCart
                }
         },

         addProductToCart: (product: CartProduct) => {
             const {cart} = get();
             const productInCart = cart.some((item) => item.id === product.id && item.size === product.size)
     
             if(!productInCart) {
                 set({ cart: [...cart, product]});
                 return
             }
             const updateCartProduct = cart.map( (item) => {
                 if( item.id === product.id && item.size === product.size) {
                     return {...item, quantity: item.quantity + product.quantity}
                 }
                 return item;
             })
             set({ cart: updateCartProduct});
         },

         updateProductQuantity: (product: CartProduct, quantity: number ) => {
            const { cart } = get();

            const updateProductCart = cart.map((item) => {
                if ( item.id === product.id && item.size === product.size) {
                    return { ...item, quantity: quantity };
                }
                return item;
            });

            set({ cart: updateProductCart });
        },

        removeProduct: ( product: CartProduct) => {
            const { cart } = get();

            const removeProductCart = cart.filter(
                (item) => item.id !== product.id || item.size !== product.size
            )
            
            set({ cart: removeProductCart });
        },

     }),
        {
            name: 'shopping-cart',
            
        }
    )
    
    
);