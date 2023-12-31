import imageA from '../../../assets/TEAM MEMBR/half-length-portrait-arabian-saudi-businessman-dark-blue-studio-background-young-male-model-standing-smiling-concept-business-finance-facial-expression-human-emotions.jpg'
import imageB from '../../..//assets/TEAM MEMBR/handsome-bearded-guy-posing-against-white-wall.jpg'
import imageC from '../../..//assets//TEAM MEMBR/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg'
const Team = () => {
    return (
        <div>
            <div className="text-center bg-gray-100 w-80 mx-auto text-2xl font-mono mt-11 p-3 rounded-3xl  text-black">
                <p>OUR TEAM MEMBER </p>
            </div>
            <div className='grid md:grid-cols-3 gap-8 mt-9' data-aos="zoom-in">
         <div>
         <div className=" w-60 mx-auto   shadow-xl">
  <figure className="">
    <img src={imageA} alt="men" className="relative rounded-lg " />
  </figure>

</div>
         
         <div  className="   ml-3">
    <h2 className="text-2xl  ml-11 font-bold font-mono ">Atawor Rahman</h2>
    <p className='text-2xl   ml-11 font-bold font-mono '>Owner</p>
  </div>
        </div> 
        <div>
         <div className=" w-60 mx-auto   shadow-xl">
  <figure className="">
    <img src={imageB} alt="men" className="relative rounded-lg" />
  </figure>

</div>
         
         <div  className="  ml-3">
    <h2 className="text-2xl  ml-11 font-bold font-mono ">Pervez Rahman</h2>
    <p className='text-2xl  ml-11 font-bold font-mono '>Employer</p>
  </div>
        </div> 
        <div>
         <div className=" w-60 mx-auto   shadow-xl">
  <figure className="">
    <img src={imageC} alt="men" className="relative rounded-lg" />
  </figure>

</div>
         
         <div  className="  ml-3">
    <h2 className="text-2xl  ml-11 font-bold font-mono ">Mosharof Kondoker</h2>
    <p className='text-2xl  ml-11 font-bold font-mono '>Employer</p>
  </div>
        </div> 
         </div>
        </div>
    );
};

export default Team;