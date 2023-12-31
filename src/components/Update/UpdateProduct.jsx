import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
   const cart = useLoaderData();
   const {_id, image, name, price, rating , brand} = cart;
    const data = useParams()
    
   
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const image  =form.image.value;
        const  name = form.name.value;
        const  brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value
        const updateProduct = {image, name , brand, category, price, rating , }
        console.log(updateProduct);
   
        console.log(data);

        fetch(`http://localhost:5000/products/${_id}`,{
            method: 'PUT' , 
            headers:{
                "content-type" :'application/json'
            },
            body: JSON.stringify(updateProduct)
        } )
        .then(res => res.json())
        .then(data =>{
            console.log(data);
           if(data.modifiedCount > 0) {
            Swal.fire({
                title: "Successfully Update",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
           }


        })
    
    }
    return (
        <div className="">
            <div className="bg-violet-600 text-3xl font-bold font-mono w-80  mx-auto text-center mb-12 ">
             <p className="text-2xl"> Update Product</p>
            </div>
            <div className=" bg-yellow-600 mb-5 rounded-xl">
            <form onSubmit={handleFormSubmit} className="card-body">
        <div className=" md:flex mb-5 gap-3 ">
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="image" name="image" defaultValue={image} className="input input-bordered" required />

        </div>
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" defaultValue={name} className="input input-bordered" required />

        </div>
        </div>
        <div className=" md:flex mb-5 gap-3 ">
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" placeholder="Brand Name" name="brand" defaultValue={brand} className="input input-bordered" required />

        </div>
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name="category" placeholder="Category"   className="input input-bordered" required />

        </div>
        </div>
        <div className=" md:flex mb-5 gap-3 ">
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price"  placeholder="Price"defaultValue={price} className="input input-bordered" required />

        </div>
        <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered" required />

        </div>
        </div>
       <button className="btn w-full bg-green-500 text-white">Update </button>
      </form>
            </div>
        </div>
    );
};

export default UpdateProduct;