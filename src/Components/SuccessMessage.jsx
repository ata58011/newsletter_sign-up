import React, { useState } from "react";
import success from "../images/icon-success.svg";

const SuccessMessage = ({ email, onClose }) => {
  const handleDismiss = () => {
    onClose();
  };

  return (
    <div className="success-message max-w-md bg-white rounded-3xl font-roboto flex flex-col p-16 gap-y-6 font-roboto">
      <img src={success} alt="" className="w-16 pb-2" />
      <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
      <p className="text-sm">
        A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button
        className="mt-4 py-3 text-center border sm:w-80 w-72 rounded-lg text-white bg-[#232742] active:bg-gradient-to-r active:from-btomato active:to-yellow-500"
        onClick={handleDismiss}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessMessage;
