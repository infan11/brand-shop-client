import { useEffect, useState } from "react";
import AllCart from "../AllCart/AllCart";



const Cart = () => {
    const [carts , setCarts ] = useState([]);
    useEffect(() =>{
        fetch("https://brand-shop-server-beige-one.vercel.app/products")
        .then(res => res.json())
        .then(data => setCarts(data))
    } ,[])
    return (
        <div>
            <div>
                <h2 className="bg-red-800  p-4  mt-16 text-center w-80  mx-auto text-2xl text-white font-bold font-mono">My Cart </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    carts.map(cart => <AllCart key={cart.id} cart={cart} setCartscart={setCarts}></AllCart>)
                }
            </div>
        </div>
    );
};

export default Cart;