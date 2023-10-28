import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const user=useSelector(store=>store.user);
  const navigate=  useNavigate()
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
          
    }
  return ( 
    <div className="absolute  flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44"
src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png "alt="Logo"
      />
      {user&&(<div className="flex  text-center">
        <img className=" h-12 pt-4 "src={user?.photoURL}/>
      <button onClick={handleSignOut} className="pb-10 text-white font-bold cursor-pointer pt-2">(Sign Out)</button>
      </div>)}
    </div>
    
  );
};

export default Header;
