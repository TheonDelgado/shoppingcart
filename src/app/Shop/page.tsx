'use client'

import ItemCard from "@/Components/ItemCard";
import { useShopContext } from "../../Context/ShopContext";

export default function ShopPage() {

    const { shopProducts }:any = useShopContext();

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center ">
            {shopProducts.map((product: any) => <ItemCard key={product.id} product={product}></ItemCard>)}
        </div>
    );
}