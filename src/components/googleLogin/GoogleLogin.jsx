import React from "react";
import googleLogo from "../../assets/images/google.png";

const GoogleLogin = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full h-[1px] bg-[#A6ADBA]"></div>
        <div>OR</div>
        <div className="w-full h-[1px] bg-[#A6ADBA]"></div>
      </div>
      <div className="py-5">
        <button className="w-full flex justify-center items-center border-[1px] border-[#A6ADBA] rounded-md py-1 hover:bg-[#A6ADBA] hover:text-white transition duration-300">
          <img src={googleLogo} alt="" className="w-8 pr-1" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
