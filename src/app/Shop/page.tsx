'use client'

import ItemCard from "@/Components/ItemCard";
import { useShopContext } from "../../Context/ShopContext";
import { useState } from "react";
import { Button } from "@/Components/ui/button";

export default function ShopPage() {

    const { shopProducts }: any = useShopContext();

    const [displayedShopProducts, setDisplayedShopProducts] = useState(shopProducts);

    const handleAllItems = () => {
        setDisplayedShopProducts(shopProducts);
        console.log(shopProducts);
    }

    const handleCategoryChange = (e:any) => {
        const categoryItems = shopProducts.filter((product:any) => product.category === e.target.textContent.toLowerCase())
        setDisplayedShopProducts(categoryItems);
    }

    return (
        <div className="flex flex-row">
            <ul className="m-4">
                <li><Button type="button" onClick={handleAllItems}>All Items</Button></li>
                <li><Button type="button" onClick={handleCategoryChange}>Men's Clothing</Button></li>
                <li><Button type="button" onClick={handleCategoryChange}>Women's Clothing</Button></li>
                <li><Button type="button" onClick={handleCategoryChange}>Jewelery</Button></li>
                <li><Button type="button" onClick={handleCategoryChange}>Electronics</Button></li>
            </ul>
            <div className="m-2 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center ">
                {displayedShopProducts.map((product: any) => <ItemCard key={product.id} product={product}></ItemCard>)}
            </div>
        </div>
    );
}