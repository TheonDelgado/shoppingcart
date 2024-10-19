import { useShopContext } from "@/Context/ShopContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function CheckoutCard({ item }: any) {

    const { removeFromCart, updateCart }:any = useShopContext();

    const handleDecrease = () => {
      const newQuantity = item.quantity - 1;
      if (newQuantity <= 0) {
        removeFromCart(item.id);
      } else {
        updateCart(item.id, newQuantity);
      }
    };

    const handleIncrease = () => {
        updateCart(item.id, item.quantity + 1);
      };
    
      const handleChange = (e:any) => {
        const newQuantity = Math.max(parseInt(e.target.value), 0);
        if (newQuantity === 0) {
          removeFromCart(item.id);
        } else {
          updateCart(item.id, newQuantity);
        }
      };

    return (
        <div className="flex justify-between items-center gap-4 border-b-4 m-3 p-4">
            <img src={item.image} width={100} alt="" />
            <div className="ml-2 flex flex-col justify-center items-center gap-4 ">
                <p className="text-xl font-semibold">{item.title}</p>
                <div className="flex justify-center items-center gap-3">
                    <button
                        className="hover:opacity-60 text-xl text-gray-600"
                        onClick={handleDecrease}
                    >
                        <FaMinus />
                    </button>
                    <input
                        type="number"
                        className="w-14 p-2 text-center bg-slate-100 text-xl outline-none border-none"
                        value={item.quantity}
                        onChange={handleChange}
                    />
                    <button
                        className="hover:opacity-60 text-xl text-gray-600"
                        onClick={handleIncrease}
                    >
                        <FaPlus />
                    </button>
                    <button
                        className="remove ml-4 text-2xl text-red-600 hover:opacity-60 hover:scale-95"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}