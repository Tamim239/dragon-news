import { Link } from "react-router-dom";
import { Navbar } from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export const Register = () => {
  const {createUser} = useContext(AuthContext)

const handleRegister = e =>{
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  const name = form.get('name')
  const photo = form.get('photo')
  const email = form.get('email')
  const password = form.get('password')
  console.log(name, photo, email, password)

  createUser(email, password)
  .then(res => {
    console.log(res.user)
  })
  .catch(err =>{
    console.log(err.message)
  })

}


  return (
    <div>
      <Navbar></Navbar>
      <div className="my-5">
      <h1 className="text-3xl font-bold text-center">Please Register Now</h1>
      <form onSubmit={handleRegister} className="w-1/2 mx-auto">
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="photo" className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">
      <Link to="/login">Already have an account, <span className="text-red-600">Login</span></Link>
      </p>
    </div>
    </div>
  );
};
