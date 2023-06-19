import React, { useState } from "react";
import listIcon from "../images/icon-list.svg";
import desktopIllustration from "../images/illustration-sign-up-desktop.svg";
import SuccessMessage from "./SuccessMessage";

const Card = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid()) {
      setShowSuccessMessage(true);
    } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.classList.remove("hidden");
      errorMessage.classList.add("inline");
      document.getElementById("email").classList.add("bg-btomato");
    }
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDismiss = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      {!showSuccessMessage && (
        <div className="bg-white flex gap-x-4 p-4 rounded-3xl container md:max-w-3xl max-w-md md:flex-row flex-col-reverse font-roboto">
          <div className="flex flex-col justify-center gap-y-4 py-3 px-8">
            <h1 className="text-4xl font-bold">Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="flex flex-col gap-y-4 text-[#36384E] text-sm">
              <ListItem
                icon={listIcon}
                text="Product discovery and building what matters"
              />
              <ListItem
                icon={listIcon}
                text="Measuring to ensure updates are a success"
              />
              <ListItem icon={listIcon} text="And much more!" />
            </ul>
            <form
              className="flex flex-col py-2 gap-y-2"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-xs font-bold">
                  Email address
                </label>
                <span
                  className="text-btomato text-xs hidden"
                  id="error-message"
                >
                  Valid email required
                </span>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
                className="sm:w-80 w-72 py-3 border rounded-lg placeholder:pl-4"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="mt-4 py-3 text-center border sm:w-80 w-72 rounded-lg text-white bg-[#232742] active:bg-gradient-to-r active:from-btomato active:to-yellow-500"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div>
            <img src={desktopIllustration} alt="" />
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <SuccessMessage email={email} onClose={handleDismiss} />
      )}
    </div>
  );
};

const ListItem = ({ icon, text }) => {
  return (
    <li className="flex items-center gap-x-4">
      <div>
        <img src={icon} alt="" />
      </div>
      <p>{text}</p>
    </li>
  );
};

export default Card;
