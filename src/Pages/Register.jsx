import React, { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
        .then(resut =>{
            const user = resut.user;
            // console.log(user)
            setUser(user)
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })
    }

    return (
         <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body w-75">
              <h1 className="text-2xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                {/* name */}
                 <label className="label">Name</label>
                <input 
                  name='name' 
                  type="text" 
                  className="input" 
                  placeholder="Name"
                  required 
                />
                {/* photoURL */}
                 <label className="label">PhotoURL</label>
                <input 
                   name='photo' 
                   type="text" 
                   className="input" 
                   placeholder="PhotoURL" 
                />
                {/* email */}
                <label className="label">Email</label>
                <input 
                   name='email' 
                   type="email" 
                   className="input" 
                   placeholder="Email" 
                   required
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  name='password'
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button type='submit' className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              </form>
              <p className='font-semibold'>Already Have an Account? Please <NavLink to={'/auth/login'} className='text-green-600 hover:underline'>Login</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;