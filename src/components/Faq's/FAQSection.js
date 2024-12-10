import React from "react";
import PropTypes from "prop-types";

function FAQSection({ faqData }) {
  return (
    <div className="container py-2">
      <div className="row align-items-start justify-content-center">
        <div className="col-md-6 col-12">
          <div className="accordion accordion-flush" id="accordionFlushLeft">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
              <div
                className="accordion-item"
                key={index}
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  marginBottom: "15px",
                  transition: "all 0.3s ease",
                }}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapseLeft${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapseLeft${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapseLeft${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushLeft"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="accordion accordion-flush" id="accordionFlushRight">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
              <div
                className="accordion-item"
                key={index + Math.ceil(faqData.length / 2)}
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  marginBottom: "15px",
                  transition: "all 0.3s ease",
                }}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapseRight${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapseRight${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapseRight${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushRight"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for accordion */}
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

// Define PropTypes for validation
FAQSection.propTypes = {
  faqData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQSection;
