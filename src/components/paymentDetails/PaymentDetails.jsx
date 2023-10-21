import React, { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/images/trending-hero.png";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const { id } = useParams();

  const [product, setProduct] = React.useState({});

  useEffect(() => {
    fetch(`https://gcardapi.gcardbuy.com/api/v1/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  const [nameError, setNameError] = useState("");
  const [cardError, setCardError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
    let formattedCardNumber = value.replace(/\s/g, ""); // Remove any existing spaces

    // Check if the input consists of numbers only
    if (!/^\d+$/.test(formattedCardNumber)) {
      setCardError("Please enter a valid numeric card number.");
    } else if (formattedCardNumber.length > 16) {
      // If the input exceeds 16 digits after removing spaces, truncate it
      formattedCardNumber = formattedCardNumber.slice(0, 16);
    } else {
      setCardError("");
    }

    // Format the card number with spaces after every 4 digits
    let formattedValue = "";
    for (let i = 0; i < formattedCardNumber.length; i += 4) {
      formattedValue += formattedCardNumber.slice(i, i + 4) + " ";
    }
    formattedValue = formattedValue.trim(); // Remove the trailing space

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleKeyPress = (e) => {
    // Allow only numeric input (0-9)
    const isNumeric = /^\d+$/.test(e.key);
    if (!isNumeric) {
      e.preventDefault();
    }
  };

  const handleExpiryDate = (e) => {
    const { name, value } = e.target;

    // Remove any non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length >= 2) {
      // Extract the first two digits as the month
      const enteredMonth = numericValue.slice(0, 2);
      // Extract the next two digits as the year (last two digits)
      const enteredYear = numericValue.slice(2, 4);

      // Get the current year's last two digits
      const currentYearLastTwoDigits = new Date()
        .getFullYear()
        .toString()
        .slice(-2);

      // Validate the month (should be between 01 and 12)
      if (enteredMonth < "01" || enteredMonth > "12") {
        setExpiryDateError("Please enter a valid month (01-12).");
      } else {
        // Validate the year (should be greater than or equal to the current year's last two digits)
        if (enteredYear < currentYearLastTwoDigits) {
          setExpiryDateError(
            "Year must be greater than or equal to the present year's last two digits."
          );
        } else {
          setExpiryDateError("");
        }
      }
    } else {
      // If there are not enough digits yet, clear any previous error message
      setExpiryDateError("");
    }

    // Format the input with a slash (/) between the month and year
    let formattedValue = numericValue;
    if (numericValue.length >= 2) {
      formattedValue =
        numericValue.slice(0, 2) + "/" + numericValue.slice(2, 4);
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleCvv = (e) => {
    const { name, value } = e.target;
    let formattedCardNumber = value.replace(/\s/g, "");

    // Check if the input consists of numbers only
    if (!/^\d+$/.test(formattedCardNumber)) {
      setCvvError("Please enter a valid numeric cvv number.");
    } else if (formattedCardNumber.length > 3) {
      // If the input exceeds 16 digits after removing spaces, truncate it
      formattedCardNumber = formattedCardNumber.slice(0, 3);
    } else {
      setCvvError("");
    }

    // Format the card number with spaces after every 4 digits
    let formattedValue = "";
    for (let i = 0; i < formattedCardNumber.length; i += 3) {
      formattedValue += formattedCardNumber.slice(i, i + 3) + " ";
    }
    formattedValue = formattedValue.trim(); // Remove the trailing space

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen2 = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please enter your email", {
        autoClose: 1500,
      });
      setOpen(true);
    } else {
      setOpen2(true);
      setOpen(false);
    }
    if (password === "") {
      toast.error("Please enter your password", {
        autoClose: 1500,
      });
      setOpen(true);
    } else {
      setOpen2(true);
      setOpen(false);
    }
  };
  let handleClose2 = () => {
    setOpen2(false);
    let timerInterval;
    Swal.fire({
      title: "Your payment is processing...",
      html: "It will take few <b></b> seconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("It was closed by the timer");
      }
    });
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 2500,
      });
    }, 3500);
    setTimeout(() => {
      navigate("/");
    }, 3600);
  };
  const productCode = Math.floor(Math.random() * 10000000000000000);
  const handleClick = (e) => {
    e.preventDefault();

    if (formData.holdername === "") {
      toast.error("Please holder name", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.address === "") {
      toast.error("Please enter your address", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.city === "") {
      toast.error("Please enter your city", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.state === "") {
      toast.error("Please enter your state", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.zipcode === "") {
      toast.error("Please enter your zipcode", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.cardnumber === "") {
      toast.error("Please enter your card number", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.expirydate === "") {
      toast.error("Please enter your expiry date", {
        autoClose: 1500,
      });
      return;
    }
    if (formData.cvv === "") {
      toast.error("Please enter your cvv", {
        autoClose: 1500,
      });
      return;
    }
    // You can send the form data to your server
    fetch("https://gcardapi.gcardbuy.com/api/v1/paymentDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOpen((cur) => !cur);
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
    <div className="lg:py-20">
      <div className="lg:w-[400px] mx-auto bg-[#1D232A] p-8 rounded-lg">
        <form>
          <div className="my-5">
            <p className="text-white pb-2">
              Card Holder Name
              <sup>
                <span className="text-red-500">*</span>
              </sup>
            </p>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="holdername"
                value={formData.holdername}
                onChange={handleName}
                className="w-full peer h-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
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
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full peer h-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Address
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full peer h-full lg:w-[105px]  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full lg:w-[105px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                City
              </label>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full peer h-full lg:w-[105px]  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full lg:w-[105px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                State
              </label>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="zipcode"
                value={formData.zipcode}
                onChange={handleZipCode}
                onKeyPress={handleKeyPress}
                className="w-full peer h-full lg:w-[105px]  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full lg:w-[105px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
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
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="cardnumber"
                value={formData.cardnumber}
                onChange={handleCardNumber}
                onKeyPress={handleKeyPress}
                className="w-full peer h-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
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
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="expirydate"
                value={formData.expirydate}
                onChange={handleExpiryDate}
                className="w-full peer h-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
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
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleCvv}
                onKeyPress={handleKeyPress}
                className="w-full peer h-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500  peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                CVV
              </label>
            </div>
            {cvvError && <p className="text-red-500 text-sm">{cvvError}</p>}
          </div>
          <div className="mt-3">
            <button
              className="mt-6 block w-full select-none rounded-lg bg-[#8EA406] hover:bg-[#1d232a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-sm hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <form action="">
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen2}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                  <Input
                    type="email"
                    label="Email"
                    size="lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    label="Password"
                    size="lg"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input label="Recovery Email" size="lg" />
                  <p className="text-sm">
                    Product Code will be sent here to complete the process
                  </p>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    onClick={handleOpen2}
                    fullWidth
                    className="block w-full select-none rounded-lg bg-[#8EA406] hover:bg-[#1d232a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-sm hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Proceed
                  </Button>
                </CardFooter>
              </Card>
            </Dialog>
          </form>
        </div>
        <div>
          <Dialog
            size="xs"
            open={open2}
            handler={handleClick}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardBody className="flex flex-col gap-4">
                <p className="text-lg">Your payment request is processing...</p>
                <p className="text-sm">Your product code is {productCode}</p>
                <h1 className="text-lg font-bold mt-2">
                  Your product code<sup>*</sup>
                </h1>
                <Input value={productCode} size="lg" disabled />
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  onClick={handleClose2}
                  fullWidth
                  className="block w-full select-none rounded-lg bg-[#8EA406] hover:bg-[#1d232a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-sm hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Complete
                </Button>
              </CardFooter>
            </Card>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
