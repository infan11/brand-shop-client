import { useEffect, useState } from "react";
import AllCart from "../AllCart/AllCart";



const Cart = () => {
    const [carts , setCarts ] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setCarts(data))
    } ,[])
    return (
        <div>
            <div>
                <h2 className="bg-red-800  p-4  mt-16 text-center w-80 mx-auto text-2xl text-white font-bold font-mono">My Cart </h2>
            </div>
            <div className="grid md:grid-cols-3">
                {
                    carts.map(cart => <AllCart key={cart.id} cart={cart}></AllCart>)
                }
            </div>
        </div>
    );
};

export default Cart;