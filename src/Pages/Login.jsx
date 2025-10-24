import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useRef } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

const auth = getAuth(app);

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = use(AuthContext);
    const emailRef = useRef();

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email, password})
        signIn(email, password)
        .then((result) => {
            console.log(result.user)
            navigate(`${location.state? location.state : '/'}`)

        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode, errorMessage)
            setError(errorCode);

        })
    };

    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result =>{
        console.log(result.user)
        navigate(location?.state || '/')
      })
      .catch(error =>{
        console.log(error)
      })
    };

  

  const handleLoginPassword = () => {
  const email = emailRef.current.value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Please check your email for the password reset link.");
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
};



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
                placeholder="Email" 
                ref = {emailRef}
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div onClick={handleLoginPassword}>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                {
                  error && <p className="text-red-600 text-xs">{error}</p>
                }

                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4"> <FcGoogle /> Login with Google</button>
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
