'use client'

import CheckoutCard from "@/Components/CheckoutCard";
import { useShopContext } from "@/Context/ShopContext";

export default function CheckoutPage() {
    const {cartContent}: any = useShopContext();

    console.log(cartContent);

    return (
        <div>
            {cartContent.length > 0  ? <>{cartContent.map((item:any) => <CheckoutCard item={item}/>)}</> :
                <p>There are no items in the cart</p>} 
        </div>
    );
}