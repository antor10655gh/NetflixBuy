import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import bgImg from "../../assets/images/trending-hero.png";
import { toast } from "react-toastify";
import "./PaymentDetails.css";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };
  const [nameError, setNameError] = useState("");
  const [cardError, setCardError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const [formData, setFormData] = useState({
    holdername: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cardnumber: "",
    expirydate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleName = (e) => {
    const { name, value } = e.target;
    const holderName = formData.holdername;

    // Validate that the input contains only letters (no numbers)
    const lettersOnlyRegex = /^[A-Za-z\s]+$/;
    if (!lettersOnlyRegex.test(holderName)) {
      setNameError("Please enter a valid name with only letters.");
    } else {
      setNameError("");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleZipCode = (e) => {
    const { name, value } = e.target;
    const zipCode = formData.zipcode;

    // Validate that the input contains only numeric characters
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(zipCode)) {
      setZipCodeError("ZIP code must contain only numeric characters.");
    } else {
      setZipCodeError("");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCardNumber = (e) => {
    const { name, value } = e.target;
    const cardNumber = formData.cardnumber;

    // // Check if the input is a valid card number
    if (!/^\d+$/.test(cardNumber)) {
      setCardError("Please enter a valid numeric card number.");
    } else if (value.length < 16) {
      setCardError("Card number must be at least 16 digits.");
    } else {
      setCardError("");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleExpiryDate = (e) => {
    const { name, value } = e.target;
    const expiryDate = formData.expirydate;

    // Validate input format (MM/YYYY)
    const dateRegex = /^(0[1-9]|1[0-2])\/(20\d{2})$/;
    if (!dateRegex.test(value)) {
      setExpiryDateError("Please enter a valid date in MM/YYYY format.");
    } else {
      // Extract month and year
      const [, enteredMonth, enteredYear] = value.match(dateRegex);

      // Get the current year
      const currentYear = new Date().getFullYear();

      // Check if the entered year is less than the current year
      if (parseInt(enteredYear, 10) < currentYear) {
        setExpiryDateError(
          "Year must be greater than or equal to the present year."
        );
      } else {
        setExpiryDateError("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCvv = (e) => {
    const { name, value } = e.target;
    const cvv = formData.cvv;

    // Validate that the input contains exactly three digits and is numeric
    const cvvRegex = /^\d{2}$/;
    if (!cvvRegex.test(cvv)) {
      setCvvError("CVV must be a three-digit numeric value.");
    } else {
      setCvvError("");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.holdername === "") {
      toast.error("Please enter your name", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.address === "") {
      toast.error("Please enter your email", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.city === "") {
      toast.error("Please enter your subject", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.state === "") {
      toast.error("Please enter your message", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.zipcode === "") {
      toast.error("Please enter your message", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.cardnumber === "") {
      toast.error("Please enter your message", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.expirydate === "") {
      toast.error("Please enter your message", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.cvv === "") {
      toast.error("Please enter your message", {
        autoClose: 1500,
      });
      return;
    }

    // You can send the form data to your server
    fetch("http://localhost:8000/api/v1/paymentDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Message Send Successfully!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      });

    // Clear all input fields by resetting the formData state
    setFormData({
      holdername: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      cardnumber: "",
      expirydate: "",
      cvv: "",
    });
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center lg:py-20" style={divStyle}>
      <div className="lg:w-[400px] mx-auto bg-[#1D232A] p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <p className="text-white pb-2">
              Card Holder Name
              <sup>
                <span className="text-red-500">*</span>
              </sup>
            </p>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="holdername"
                value={formData.holdername}
                onChange={handleName}
                class="w-full peer h-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Card Holder Name
              </label>
            </div>
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>
          <div className="my-5">
            <p className="text-white pb-2">
              Address
              <sup>
                <span className="text-red-500">*</span>
              </sup>
            </p>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                class="w-full peer h-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Address
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                class="w-full peer h-full lg:w-[105px]  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full lg:w-[105px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                City
              </label>
            </div>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                class="w-full peer h-full lg:w-[105px]  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full lg:w-[105px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                State
              </label>
            </div>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="zipcode"
                value={formData.zipcode}
                onChange={handleZipCode}
                class="w-full peer h-full lg:w-[105px]  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full lg:w-[105px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Zip Code
              </label>
            </div>
          </div>
          {zipCodeError && (
            <p className="text-red-500 text-sm w-full pt-2">{zipCodeError}</p>
          )}
          <div className="my-5">
            <div className="flex justify-between items-center">
              <p className="text-white pb-2">
                Card
                <sup>
                  <span className="text-red-500">*</span>
                </sup>
                (Master/Debit)
              </p>
              <div>
                <ul className="flex justify-center lg:justify-between items-center">
                  <li>
                    <img
                      className="w-6"
                      src="https://netflixbuy.com/assets/visa-dbe3e5ea.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-8"
                      src="https://netflixbuy.com/assets/mastercard-e0b74b86.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-8"
                      src="https://netflixbuy.com/assets/discover-30a7cf1e.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-8"
                      src="https://netflixbuy.com/assets/paysafecard-2e3270af.svg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="cardnumber"
                value={formData.cardnumber}
                onChange={handleCardNumber}
                class="w-full peer h-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Card
              </label>
            </div>
            {cardError && <p className="text-red-500 text-sm">{cardError}</p>}
          </div>
          <div className="my-5">
            <p className="text-white pb-2">
              Expiry Date
              <sup>
                <span className="text-red-500">*</span>
              </sup>
            </p>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="expirydate"
                value={formData.expirydate}
                onChange={handleExpiryDate}
                class="w-full peer h-full   rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Expiry Date
              </label>
            </div>
            {expiryDateError && (
              <p className="text-red-500 text-sm">{expiryDateError}</p>
            )}
          </div>
          <div className="my-5">
            <p className="text-white pb-2">
              CVV
              <sup>
                <span className="text-red-500">*</span>
              </sup>
            </p>
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleCvv}
                class="w-full peer h-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                CVV
              </label>
            </div>
            {cvvError && <p className="text-red-500 text-sm">{cvvError}</p>}
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="w-full bg-[#dc2626] text-white rounded-md py-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
