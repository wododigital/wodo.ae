import "./style.css";
import { Link } from "react-router-dom";

function ElementorButton(props) {
  return (
    // "https://wodo.digital/contact/"
    // Tap Into Talk
    <>
      <div
        className={`elementor-button-wrapper ${
          props.hide === true ? "hide-elementor-btn" : ""
        }`}
      >
        <Link
          className={`${
            props.mode === "dark"
              ? "elementor-button"
              : "elementor-button-light"
          }`}
          to="#"
          onClick={() =>
            window.open(props.URL, "_blank", "noopener noreferrer")
          }
        >
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-icon elementor-align-icon-right">
              <span className="elementor-button-text">{props.text}</span>
              <svg
                className="button_icon_"
                xmlns="http://www.w3.org/2000/svg"
                width="23.5"
                height="23.5"
                viewBox="0 0 23.5 23.5"
              >
                <g transform="translate(-9 -9)">
                  <path
                    d="M10.5,32.5a1.5,1.5,0,0,1-1.061-2.561l20.5-20.5a1.5,1.5,0,1,1,2.121,2.121l-20.5,20.5A1.5,1.5,0,0,1,10.5,32.5Z"
                    transform="translate(0 0)"
                  ></path>
                  <path
                    d="M31,32.5A1.5,1.5,0,0,1,29.5,31V12h-19a1.5,1.5,0,0,1,0-3H31a1.5,1.5,0,0,1,1.5,1.5V31A1.5,1.5,0,0,1,31,32.5Z"
                    transform="translate(0 0)"
                  ></path>
                </g>
              </svg>
            </span>
          </span>
        </Link>
      </div>
    </>
  );
}

export default ElementorButton;
