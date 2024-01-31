import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.Config";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const Register = () => {
  const auth = getAuth(app);

  const [error,setError] = useState('');
  const [success,setsuccess] = useState('');
  const [showPassword,setShowPassword] = useState(false)
  const HandleRegisterAccount = (event) => {
    event.preventDefault();


    // const name = event.target.name.value;
    const form = event.target;
    // const name = form.name.value;
    // const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    if(password.length < 6) {
      setError("please enter a valid password with at last 6 characters.");
      return
    } else if (!/[A-Z]/.test(password)) {
      return setError('password must be one uppercase letter')
    } else if (!/[1-9]/.test(password)) {
      return setError('password must be one number letter')
    } else if (!/[@,#,$,&,!]/.test(password)) {
      return setError('password must be one special characters => @,#,$,&,!')
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
      setsuccess('Seccessful Register')
    }).catch((error) => {
      setError(error.message)
    })
   
    
  // form.reset();

    // console.log(name,photourl,email,password);
  };

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }


  return (
    <div>
      <div className=" mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-2xl shadow-2xl mt-10">
            <form onSubmit={HandleRegisterAccount} className="card-body">
              <p className={`${error ? "text-red-500" : "text-green-500 text-xl"} text-center`}>{error ? error : success}</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="UserName"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="photo"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  required
                  name="photourl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  
                </label>
               
               <div className="relative">
               <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  className="input input-bordered w-[100%]"
                  required
                  name="password"
                  
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center leading-10">
                 {showPassword ? (
                  <span onClick={handlePassword} className="text-black z-10 text-2xl">
                    <IoIosEye />
                  </span>
                 ) : (
                  <span onClick={handlePassword} className="text-black z-10 text-2xl">
                    <IoIosEyeOff />
                  </span>
                 )}
                </div>
               </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-semibold text-lg">
                  Register
                </button>
                <span className="text-center mt-2">
                  Have an account? Please{" "}
                  <Link className="btn btn-success btn-sm" to="/login">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
