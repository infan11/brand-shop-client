import { FcRating } from "react-icons/fc";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi"
import Swal from "sweetalert2";

const CarOrder = ({item}) => {
    const {name , brand, price , short_description ,rating, image} = item;
    const handleAddToCart = () =>{
      item.cartId = item._id
      delete item._id
        fetch('http://localhost:5000/products' , {
          method: "POST" , 
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: "Successfully add product",
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
        }
          )
    }
    return (
        <div   data-aos="zoom-in">
            <div  className="card w-80 ml-5  shadow-xl  text-purple-500">
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
    <div className="card-actions">
      <button onClick={handleAddToCart} className="btn btn-block">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CarOrder;