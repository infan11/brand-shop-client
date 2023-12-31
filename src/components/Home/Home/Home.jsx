import AllBrand from "../AllBrand/AllBrand";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div className="min-h-screen">
           
               <Banner></Banner>
               <AllBrand></AllBrand>
               <Services></Services>
               <Contact></Contact>
               <Team></Team>
               <Review></Review>
               
         
        </div>
    );
};

export default Home;