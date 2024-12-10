import React from "react";
import "../PrLandingPage/style.css";
import LOGO_WHITE from "../../media/WODO 1.png";
import ElementorButton from "../../components/elementorButton/elementorButton";

function DevelopmentThankYou() {
  return (
    <div className="pr-container">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="pr-shadow">
          <div className="">
            <img src={LOGO_WHITE} width="150" alt="" />
          </div>
          <h1 className="thank_you_pr">THANK YOU!</h1>
          <p className="my-3 pr-p pb-5">
            Our team will get in touch with you Shortly.
          </p>
          <ElementorButton URL="/" text="Explore More" />
        </div>
      </div>
    </div>
  );
}

export default DevelopmentThankYou;
