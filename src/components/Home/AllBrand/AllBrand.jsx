
import { Link } from 'react-router-dom'
import imageA from '../../../assets/bmw/bmw-logo-1997-640.png'

import imageB from '../../../assets/ford/ford-logo-2017-640.png'

import imageC from '../../../assets/honda/honda-logo-2000-full-download.png'

import imageD from '../../../assets/mercedes/Mercedes-Benz-logo-2011-640x369.jpg'

import imageE from '../../../assets/tesla/tesla-logo-2007-full-640.png'
import imageF from '../../../assets/toyota/toyota-logo-2020-europe-640.png'

const AllBrand = () => {

    return (
        <div>
            <div 
             className="bg-white animate-bounce text-black mt-16 mb-6 mx-auto p-3 w-80  rounded-xl">
                <p   className="text-center text-2xl font-bold font-mono  ">ALL AVAILABLE BRAND</p>
            </div>

            <div className='grid md:grid-cols-3 gap-5'>
            <div  data-aos="fade-down" className="card w-80 ml-6   text-purple-400  shadow-2xl">
  <figure> <img  className='' src={imageA} alt="Unavailable Brand" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      BMW</h2>
    <p>Founder Name: Karl Rapp and Gustav Otto</p>
    <p>Made In: Germany</p>
    <p>BMW, a German luxury automaker founded by Karl Rapp and Gustav Otto, epitomizes precision engineering and sophisticated design. </p>
    <div className="card-actions justify-end">
      <div  className="badge badge-outline"><Link to={"/addProduct"}>Deatils</Link></div> 
      
    </div>
  </div>
</div>
            <div data-aos="fade-down" className="card w-80 ml-6  text-purple-400  shadow-2xl">
  <figure><img className='' src={imageB} alt="Unavailable Brand" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Ford
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Founder Name: Henry Ford</p>
    <p>Made In: United States</p>
    <p>Ford, an American automotive giant founded by Henry Ford, stands as a symbol of innovation and durability.. </p>
    
    <div className="card-actions justify-end">
      <div  className="badge badge-outline"><Link to={"/addProduct"}>Deatils</Link></div> 
      
    </div>
  </div>
</div>
            <div data-aos="fade-down" className="card w-80 ml-6  text-purple-400  shadow-2xl">
  <figure><img className='' src={imageC} alt="Unavailable Brand" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Honda
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Founder Name: Soichiro Honda</p>
    <p>Made In: Japan</p>
    <p>Honda, a Japanese automotive pioneer founded by Soichiro Honda, is synonymous with reliability and efficiency. </p>
    <div className="card-actions justify-end">
      <div  className="badge badge-outline"><Link to={"/addProduct"}>Deatils</Link></div> 
      
    </div>
  </div>
</div>
            <div data-aos="zoom-in" className="card w-80 ml-6  text-purple-400  shadow-2xl">
  <figure><img className='' src={imageD} alt="Unavailable Brand" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Mercedes-Benz
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Founder Name: Karl Benz and Gottlieb Daimler</p>
    <p>Made In: Germany</p>
    <p>Mercedes-Benz, a German luxury automobile marque founded by Karl Benz and Gottlieb Daimler. </p>
    <div className="card-actions justify-end">
      <div  className="badge badge-outline"><Link to={"/addProduct"}>Deatils</Link></div> 
      
    </div>
  </div>
</div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="card w-80 ml-6  text-purple-400  shadow-2xl">
  <figure><img className='' src={imageE} alt="Unavailable Brand" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Tesla
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Founder Name: Elon Musk, Martin Eberhard, Marc Tarpenning, JB Straubel, and Ian Wright</p>
    <p>Made In: United States</p>
    <p> Tesla, an American electric vehicle pioneer founded by Elon Musk, Martin Eberhard, Marc Tarpenning. </p>
    <div className="card-actions justify-end">
      <div  className="badge badge-outline"><Link to={"/addProduct"}>Deatils</Link></div> 
      
    </div>
  </div>
</div>
            <div data-aos="fade-down"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="card w-80 ml-6  text-purple-400  shadow-2xl">
  <figure><img className='' src={imageF} alt="Unavailable Brand" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Toyota
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Founder Name: Kiichiro Toyoda</p>
    <p>Made In: Japan</p>
    <p> Toyota, a Japanese automotive giant founded by Kiichiro Toyoda, is synonymous with reliability, efficiency, and innovation.</p>
    <div className="card-actions justify-end">
      <div  className="badge badge-outline"><Link to={"/addProduct"}>Deatils</Link></div> 
      
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default AllBrand;