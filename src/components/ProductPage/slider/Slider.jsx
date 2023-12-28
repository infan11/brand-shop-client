
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import imageA from "../../../assets/brand- advertisement/car-ad.jpeg"
import imageB from "../../../assets/brand- advertisement/leon-seibert-w-MvKI3SGJ0-unsplash.jpg"
import imageC from "../../../assets/brand- advertisement/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg"
import imageD from "../../../assets/brand- advertisement/wepik-export-20231227030006pPMn.jpeg"
import imageE from "../../../assets/brand- advertisement/yuvraj-singh-tmAynVA_ihE-unsplash.jpg"
const Slider = () => {
    
const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
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
   
  </AutoplaySlider>
        </div>
    );
};

export default Slider;