
import { FcGoogle,  } from "react-icons/fc";
import {  FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const {loginUser, google, github} = useContext(AuthContext)
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleFormSubmit = event => {
      event.preventDefault();
      const form = event.target; 
      const email = form.email.value;
      const password = form.password.value;
      const logggedUser = { email, password};
      console.log(logggedUser);
      if(password.length < 6){
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Password must 6 Characters",
              footer: '<a href="#"></a>'
            });
      }
  // create user
  loginUser(email ,password)
  .then(result => {
      const logggedUser = result.user;
      console.log(logggedUser);
      Swal.fire({
        title: "Successfully login",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

    navigate(from ,{replace:true})

  })
  
.catch(error =>{
  console.error(error);
  if(error.code === "auth/user-not-found"){
    Swal.fire({
      title:"Incorret email",
      icon: "error",
      text: "Email Doesnot Match",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
   } else if (error.code === "auth/wrong-password"){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password doesnot match",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  
   }
   else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email And Password Doesnot match",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
   }
})

} 
  // google
  const handleGoogle = () =>{
      google()
      .then(result =>{
          const googleUser = result.user
          console.log(googleUser);
          

          Swal.fire({
            title: "Successfully login",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from ,{replace:true})
         })
          .catch(error => console.log(error))
     
  }
  // github
  const handleGithub = () =>{
      github()
      .then(result =>{
         const githubUser = result.user;
         console.log(githubUser);
          Swal.fire({
            title: "Successfully login",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from ,{replace:true})
      })
      
  } 
    return (
  
          <div>
              
          <div data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-right "  className="hero min-h-screen  ">
              
  <div className="hero-content flex-col ">
  <div className="text-center lg:text-left">
  </div>
  <br />
  <div className="card shrink-0 w-full max-w-sm shadow-2xl border-yellow-400">
    <form onSubmit={handleFormSubmit} className="card-body bg-gradient-to-r  bg-white rounded-md shadow-2xl">
    <h1 className="text-xs font-bold text-black  font-mono">Assalamoalikom</h1>
    
      <div className="form-control">
        <label className="label">
          <span className="label-text text-green-500">Email</span>
        </label>
        <input type="email" placeholder= "  Email"name="email" className=" rounded-3xl p-1 shadow-2xl border-b-4 text-yellow-500 border-green-500" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-green-500">Password</span>
        </label>
        <input type="password" placeholder="  Password" name="password" className="rounded-3xl p-1 shadow-2xl border-b-4 text-white border-green-500" required />
        
      </div>
      <div className="form-control mt-6">
        <button className=" p-1 bg-green-600 rounded-full font-bold text-white">Continue</button>
        <div className="divider divider-success text-black">or</div>
      </div>
      <div className="flex flex-col w-full border-opacity-50">
  <div onClick={handleGoogle} className="grid border-2 border-green-700 p-1 rounded-3xl place-items-center"><FcGoogle /></div>
  <div className="divider divider-success text-black">or</div>
  <div onClick={handleGithub} className="grid border-2 border-green-700 p-1 rounded-3xl place-items-center"><FaGithub /></div>
  </div>
  <p className="text-center text-black font-bold"> New User ? Now <Link className="text-green-500" to={"/register"}>Register</Link></p>
    </form>
  </div>
  </div>
  </div>
      </div>
    );
};

export default Login;