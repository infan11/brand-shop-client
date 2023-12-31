
import imageA from '../../../assets/brand- advertisement/11067333_19598165.jpg'
import imageB from '../../../assets/brand- advertisement/2869898_6272.jpg'
import imageC from '../../../assets/brand- advertisement/34895739_8212345.jpg'
const Services = () => {
    return (
        <div>
            <div data-aos="flip-down"  className=" mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 w-80 mx-auto text-center rounded-3xl  " > 
                <h2 className="text-2xl font-bold font-mono text-white">Our Services</h2>
            </div>
            <div>
            <div className='grid md:grid-cols-3 gap-8 mt-9' data-aos="zoom-in">
         <div>
         <div className=" w-60 mx-auto   shadow-xl">
  <figure className="">
    <img src={imageA} alt="men" className="relative rounded-lg " />
  </figure>

</div>
         
<div data-aos="flip-down"  className=" mt-5 bg-gradient-to-r from-red-600  to-green-500 p-4 w-80 mx-auto text-center rounded-3xl  " > 
                <h2 className="text-2xl font-bold font-mono text-white">Free Delivery</h2>
            </div>
        </div> 
        <div>
         <div className=" w-60 mx-auto   shadow-xl">
  <figure className="">
    <img src={imageB} alt="men" className="relative rounded-lg" />
  </figure>

</div>
         
<div data-aos="flip-down"  className=" mt-5 bg-gradient-to-r from-red-600  to-green-500 p-4 w-80 mx-auto text-center rounded-3xl  " > 
                <h2 className="text-2xl font-bold font-mono text-white">Free servicing </h2>
            </div>
        </div> 
        <div>
         <div className=" w-60 mx-auto   shadow-xl">
  <figure className="">
    <img src={imageC} alt="men" className="relative rounded-lg" />
  </figure>

</div>
         
<div data-aos="flip-down"  className=" mt-5 bg-gradient-to-r from-red-600  to-green-500 p-4 w-80 mx-auto text-center rounded-3xl  " > 
                <h2 className="text-2xl font-bold font-mono text-white">Free license</h2>
            </div>
        </div> 
         </div>
            </div>
        </div>
    );
};

export default Services;