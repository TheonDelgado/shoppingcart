'use client'
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useShopContext } from "@/Context/ShopContext";



export default function ItemCard({ product }: any) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart} : any = useShopContext();

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
      };
      const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
      };

      const handleQuantityChange = (e: any) => {
        setQuantity(e.target.value);
      };

      const handleAddToCart = () => {
        if (quantity > 0) {
          addToCart(product, quantity);
          setQuantity(1); 
        }
      };

    return (
        <div className="flex flex-col gap-3 justify-between items-center w-50 h-50 p-2 border-black-500 sm:m-4 sm:w-full hover:scale-95">
            <img
                src={product.image}
                alt="product image"
                className="w-full h-48 object-contain"
            ></img>
            <div className="flex flex-col gap-2 w-full max-w-xs p-2 items-center shadow-lg shadow-neutral-400">
                <p className=" text-xl font-semibold text-center">{product.title}</p>
                <p className="price text-2xl font-semibold">$ {product.price}</p>
                <div className="quantity-input flex gap-3 items-center justify-center p-2">
                    <button onClick={handleDecreaseQuantity} className="text-xl">
                        <FaMinus />
                    </button>
                    <input
                        className="p-2 max-w-16 text-center font-semibold text-2xl bg-slate-50"
                        type="number"
                        value={quantity}
                        min={0}
                        onChange={handleQuantityChange}
                    />
                    <button onClick={handleIncreaseQuantity} className="text-xl">
                        <FaPlus />
                    </button>
                </div>
                <button
                    className="bg-cyan-500 p-2 rounded-lg text-white font-semibold hover:scale-90"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}