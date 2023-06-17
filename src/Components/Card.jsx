import React from "react";
import listIcon from "../images/icon-list.svg";
import desktopIllustration from "../images/illustration-sign-up-desktop.svg";

const Card = () => {
  return (
    <div className="bg-white flex gap-x-4 p-4 rounded-3xl container md:max-w-3xl max-w-md md:flex-row flex-col-reverse">
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
        <form className="flex flex-col py-2 gap-y-2">
          <label htmlFor="email" className="text-xs font-bold">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            className="sm:w-80 w-72 py-3 border rounded-lg placeholder:pl-4"
          />
          <button
            type="button"
            className="mt-4 py-3 text-center border sm:w-80 w-72 rounded-lg text-white bg-[#232742]"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div>
        <img src={desktopIllustration} alt="" />
      </div>
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
