import AllBrand from "../AllBrand/AllBrand";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div className="min-h-screen">
           
               <Banner></Banner>
               <AllBrand></AllBrand>
               <Contact></Contact>
               <Team></Team>
         
        </div>
    );
};

export default Home;