
import { FcRating } from 'react-icons/fc';
import logoA from '../../../assets/TEAM MEMBR/bohemian-man-with-his-arms-crossed.jpg'
import logoB from '../../../assets/TEAM MEMBR/portrait-smiling-young-man-his-dog-park (1).jpg'
import logoC from '../../../assets/TEAM MEMBR/smiling-young-man-with-crossed-arms-outdoors.jpg'
const Review = () => {
    return (
        <div>
            <div className="bg-emerald-500 text-2xl mt-5 mb-6   text-white  w-80 mx-auto text-center p-3 font-bold rounded-2xl">
                <h2>Customer Review</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-3 mb-14 ml-3'>
            <div data-aos="fade-down "
     data-aos-easing="linear"
     data-aos-duration="1500" className="  rounded-2xl shadow-2xl w-80 ">
            <div className="  flex"> 
          <img alt="Unavilable" className='mt-3' src={logoA} />
         
         
            </div>
            <p className='  text-center font-bold  font-mono  mt-7 mb-2  '> Infan  </p>
           <div className='flex items-center justify-center mt-5  mb-3'>
           <FcRating/>
           <FcRating />
           <FcRating />
           <FcRating />
           <FcRating />
           </div>
       
        
        <p className='text-sm ml-6 font-bold font-mono'>I recently purchased a car from the BMW website.The  experience was fantastic.</p>
            </div>
            <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=" rounded-2xl shadow-2xl w-80 ">
            <div className="  flex"> 
          <img alt="Unavilable"  className='mt-3' src={logoB} />
         
         
            </div>
            <p className='  text-center font-bold  font-mono  mt-7 mb-2  '> Jioun </p>
           <div className='flex items-center justify-center mt-5  mb-3'>
           <FcRating/>
           <FcRating />
           <FcRating />
           <FcRating />
           <FcRating />
           </div>
       
        
        <p className='text-sm ml-6 font-bold font-mono'>
I recently purchased a Mercedes-Benz through their website, and the experience was exceptional from start to finish. .</p>
            </div>
            <div className=" rounded-2xl shadow-2xl w-80 " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <div className="  flex"> 
          <img alt="Unavilable"  className='mt-3'  src={logoC} />
         
         
            </div>
            <p className='  text-center font-bold  font-mono  mt-7 mb-2  '> Jito  </p>
           <div className='flex items-center justify-center mt-5  mb-3'>
           <FcRating/>
           <FcRating />
           <FcRating />
           <FcRating />
           <FcRating />
           </div>
       
        
        <p className='text-sm ml-6 font-bold font-mono'>I recently purchased a Honda from the official website. The online buying process was smooth and convenient.</p>
            </div>
          
           
            </div>
        </div>
    );
};

export default Review;