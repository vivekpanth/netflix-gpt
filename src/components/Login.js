import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

   const email=useRef(null)
   const password=useRef(null)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick=()=>{
       const message= checkValidData(email.current.value,password.current.value)
       seterrorMessage(message)
       console.log(message) 
        console.log(email)
        console.log(password )
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-log"
        />
      </div>
      <form
        onSubmit={(e)=>e.preventDefault()}
        className="w-3/12 absolute px-12 py-4 bg-opacity-80 bg-black my-36 mx-auto rounded-lg text-white left-0 right-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && 
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        }
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-600"
        />
       
        <input 
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-600"
        />
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button className="p-4 my-2 bg-red-600 rounded-lg w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button >
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
