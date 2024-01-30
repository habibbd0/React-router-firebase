import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.Config";
import { useState } from "react";
const Register = () => {
  const auth = getAuth(app);

  const [error,seterror] = useState('');
  const HandleRegisterAccount = (event) => {
    event.preventDefault();


    // const name = event.target.name.value;
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
    }).catch((error) => {
      seterror(error.message)
    })
   
    
  // form.reset();

    // console.log(name,photourl,email,password);
  };

  return (
    <div>
      <div className=" mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-2xl shadow-2xl mt-10">
            <form onSubmit={HandleRegisterAccount} className="card-body">
              <p className={`${error && 'text-red-500 text-center'}`}>{error}</p>
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
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
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
