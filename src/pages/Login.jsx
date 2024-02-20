import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.Config";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate, } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/Authprovider/Authprovider";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
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

  return (
    <div className="max-w-4xl text-center mx-auto border border-violet-500 p-8 my-12">
      <h1 className="text-violet-700 text-2xl font-semibold underline">
        Login
      </h1>
      <div className="hero">
        <div className="hero-content flex gap-10 lg:flex-row-reverse">
          <div className="text-center w-full max-w-xl mx-auto lg:text-left">
            <h1 className="text-5xl font-bold">Welcome</h1>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-[100%]"
                  required
                  name="password"
                />
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
