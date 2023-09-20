import React from "react";
import googleLogo from "../../assets/images/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  // google login
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const formData = {
          name: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(formData));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
        // You can send the form data to your server
        fetch("http://localhost:8000/api/v1/user/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full h-[1px] bg-[#A6ADBA]"></div>
        <div>OR</div>
        <div className="w-full h-[1px] bg-[#A6ADBA]"></div>
      </div>
      <div className="py-5">
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex justify-center items-center border-[1px] border-[#A6ADBA] rounded-md py-1 hover:bg-[#A6ADBA] hover:text-white transition duration-300"
        >
          <img src={googleLogo} alt="" className="w-8 pr-1" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
