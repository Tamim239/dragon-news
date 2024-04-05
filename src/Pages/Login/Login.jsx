import { Link, useLocation,useNavigate } from "react-router-dom";
import { Navbar } from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export const Login = () => {
const {signIn} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()

  const handleLogin = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)
    signIn(email, password)
    .then(res => {
      console.log(res.user)
      // navigate after login
   navigate(location?.state ? location.pathname :'/')

    })
    .catch(err =>{
      console.log(err.message)
    })
  }



  return (
    <div>
      <Navbar></Navbar>
      <div className="my-20">
      <h1 className="text-3xl font-bold text-center">Please Login</h1>
      <form onSubmit={handleLogin} className="w-1/2 mx-auto">
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">
      <Link to="/register">Do not have an account, <span className="text-red-600">Register</span></Link>
      </p>
    </div>
    </div>
  );
};
