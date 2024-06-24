import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newLetter">
      <h2>get exclusive offers on your email</h2>
      <p>subscribe to our Newsletter and stay updates</p>
      <div>
        <input placeholder="enter your mail" type="email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
