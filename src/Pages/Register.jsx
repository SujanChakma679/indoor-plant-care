import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';

const Register = () => {
    return (
         <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body w-75">
              <h1 className="text-2xl font-bold">Register now!</h1>
              <fieldset className="fieldset">
                {/* name */}
                 <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                {/* photoURL */}
                 <label className="label">PhotoURL</label>
                <input type="text" className="input" placeholder="PhotoURL" />
                {/* email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p className='font-semibold'>Already Have an Account? Please <NavLink to={'/auth/login'} className='text-green-600 hover:underline'>Login</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;