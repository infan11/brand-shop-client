
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
const {user , logOut} = useContext(AuthContext) 
const handleLogOut = () =>{
  logOut()
  .then(() => {} )
  .catch(error =>console.log(error))
}
const navLinks = <>
   <NavLink
    to="/"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  Home
</NavLink>
{/* add product */}
<NavLink
    to="/addProduct"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  AddProduct
</NavLink>
{/* my cart */}
<NavLink
    to="/myCart"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  MyCart
</NavLink>
{/* login */}
{
  user ? <> <button onClick={handleLogOut}>LogOut</button> </> : <><NavLink
    to="/login"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  Login
</NavLink>
<NavLink
    to="/register"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  
</NavLink>
</>
}

</>

const [theme , setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
)
const handleThemeToggle = e =>{
  if(e.target.checked){
    setTheme("black")
  }
  else{
    setTheme("light");
  }
}
useEffect(() =>{
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme")
  document.querySelector("html").setAttribute("data-theme", localTheme);
},[theme])
     return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="navbar  fixed z-10 max-w-6xl p-5 bg-opacity-30">
  <div className="flex-1">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
  
     {navLinks}
      </ul>

    </div>
    <a href="/" className="btn btn-ghost  text-red-600 font-bold font-mono text-2xl">AUTOMOBILE</a>
  </div>
 

  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-orange-400 font-bold gap-5">
   {navLinks}
    </ul>
  </div>
  <div className="flex-none">
  <button onClick={handleThemeToggle}><label className="swap swap-rotate">
  
        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
</label></button>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
           <img  src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-80">
        <li>
        {
  user ? <> <button onClick={handleLogOut}>LogOut</button> </> : <><NavLink
    to="/login"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  Login
</NavLink>
<NavLink
    to="/register"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  }
>
  
</NavLink>
</>
}
          <a className="justify-between">
            <br />
            <p>{user?.email}</p>
            <span className="badge">New</span>
            
          </a>
        </li>
        <button onClick={handleThemeToggle}><label className="swap swap-rotate">
  
        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
</label></button>
<p className="text-center">{user?.displayName}</p>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;