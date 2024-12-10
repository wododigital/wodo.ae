import React from "react";
import { faqData } from "./faqData";
import FAQSection from "../../../components/Faq's/FAQSection";

function Faqs() {
  return (
    <div className="py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="gf_h2">
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="gf_text pt-2">
              About Our Digital Marketing, Web Design & Development Services
            </p>
          </div>
        </div>
      </div>
      <div className="container py-2">
        <div className="row align-items-center justify-content-center">
        <FAQSection faqData={faqData} />
        </div>
      </div>

      {/* Custom styles for active accordion, hover, and description */}
      <style>
        {`
          .accordion-button:hover {
            background-color: #F8A925;
            color: white;
          }

          .accordion-button:not(.collapsed) {
            background-color: #F8A925;
            color: white;
          }

          .accordion-button {
            border: none;
            box-shadow: none;
            font-weight: 600;
            transition: background-color 0.3s ease;
          }

          .accordion-button:focus {
            outline: none;
            box-shadow: none;
          }

          .accordion-body {
            font-weight: 300;
          }
        `}
      </style>
    </div>
  );
}

export default Faqs;
