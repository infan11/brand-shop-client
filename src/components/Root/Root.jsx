import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    const location = useLocation();
    const nOHeaderFooter = location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div className="">

            {nOHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
           {nOHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;