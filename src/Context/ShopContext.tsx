'use client'

import React, { createContext, useEffect, useState, useContext } from "react";

const ShopContext = createContext({});

const ShopProvider = ({ children }: any) => {
    const [cartContent, setCartContent] = useState([]);
    const [shopProducts, setShopProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const storeAPIEndPoint = "https://fakestoreapi.com/products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(storeAPIEndPoint, { mode: "cors" });
                if (!response.ok || response.status >= 400) {
                    throw new Error(`HTTP Error: Status ${response.status}`);
                }
                const data = await response.json();
                setShopProducts(data);
                setError(null);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (product:any , quantity:any )=> {
        setCartContent((prevCartContent: never[]) => {
          //1. Find index of product in cart
          const isProductInCart = prevCartContent.findIndex(
            (item:any) => item.id === product.id
          );
          //2. If the product is already in the cart, update the quantity
          if (isProductInCart > 0) {
            const updatedCart = [...prevCartContent] as any;
            updatedCart[isProductInCart].quantity += quantity;
            return updatedCart;
          } else {
            //Add product to cart
            return [...prevCartContent, { ...product, quantity }] as never[];
          }
        });
      };

      const removeFromCart = (productId:any ) => {
        setCartContent((prevCartContent) => {
          return prevCartContent.filter((item:any) => item.id !== productId);
        });
      };

      const updateCart = (productId:any, quantity:any) => {
        setCartContent((prevCartContent:any) => {
          const updatedCart = prevCartContent.map((item:any) =>
            //if product is found? update the quantity, else keep the product as is
            item.id === productId ? { ...item, quantity } : item
          );
          return updatedCart;
        });
      };

    if (loading)
        return <p className="text-3xl text-center font-semibold">Loading....</p>;
    if (error)
        return (
            <p className="text-2xl font-semibold text-center">
                Network error encountered
            </p>
        );

    return (
        <ShopContext.Provider
            value={{
                shopProducts,
                cartContent,
                setCartContent,
                addToCart,
                removeFromCart, 
                updateCart
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

const useShopContext = () => {
    return useContext(ShopContext);
};

export { ShopProvider, useShopContext };
