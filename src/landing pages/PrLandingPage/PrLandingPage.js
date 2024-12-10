import React, { useEffect, useState, useRef } from "react";
import "./PrLandingPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BaseURL from "../../components/other/BaseURL";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

// Header

function PrHeader() {
  return (
    <>
      <div className="pr-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={`${BaseURL}/media/2021/05/MicrosoftTeams-image-1.png`}
                className="pr-logo"
                alt="end-to-end PR publication and promotion "
              />
            </div>
            <div className="col text-end">
              <h2 className="pr-header-text">PRESS RELEASE</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// Hero Section

function PrHero(props) {
  const images = {
    TimesNow: `${BaseURL}/media/2024/02/Times-Now.png`,
    TOI: `${BaseURL}/media/2024/02/TOI-Logo.png`,
    IndiaToday: `${BaseURL}/media/2024/02//India-Today-Logo.png`,
    HindustanTimes: `${BaseURL}/media/2024/02/Hindustan-Times-Logo.jpg`,
    YourStory: `${BaseURL}/media/2024/02/Your-Story-Logo.jpg`,
    CNNNews: `${BaseURL}/media/2024/02/CNN-News-Logo.jpg`,
    Forbes: `${BaseURL}/media/2024/02/Forbes.png`,
    Entrepreneur: `${BaseURL}/media/2024/02/Entrepreneur-Logo.png`,
    FirstPost: `${BaseURL}/media/2024/02/First-Post-Logo.png`,
    KhaleejTimes: `${BaseURL}/media/2024/02/Khaleej-Times-Logo.png`,
    NBC: `${BaseURL}/media/2024/02/12.png`,
  };
  return (
    <>
      <div className="pr-hero position-relative">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-md-6 d-flex align-items-end flex-wrap position-relative">
              <h1 className="pr-h1 w-75">Make Headlines, Make History</h1>
              <p className="pr-text w-75 pt-2">
                Targeted Press Release to Reach New audience, Strengthen
                branding and Increase sales potential.
              </p>
              <div className="pr-bg-1"></div>
              <button className="pr-btn mt-5 w-sm-50" onClick={props.handler}>
                Make The News
              </button>
            </div>
            <div className="col-md-6 position-relative py-3">
              <span className="pr-animate-line-1"></span>
              <span className="pr-animate-line-2"></span>
              <span className="pr-animate-line-3"></span>
              <span className="pr-animate-line-4"></span>
              <span className="pr-animate-line-5"></span>
              <span className="pr-animate-line-6"></span>
              <div className="position-relative z-1">
                <div className="">
                  <div className="text-center">
                    <div className="pr-animation-img-bg w-25">
                      <div className="pr-flip-box">
                        <div className="pr-flip-box-inner">
                          <div className="pr-flip-box-front ">
                            <img
                              src={images.TimesNow}
                              alt="times-now"
                              className="pr-animation-img"
                            />
                          </div>
                          <div className="pr-flip-box-back ">
                            <img
                              src={images.NBC}
                              alt="times-now"
                              className="pr-animation-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=""></div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="text-center">
                      <div className="pr-animation-img-bg">
                        <div className="pr-flip-box">
                          <div className="pr-flip-box-inner">
                            <div className="pr-flip-box-front ">
                              <img
                                src={images.TimesNow}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                            <div className="pr-flip-box-back ">
                              <img
                                src={images.TOI}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" "></div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <div className="pr-animation-img-bg">
                        <div className="pr-flip-box">
                          <div className="pr-flip-box-inner">
                            <div className="pr-flip-box-front ">
                              <img
                                src={images.HindustanTimes}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                            <div className="pr-flip-box-back ">
                              <img
                                src={images.IndiaToday}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" "></div>
                  </div>
                </div>
                <div className="text-center position-relative">
                  <div className="text-white text-center border border-white mx-auto py-3 rounded-3 news-name ">
                    YOUR NEWS
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="text-center">
                      <div className="pr-animation-img-bg">
                        <div className="pr-flip-box">
                          <div className="pr-flip-box-inner">
                            <div className="pr-flip-box-front ">
                              <img
                                src={images.YourStory}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                            <div className="pr-flip-box-back ">
                              <img
                                src={images.CNNNews}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <div className="pr-animation-img-bg">
                        <div className="pr-flip-box">
                          <div className="pr-flip-box-inner">
                            <div className="pr-flip-box-front ">
                              <img
                                src={images.Forbes}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                            <div className="pr-flip-box-back ">
                              <img
                                src={images.Entrepreneur}
                                alt="times-now"
                                className="pr-animation-img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
                <div className="">
                  <div className="text-center">
                    <div className="pr-animation-img-bg w-25">
                      <div className="pr-flip-box">
                        <div className="pr-flip-box-inner">
                          <div className="pr-flip-box-front ">
                            <img
                              src={images.FirstPost}
                              alt="times-now"
                              className="pr-animation-img"
                            />
                          </div>
                          <div className="pr-flip-box-back ">
                            <img
                              src={images.KhaleejTimes}
                              alt="times-now"
                              className="pr-animation-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-bg-2"></div>
      </div>
    </>
  );
}

// Top Firm Section

function TopFirm() {
  return (
    <>
      <div className="container py-5 my-xxl-5">
        <div className="row d-flex justify-content-center my-xxl-5">
          <div className="col">
            <h2 className="text-center pr-h2 pr-h2-bg">
              We are INDIA' S Top PR firm{" "}
            </h2>
            <div className="row d-flex justify-content-center justify-content-sm my-xxl-5 align-items-center">
              <div className="col-4 col-xxl-3 col-xl-3 col-sm-4">
                <div className="pr-counter">
                  <p className="counter-number">125K+</p>
                  <p className="counter-text">Indian Media Outlets</p>
                </div>
              </div>
              <div className="col-4 col-xxl-3 col-xl-3 col-sm-4">
                <div className="pr-counter">
                  <p className="counter-number">90K+</p>
                  <p className="counter-text">Global Media Partners</p>
                </div>
              </div>
              <div className="col-4 col-xxl-3 col-xl-3 col-sm-4">
                <div className="pr-counter">
                  <p className="counter-number">45K+</p>
                  <p className="counter-text">Global Media Partners</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center my-xxl-3 w-xxl-50 mx-auto flex-sm-wrap">
              {/* col-4 col-sm-4 col-xxl-1 col-xl-1  */}
              <div className="">
                <img
                  src={`${BaseURL}/media/2024/02/WODO-Redbull-PR-Logo.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img"
                />
              </div>
              <div className=" ">
                <img
                  src={`${BaseURL}/media/2024/02/WODO-Tata-PR-Logo.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img"
                />
              </div>
              <div className=" ">
                <img
                  src={`${BaseURL}/media/2024/02/WODO-MBA-Chai-Wala-PR-Logo.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img"
                />
              </div>
              <div className=" ">
                <img
                  src={`${BaseURL}/media/2024/02/3.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img"
                />
              </div>
              <div className=" ">
                <img
                  src={`${BaseURL}/media/2024/02/WODO-Amul-PR-Logo.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img"
                />
              </div>
              <div className=" ">
                <img
                  src={`${BaseURL}/media/2024/02/WODO-ITC-PR-Logo.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Moving Text

function MovingText() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col wrapper py-2 m-0">
            <p className="textw m-0">
              ・Press Release Delivered in just<b> 7 DAYS</b>・Press Release
              Delivered in just<b> 7 DAYS</b>・Press Release Delivered in just
              <b> 7 DAYS</b>・Press Release Delivered in just<b> 7 DAYS</b>
              ・Press Release Delivered in just<b> 7 DAYS</b>・Press Release
              Delivered in just<b> 7 DAYS</b>・Press Release Delivered in just
              <b> 7 DAYS</b>・Press Release Delivered in just<b> 7 DAYS</b>
              ・Press Release Delivered in just<b> 7 DAYS</b>・Press Release
              Delivered in just<b> 7 DAYS</b>・Press Release Delivered in just
              <b> 7 DAYS</b>・Press Release Delivered in just<b> 7 DAYS</b>
              ・Press Release Delivered in just
              <b> 7 DAYS</b>・Press Release Delivered in just<b> 7 DAYS</b>
              ・Press Release Delivered in just<b> 7 DAYS</b>・Press Release
              Delivered in just<b> 7 DAYS</b>・Press Release Delivered in just
              <b> 7 DAYS</b>・Press Release Delivered in just<b> 7 DAYS</b>
              ・Press Release Delivered in just<b> 7 DAYS</b>・Press Release
              Delivered in just<b> 7 DAYS</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Top Publishers

function TopPublishers() {
  return (
    <>
      <div
        className="container py-5 position-relative my-xxl-5"
        id="publications"
      >
        <div className="row">
          <div className="col text-center">
            <div className="text-start ms-xxl-5">
              {" "}
              <img
                src={`${BaseURL}/media/2024/02/Doodle-WODO-PR-2-min.png`}
                alt="star"
                className="pr-img-3"
              />
            </div>
            <h2 className="text-center pr-h2 pb-3">
              We work with Top Publishers across the WORLD
            </h2>
            <div className="row d-flex justify-content-center pt-3">
              <div className="col-3 col-sm-3 col-xxl-2 col-xl-2 ">
                <img
                  src={`${BaseURL}/media/2024/02/India-Flag.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img-2"
                />
              </div>
              <div className="col-3 col-sm-3 col-xxl-2 col-xl-2">
                <img
                  src={`${BaseURL}/media/2024/02/UK-Flag.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img-2"
                />
              </div>
              <div className="col-3 col-sm-3 col-xxl-2 col-xl-2">
                <img
                  src={`${BaseURL}/media/2024/02/USA-Flag.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img-2"
                />
              </div>
              <div className="col-3 col-sm-3 col-xxl-2 col-xl-2">
                <img
                  src={`${BaseURL}/media/2024/02/UAE-Flag.jpg`}
                  alt="end-to-end PR publication and promotion "
                  className="pr-img-2"
                />
              </div>
            </div>
            <img
              src={`${BaseURL}/media/2024/02/PR-News-Channels-Collage-WODO-min.jpg`}
              alt="end-to-end PR publication and promotion "
              className="img-fluid w-75 w-sm-100"
            />
          </div>
        </div>
        <div className="pr-bg-3"></div>
      </div>
    </>
  );
}

// Power of press

function PowerOfPress(props) {
  const svg = `<svg version="1.1" id="fi_27223" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 163.861 163.861" fill="#fff" xml:space="preserve">
    <g>
      <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
        c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"></path>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    </svg>`;
  //   const [text, setText] = useState(
  //     "Press Play on Success - Press Play on Success -"
  //   );

  const text = "Press Play on Success - Press Play on Success -";

  const transformText = (inputText) => {
    return inputText.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 7.6}deg)` }}>
        {char}
      </span>
    ));
  };

  return (
    <>
      <div className="pwp py-5">
        <div className="container">
          <div className=" py-2 ">
            <div className="">
              <h2 className="pr-light pr-h2 text-center pr-h2-bg pr-h2-bg-2">
                Power of Persuasive Press Releases
              </h2>
            </div>
          </div>

          <div className="row py-5 px-0">
            <div className="col-12 col-sm-12 col-xxl-6 col-xl-6 ">
              <div className="circle">
                <div className="play_btn">
                  <div dangerouslySetInnerHTML={{ __html: svg }} />
                </div>
                <div className="rotate-text">
                  <p> {transformText(text)}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-xl-6">
              <div className="mx-sm-auto">
                <div className="pr-icon-list py-2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGVsbGlwc2UgY3g9IjI1NiIgY3k9IjI1NiIgcng9IjI1NiIgcnk9IjI1NS44MzIiIHN0eWxlPSIiIGZpbGw9IiNmOGE5MjUiIGRhdGEtb3JpZ2luYWw9IiMzMmJlYTYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvZWxsaXBzZT48cGF0aCBkPSJtMjM1LjQ3MiAzOTIuMDgtMTIxLjA0LTk0LjI5NiAzNC40MTYtNDQuMTY4IDc0LjMyOCA1Ny45MDQgMTIyLjY3Mi0xNzcuMDE2IDQ2LjAzMiAzMS44ODh6IiBzdHlsZT0iIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    alt="end-to-end PR publication and promotion "
                  />
                  <h4 className="pr-light pr-h4 m-0">
                    Increase Search Traffic
                  </h4>
                </div>
                <div className="pr-icon-list py-2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGVsbGlwc2UgY3g9IjI1NiIgY3k9IjI1NiIgcng9IjI1NiIgcnk9IjI1NS44MzIiIHN0eWxlPSIiIGZpbGw9IiNmOGE5MjUiIGRhdGEtb3JpZ2luYWw9IiMzMmJlYTYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvZWxsaXBzZT48cGF0aCBkPSJtMjM1LjQ3MiAzOTIuMDgtMTIxLjA0LTk0LjI5NiAzNC40MTYtNDQuMTY4IDc0LjMyOCA1Ny45MDQgMTIyLjY3Mi0xNzcuMDE2IDQ2LjAzMiAzMS44ODh6IiBzdHlsZT0iIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    alt="end-to-end PR publication and promotion "
                  />
                  <h4 className="pr-light pr-h4 m-0">
                    Build Authenticity & Credibility
                  </h4>
                </div>
                <div className="pr-icon-list py-2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGVsbGlwc2UgY3g9IjI1NiIgY3k9IjI1NiIgcng9IjI1NiIgcnk9IjI1NS44MzIiIHN0eWxlPSIiIGZpbGw9IiNmOGE5MjUiIGRhdGEtb3JpZ2luYWw9IiMzMmJlYTYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvZWxsaXBzZT48cGF0aCBkPSJtMjM1LjQ3MiAzOTIuMDgtMTIxLjA0LTk0LjI5NiAzNC40MTYtNDQuMTY4IDc0LjMyOCA1Ny45MDQgMTIyLjY3Mi0xNzcuMDE2IDQ2LjAzMiAzMS44ODh6IiBzdHlsZT0iIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    alt="end-to-end PR publication and promotion "
                  />
                  <h4 className="pr-light pr-h4 m-0">
                    Boost SEO with PR Backlinks
                  </h4>
                </div>
                <div className="pr-icon-list py-2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGVsbGlwc2UgY3g9IjI1NiIgY3k9IjI1NiIgcng9IjI1NiIgcnk9IjI1NS44MzIiIHN0eWxlPSIiIGZpbGw9IiNmOGE5MjUiIGRhdGEtb3JpZ2luYWw9IiMzMmJlYTYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvZWxsaXBzZT48cGF0aCBkPSJtMjM1LjQ3MiAzOTIuMDgtMTIxLjA0LTk0LjI5NiAzNC40MTYtNDQuMTY4IDc0LjMyOCA1Ny45MDQgMTIyLjY3Mi0xNzcuMDE2IDQ2LjAzMiAzMS44ODh6IiBzdHlsZT0iIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    alt="end-to-end PR publication and promotion "
                  />
                  <h4 className="pr-light pr-h4 m-0">
                    Impact Purchase Decisions
                  </h4>
                </div>
                <div className="pr-icon-list py-2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGVsbGlwc2UgY3g9IjI1NiIgY3k9IjI1NiIgcng9IjI1NiIgcnk9IjI1NS44MzIiIHN0eWxlPSIiIGZpbGw9IiNmOGE5MjUiIGRhdGEtb3JpZ2luYWw9IiMzMmJlYTYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvZWxsaXBzZT48cGF0aCBkPSJtMjM1LjQ3MiAzOTIuMDgtMTIxLjA0LTk0LjI5NiAzNC40MTYtNDQuMTY4IDc0LjMyOCA1Ny45MDQgMTIyLjY3Mi0xNzcuMDE2IDQ2LjAzMiAzMS44ODh6IiBzdHlsZT0iIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    alt="end-to-end PR publication and promotion "
                  />
                  <h4 className="pr-light pr-h4 m-0">Reach Fresh Audiences</h4>
                </div>
                <div className="pr-icon-list py-2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGVsbGlwc2UgY3g9IjI1NiIgY3k9IjI1NiIgcng9IjI1NiIgcnk9IjI1NS44MzIiIHN0eWxlPSIiIGZpbGw9IiNmOGE5MjUiIGRhdGEtb3JpZ2luYWw9IiMzMmJlYTYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvZWxsaXBzZT48cGF0aCBkPSJtMjM1LjQ3MiAzOTIuMDgtMTIxLjA0LTk0LjI5NiAzNC40MTYtNDQuMTY4IDc0LjMyOCA1Ny45MDQgMTIyLjY3Mi0xNzcuMDE2IDQ2LjAzMiAzMS44ODh6IiBzdHlsZT0iIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    alt="end-to-end PR publication and promotion "
                  />
                  <h4 className="pr-light pr-h4 m-0">
                    Generate High-Quality Leads
                  </h4>
                </div>
              </div>
              <div className="text-sm-center text-xxl-start">
                <button className=" mt-5 pr-btn" onClick={props.handler}>
                  Download Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// PR Crafter

// Top Firm Section

function PrCrafter(props) {
  return (
    <>
      <div className="container pt-xxl-5 position-relative" id="pricing">
        <div className="row d-flex justify-content-center">
          <div className="col">
            <h2 className="text-center pr-h2 pr-h2-bg pr-h2-bg-3">
              PR Crafter For
            </h2>
            <div className="d-flex justify-content-xxl-evenly justify-content-sm my-4">
              <div className="pr-counter pr-box-width">
                <div className="d-xxl-flex align-items-center gap-2 ">
                  <div className="pr-sm-mx-auto">
                    <img
                      src={`${BaseURL}/media/2024/02/Startup-icon-WODO-PR-min.png`}
                      alt="Startup Company"
                      className="pr-img-3"
                    />
                  </div>
                  <div className="pr-craft-text ">
                    Startup <br /> Company
                  </div>
                </div>
              </div>
              <div className="pr-counter pr-box-width">
                <div className="d-xxl-flex align-items-center gap-2">
                  <div className="pr-sm-mx-auto">
                    {" "}
                    <img
                      src={`${BaseURL}/media/2024/02/Product-Icon-WODO-PR-min.png`}
                      alt="Startup Company"
                      className="pr-img-3"
                    />
                  </div>
                  <p className="pr-craft-text">
                    Product <br /> Brands
                  </p>
                </div>
              </div>
              <div className="pr-counter pr-box-width">
                <div className="d-xxl-flex align-items-center gap-2">
                  <div className="pr-sm-mx-auto">
                    <img
                      src={`${BaseURL}/media/2024/02/Corporate-Icon-WODO-PR-min.png`}
                      alt="Startup Company"
                      className="pr-img-3"
                    />
                  </div>
                  <p className="pr-craft-text">
                    Corporate <br /> Company
                  </p>
                </div>
              </div>

              <div className="pr-counter pr-box-width">
                <div className="d-xxl-flex align-items-center gap-2">
                  <div className="pr-sm-mx-auto">
                    <img
                      src={`${BaseURL}/media/2024/02/Personal-Branding-Icon-WODO-PR-min.png`}
                      alt="Startup Company"
                      className="pr-img-3"
                    />
                  </div>
                  <p className="pr-craft-text">
                    Corporate <br /> Company
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="digital-pr-box">
                <div className="row digital-pr-border pr-box-sm-text">
                  <div className="col">Digital PR</div>
                  <div className="col text-end">2024</div>
                </div>
                <div className="text-center digital-pr-border pr-box-heading">
                  OUR PACKAGE
                </div>
                <div className=" digital-pr-border px-md-4 px-2">
                  <div className="pr-box-sm-text text-center">
                    We provide you with end-to-end PR publication and promotion
                    material for you to use.
                  </div>
                  <div className="pr-box-content-list">
                    <div className="d-flex flex-wrap justify-content-start align-items-center pb-md-0 pb-2">
                      <i class="fas fa-newspaper fs-4 pe-md-3 pe-2"></i>
                      <p className="pr-box-content-list-text fw-medium">
                        PR Article Writing
                      </p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start align-items-center pb-md-0 pb-2">
                      <i class="fas fa-edit fs-4 pe-md-3 pe-2"></i>
                      <p className="pr-box-content-list-text fw-medium">
                        LinkedIn Write-up for Posting
                      </p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start align-items-center pb-md-0 pb-2">
                      <i class="fas fa-play-circle fs-4 pe-md-3 pe-2"></i>
                      <p className="pr-box-content-list-text fw-medium">
                        PR Outreach Video
                      </p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start align-items-center pb-md-0 pb-2">
                      <i class="far fa-file-pdf fs-4 pe-md-3 pe-2"></i>
                      <p className="pr-box-content-list-text fw-medium">
                        PR Report
                      </p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start align-items-center pb-md-0 pb-2">
                      <i class="fas fa-chart-line fs-4 pe-md-3 pe-2"></i>
                      <p className="pr-box-content-list-text fw-medium">
                        PR Promotions (as per plan)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-2 text-center">
                  <button className="pr-box-btn" onClick={props.handler}>
                    Download Package <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pr-bg-4"></div>
      </div>
    </>
  );
}

function CaseStudies() {
  const prCaseStudies = [
    {
      img: `${BaseURL}/media/2024/02/TAT-Case-Study-min.jpg`,
      url: "https://www.financialexpress.com/business/brandwagon-tata-salt-launches-tez-baccho-se-hi-toh-tez-desh-banta-hain-campaign-3101206",
    },
    {
      img: `${BaseURL}/media/2024/02/Sleep-Company-Case-Study-min.jpg`,
      url: "https://www.thehindu.com/brandhub/pr-release/the-sleep-company-introduces-cutting-edge-sleep-innovations-elev8-smart-recliner-bed-and-smart-ortho-royale-mattress/article67122874.ece",
    },
    {
      img: `${BaseURL}/media/2024/02/Phone-Pe-Case-Study-min.jpg`,
      url: "https://www.cnbctv18.com/startup/phonepe-launches-its-own-stockbroking-platform-app-to-be-called-sharemarket-sameer-nigam-17674251.htm",
    },
    {
      img: `${BaseURL}/media/2024/02/JITO-CASE-STUDY-min.jpg`,
      url: "https://www.deccanherald.com/brandspot/pr-spot/gujarat-home-minister-inaugurates-jito-ratnamani-hostel-first-common-hostel-for-4-jain-communities-in-ahmedabad-1208236.html",
    },
    {
      img: `${BaseURL}/media/2024/02/MF-Case-Study-min.jpg`,
      url: "https://theprint.in/ani-press-releases/how-mukunda-foods-is-helping-restaurants-function-smoothly-in-the-current-times/709829/",
    },
    {
      img: `${BaseURL}/media/2024/02/MBA-CHAI-WALA-CASE-STUDY-min.jpg`,
      url: "https://www.news18.com/business/rs-8000-to-rs-30-crore-business-tracing-the-success-story-of-mba-chaiwala-founder-prafull-billore-8584736.html",
    },
    {
      img: `${BaseURL}/media/2024/02/Malabar-Gold-Case-Study-min.jpg`,
      url: "https://news.abplive.com/brand-wire/celebrate-akshaya-tritiya-and-bring-home-prosperity-with-malabar-gold-and-diamonds-1597116",
    },
  ];

  return (
    <>
      <div className="pwp py-5 position-relative" id="contact">
        <div className="container">
          <div className=" py-2 ">
            <div className="">
              <h2 className="pr-light pr-h2 text-center">Case Studies</h2>
            </div>
          </div>
          <div className="py-3">
            {/* <div className="text-center">
              <img
                className="case-studies-img"
                src={`${BaseURL}/media/2024/02/Malabar-Gold-Case-Study-min.jpg`}
                alt="case studies"
              />
              <img
                className="case-studies-img"
                src={`${BaseURL}/media/2024/02/Malabar-Gold-Case-Study-min.jpg`}
                alt="case studies"
              />
              <img
                className="case-studies-img"
                src={`${BaseURL}/media/2024/02/Malabar-Gold-Case-Study-min.jpg`}
                alt="case studies"
              />
            </div> */}
            <ImageSlider images={prCaseStudies} />
          </div>
        </div>
        <div className="pr-bg-5"></div>
      </div>
    </>
  );
}

function Discover() {
  return (
    <>
      <div className="py-5 my-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md pr-h2 py-4 pr-sm-mx-auto">
              Discover why Digital Press Releases delivers the highest ROI in
              marketing
            </div>
            <div className="col-md">
              <div className="pr-discover-img">
                <img
                  src={`${BaseURL}/media/2024/02/CTA-Banner-WODO-PR-2-min.png`}
                  alt="end-to-end PR publication and promotion "
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pr-bg-2 pr-bg-6"></div>
      </div>
    </>
  );
}

// function ScheduleCall(){
//     return(
//         <>
//          <div className="pwp py-5 ">
//             <div className="container mt-5">
//                 <div className=" py-2 ">
//                     <div className="">
//                         <h2 className='pr-light pr-h2 text-center'>Schedule A Call for PR</h2>
//                     </div>
//                     <div  className="my-3">
//                         <p className='text-white text-center'>Fill in the company details and our team will get in touch with you shortly!</p>
//                     </div>
//                 </div>
//                 <div className='py-3'>
//                     <div className='text-center my-3'>
//                         <input type='text' placeholder='Name' className='pr-input'/>
//                     </div>
//                     <div className='text-center my-3'>
//                         <input type='text' placeholder='Company Name' className='pr-input'/>
//                     </div>
//                     <div className='text-center my-3'>
//                         <input type='text' placeholder='Email' className='pr-input'/>
//                     </div>
//                     <div className='text-center my-3'>
//                         <input type='text' placeholder='Mobile' className='pr-input'/>
//                     </div>
//                     <div className='text-center my-3'>
//                         <select className='pr-input'>
//                             <option>PR Goals</option>
//                             <option>Brand Awareness</option>
//                             <option>Product Lunch</option>
//                             <option>Personal Brand</option>
//                             <option>Lead Generation</option>
//                         </select>
//                     </div>
//                     <div className='text-center my-3'>
//                         <button className='pr-btn pr-input'>Download Package</button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

function ScheduleCall(props) {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    services: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();

    axios
      .put(
        "https://server-demo.wodo.digital/pr-landing-page/pr-query",
        formData
      )
      .then((res) => {
        // console.log(res);
        if (res.data.data.status === "success") {
          navigate("/pr-thank-you");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="pwp py-5" ref={props.scheduleRef} id="form">
        <div className="container">
          <div className="py-2">
            <div className="">
              <h2 className="pr-light pr-h2 text-center">
                Schedule A Call for PR
              </h2>
            </div>
            <div className="my-3">
              <p className="text-white text-center">
                Fill in the company details and our team will get in touch with
                you shortly!
              </p>
            </div>
          </div>
          <div className="py-3">
            <form onSubmit={formHandler}>
              <div className="text-center my-3">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  className="pr-input"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className="text-center my-3">
                <input
                  type="text"
                  placeholder="Company Name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={inputHandler}
                  className="pr-input"
                  required
                />
              </div>
              <div className="text-center my-3">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  className="pr-input"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className="text-center my-3">
                <input
                  type="text"
                  placeholder="Mobile"
                  name="phone"
                  value={formData.phone}
                  className="pr-input"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className="text-center my-3">
                <select
                  className="pr-input"
                  name="services"
                  value={formData.services}
                  onChange={inputHandler}
                  required
                >
                  <option value="">Select</option>
                  <option value="PR Goals">PR Goals</option>
                  <option value="Brand Awareness">Brand Awareness</option>
                  <option value="Product Lunch">Product Lunch</option>
                  <option value="Personal Brand">Personal Brand</option>
                  <option value="Lead Generation">Lead Generation</option>
                </select>
              </div>
              <div className="text-center my-3">
                <button type="submit" className="pr-btn pr-input">
                  Download Package
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function PrLandingPage() {
  const scheduleCallRef = useRef(null);
  const handleClick = () => {
    scheduleCallRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#form") {
      const element = document.getElementById("form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#pricing") {
      const element = document.getElementById("pricing");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#publications") {
      const element = document.getElementById("publications");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <PrHeader />
      <PrHero handler={handleClick} />
      <TopFirm />
      <MovingText />
      <TopPublishers />
      <PowerOfPress handler={handleClick} />
      <PrCrafter handler={handleClick} />
      <CaseStudies />
      <Discover />
      <ScheduleCall scheduleRef={scheduleCallRef} />
      <div className="container fixed-icon">
        <div className="row">
          <div className="col">
            <Link
              to="https://api.whatsapp.com/send?phone=918088308781&text=Hi.%20I%27m%20interested%20in%20PR."
              target="_blank"
            >
              <i class="fab fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrLandingPage;
