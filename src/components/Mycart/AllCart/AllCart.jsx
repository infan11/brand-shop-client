import { useState } from "react";
import { FcRating } from "react-icons/fc";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const AllCart = ({cart , setCart }) => {
    const {name , brand, price , short_description ,rating, image} = cart;
   const handleDeleted = _id =>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  })
  .then((result ) =>{
    if(result.isConfirmed){
      fetch(`http://localhost:5000/products/${_id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
       if(data.deletedCount > 0){
        Swal.fire(
          'Deleted!',
          'You Car has been Deleted.',
          'Success'
      )
    const remaining = cart.filter(item => item._id !== _id)
    setCart(remaining)
       }
      })
    }
  })
   }
 
    return (
        <div>
             <div   data-aos="zoom-in">
            <div  className="card w-80 ml-5 text-purple-500 shadow-xl  ">
  <figure className="px-5 pt-10">
    <img src={image} alt="Unavailable acar" className="rounded-md" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{brand}</h2>
    <p>{short_description}</p>
    <p className="flex items-center gap-2">{rating}<FcRating /></p>
    <p className="flex items-center">{price}<HiOutlineCurrencyBangladeshi />
</p>
<div className="card-actions justify-end">
    
    <Link to={`/detail/${cart.cartId}`}>  <button  className="badge badge-outline">Details</button></Link>
    </div>
<div className="card-actions justify-end">
  <button onClick={handleDeleted} className="badge badge-outline">Deleted</button>
    </div>

    <div className="card-actions">
  <Link to={`/updateProduct/${cart.cartId}`}>    <button  className="btn btn-block">Update</button></Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default AllCart;