import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { useParams } from "react-router-dom";

const Detail = () => {
    const data = useParams()
    console.log(data);
    const [cart , setCart] = useState([]);
     useEffect(() =>{
      fetch(`http://localhost:5000/products/${data._id}`)
      .then(res => res.json())
      .then(data => setCart(data))
     }, [data._id])
     const {name , brand, price , short_description ,rating, image} = cart;
    return (
        <div>
               <div   data-aos="zoom-in" className="">
            <div  className="card w-80 ml-5 min-h-screen text-center shadow-xl -0">
  <figure className="px-5 pt-10">
    <img src={image} alt="Unavailable car" className="rounded-md" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{brand}</h2>
    <p>{short_description}</p>
    <p className="flex items-center gap-2">{rating}<FcRating /></p>
    <p className="flex items-center">{price}<HiOutlineCurrencyBangladeshi />
</p>
<div className="card-actions justify-end">
    
    
    </div>

    <div className="card-actions">
      <button  className="btn btn-block">Update</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Detail;