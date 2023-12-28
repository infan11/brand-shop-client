
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import imageA from '../../../assets/bmw/bmw-2.jpeg';
import imageB from '../../../assets/ford/ford-2.jpeg'
import imageC from '../../../assets/honda/honda-4.jpeg'
import imageD from '../../../assets/mercedes/mercedes-5.jpeg'
import imageE from '../../../assets/tesla/tesla-5.jpeg'
import imageF from '../../../assets/toyota/toyota-2.jpeg'

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
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
    <div data-src={imageF} />
  </AutoplaySlider>
        </div>
    );
};

export default Banner;