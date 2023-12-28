
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import imageA from '../../../assets/brand- advertisement/car-2.jpeg';
import imageB from '../../../assets/brand- advertisement/car-ad.jpeg'
import imageC from '../../../assets/brand- advertisement/car-1.jpg'
import imageD from '../../../assets/brand- advertisement/sports-car-driving-asphalt-road-night-generative-ai.jpg'
import imageE from '../../../assets/brand- advertisement/white-offroader-jeep-parking.jpg'
import imageF from '../../../assets/brand- advertisement/leon-seibert-w-MvKI3SGJ0-unsplash.jpg'
   
const CartSlider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
 return (
        <div>
             <div  data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
              <AutoplaySlider play={true}cancelOnInteraction={false} interval={6000} >
    <div  data-src={imageA} />
    <div  data-src={imageB} />
    <div data-src={imageC} />
    <div data-src={imageD} />
    <div data-src={imageE} />
    <div data-src={imageF} />
  </AutoplaySlider>
        </div>
        </div>
    );
};

export default CartSlider;