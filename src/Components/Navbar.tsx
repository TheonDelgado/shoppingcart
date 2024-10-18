'use client'

import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaCar, FaShoppingBasket } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useShopContext } from "@/Context/ShopContext";

export default function Navbar() {

    const { cartContent } :any = useShopContext();

    let totalCartItems = 0;
    cartContent.forEach((item:any ) => {
        totalCartItems += item.quantity;
    });

        return (
            <nav className="flex w-screen h-8">
                <Link href={"/"}>
                    <IoMdHome className="size-8 mx-2"></IoMdHome>
                </Link>
                <Link href={"/Shop"}>
                    <FaShoppingBasket className="size-8 mx-2"></FaShoppingBasket>
                </Link>
                <Link href={"/Checkout"}>
                    <FaCartShopping className="size-8 mx-2"></FaCartShopping>
                    {totalCartItems > 0 && (
                        <p>{totalCartItems}</p>                    
                    )}
                </Link>
            </nav>
        );
    }