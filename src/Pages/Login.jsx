import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body w-75">
              <h1 className="text-2xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                name="email" 
                type="email" 
                className="input" 
                placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                <button className="btn btn-neutral mt-4"> <FcGoogle /> Login with Google</button>
              </fieldset>
              </form>
              <p className="font-semibold">New to Our Website? Please <NavLink to={'/auth/register'} className='text-green-600 hover:underline'>Register</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
