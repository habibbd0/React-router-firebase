import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.Config";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate, } from "react-router-dom";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import AuthInfo from "../components/Custom Hook/AuthInfo";
const Login = () => {
  const { loginUser } = AuthInfo();
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate()


  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    loginUser(email,password)
    .then(result => {
      console.log(result.user);
      navigate('/profile')
    }).catch(error => {
      console.error(error.message);
    })
  };

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const HandleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="">
      <h1 className="text-violet-700 text-4xl font-semibold underline text-center mx-auto my-6">
        Login
      </h1>
      <div className="hero max-w-4xl mx-auto text-center">
        <div className="hero-content flex gap-10 lg:flex-row-reverse ">
          <div className="card w-full max-w-2xl shadow-2xl mt-4">
            <form onSubmit={handleLogin} className="card-body w-[500px]">
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
                  <input type={showPassword ?"text" : "password"} 
                  placeholder="password"
                  className="input input-bordered w-[100%]"
                  required
                  name="password"
                  />
                   <div className="absolute inset-y-0 right-0 pr-4 flex items-center loading-10">
                    {showPassword ? (
                      <span onClick={handlePassword} className="text-black text-2xl z-10">
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
                <button className="btn btn-primary text-lg">Login</button>
              </div>
              <span className="text-center mt-2">
                Have an account? Please{" "}
                <Link className="text-lg text-[#3F00E7]" to="/register">
                  Register
                </Link>
              </span>
              <p>OR</p>
            </form>

            <div className=" text-center w-56 mx-auto ">
              <div
                onClick={HandleGoogleLogin}
                className="border border-slate-800 flex justify-around p-2 rounded-full w-full"
              >
                <span className="text-violet-700 text-2xl">
                  <FaGoogle />
                </span>
                <h1>Sign up with Google</h1>
              </div>

              <div className="border border-slate-800 flex justify-around p-2 rounded-full mt-2 w-full">
                <span className="text-violet-700 text-2xl">
                  <FaGithub />
                </span>
                <h1>Sign up with Github</h1>
              </div>
              <div className="border border-slate-800 flex justify-around p-2 rounded-full mt-2 mb-2 w-full">
                <span className="text-violet-700 text-2xl">
                  {" "}
                  <MdOutlineEmail />{" "}
                </span>
                <h1>Sign up with Email</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
