import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import kgf from "../../media/kgf-wd.png"
import godrej from "../../media/godrej-wd.png";
import bjp from "../../media/BJP-logo-wd.png";
import visago from "../../media/Logos-top-wd.png";
import bcg from "../../media/Logos-top-developers-1-wd.png";
import prk from "../../media/PRK-logo-wd.png";
import right from "../../media/right.svg";
import ismart from "../../media/iSmartApps-UK-e1719465902330.jpg";
import kgf_2 from "../../media/KGF-movie-house-films.jpg";
import native_angadi from "../../media/Ecommerce-web-development-project-Native-Angadi.jpg";
import digital from "../../media/DGTL-India.jpg";
import visago_2 from "../../media/VISAGO-UAE.jpg";
import visiyon from "../../media/Visaiyon.jpg";
import earth from "../../media/earth.svg";
import victory from "../../media/victory.svg";
import AwardsBadge from "../../media/Elementor-Website-Awards-2021.png";
import Lottie from "react-lottie";
import marketing from "../../media/Marketing Lottie.json";
import speed from "../../media/Speed Lottie.json";
import ui from "../../media/UI Lottie.json";
import square from "../../media/Square-WODO.png";
import rectangle from "../../media/Rectangle-WODO.png";
import triangle from "../../media/WODO-Triangle-Dark-Orange.png";
import Slider from "react-slick";
import BaseURL from "../../components/other/BaseURL";

function WebsiteRevenue(props) {
  return (
    <div className="wb-bg-black" id="1">
      <div className="container py-5 position-relative ">
        <div className="box-animation-1">
          <img src={square} alt="box" className="box-animation-img" />
        </div>
        <div className="text-center wb-first-content">
          <h1 className="wb-h1">
            Websites that <span className="spl-text">10X </span> your revenue!
          </h1>
          {/* <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 500 150" fill="#f8a925" preserveAspectRatio="none"><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg>
                        </span>
                    </div> */}
          <p className="wb-p">
            We build technology to acquire customers, automate business and make
            your life simple.
          </p>
          <button className="wb-btn" onClick={props.handler}>
            Talk To Us <img src={right} alt="svg" className="ms-3" />
          </button>
        </div>
        <div className="box-animation-2">
          <img src={triangle} alt="box" className="box-animation-img" />
        </div>
        <div className="my-5">
          <div className="row ">
            <div className="col-4 col-sm-4 col-xxl-2 col-xl-2 d-flex align-items-center">
              <img src={kgf} alt="kgf-wd" className="wb-first-img" />
            </div>
            <div className="col-4 col-sm-4 col-xxl-2 col-xl-2 d-flex align-items-center">
              <img src={godrej} alt="godrej" className="wb-first-img" />
            </div>
            <div className="col-4 col-sm-4 col-xxl-2 col-xl-2 d-flex align-items-center">
              <img src={bjp} alt="bjp" className="wb-first-img" />
            </div>
            <div className="col-4 col-sm-4 col-xxl-2 col-xl-2 d-flex align-items-center">
              <img src={visago} alt="visago" className="wb-first-img" />
            </div>
            <div className="col-4 col-sm-4 col-xxl-2 col-xl-2 d-flex align-items-center">
              <img src={bcg} alt="bcg" className="wb-first-img" />
            </div>
            <div className="col-4 col-sm-4 col-xxl-2 col-xl-2 d-flex align-items-center">
              <img src={prk} alt="prk" className="wb-first-img w-50 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="wb-bg-black" id="2">
      <div className="container pb-5 position-relative ">
        <h1 className="wd-pr-heading">Our Portfolio</h1>
        <div className="box-animation-1 box-animation-3 ">
          <img src={rectangle} alt="box" className="box-animation-img" />
        </div>
        <div className="portfolio-content">
          <div className="row">
            <div className="col-12 col-sm-12 col-xxl-4 col-xl-4 my-2">
              <img src={ismart} alt="iSmartApps" className="wd-portfolio-img" />
              <h3 className="wd-portfolio-h3">iSmartApps</h3>
            </div>
            <div className="col-12 col-sm-12 col-xxl-4 col-xl-4 my-2">
              <img src={kgf_2} alt="KGF-2" className="wd-portfolio-img" />
              <h3 className="wd-portfolio-h3">KGF | Hombale Films</h3>
            </div>
            <div className="col-12 col-sm-12 col-xxl-4 col-xl-4 my-2">
              <img
                src={native_angadi}
                alt="Native-Angadi"
                className="wd-portfolio-img"
              />
              <h3 className="wd-portfolio-h3">The Native Angadi</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-xxl-4 col-xl-4 my-2">
              <img src={digital} alt="digital" className="wd-portfolio-img" />
              <h3 className="wd-portfolio-h3">DGTL India</h3>
            </div>
            <div className="col-12 col-sm-12 col-xxl-4 col-xl-4 my-2">
              <img src={visago_2} alt="visago_2" className="wd-portfolio-img" />
              <h3 className="wd-portfolio-h3">VisaGo</h3>
            </div>
            <div className="col-12 col-sm-12 col-xxl-4 col-xl-4 my-2">
              <img src={visiyon} alt="visiyon" className="wd-portfolio-img" />
              <h3 className="wd-portfolio-h3">Visaiyon</h3>
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <Link to={"/"} className="wd-pr-link">
            View All <img src={right} alt="right" className="ms-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function NumberTalk() {
  return (
    <div className="wb-bg-black">
      <div className="container py-5">
        <h1 className="wd-pr-heading nt-heading">We let the numbers talk</h1>
        <div className="row py-5">
          <div className="col-md">
            <div className="wd-nt-box">
              <div className="row">
                <div className="col-8">
                  <h2 className="wd-nt-h2">200+</h2>
                  <p className="wd-nt-p">
                    Projects Completed across 6 countries
                  </p>
                </div>
                <div className="col-4 text-end">
                  <img src={earth} alt="earth" className="wd-nt-img" />
                </div>
              </div>
            </div>
            <div className="wd-nt-box">
              <div className="row">
                <div className="col-8">
                  <h2 className="wd-nt-h2">20+</h2>
                  <p className="wd-nt-p">
                    Team of passionate and creative people
                  </p>
                </div>
                <div className="col-4 text-end">
                  <img src={victory} alt="victory" className="wd-nt-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div
              className="mt-3"
              style={{ position: "relative", textAlign: "center" }}
            >
              <img
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "120px",
                }}
                src="https://wodo.digital/wp-content/uploads/2022/04/Group-680@2x.png"
                alt=""
              />
              <div className="awards_circle">
                <img
                  className="wd-nt-award"
                  src={AwardsBadge}
                  alt="Digital Marketing Agency For Startups"
                  title="Digital Marketing Agency For Startups"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services(props) {
  var right_svg = `<svg clip-rule="evenodd" fill="#fff" fill-rule="evenodd" height="15" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 28444 28444" width="15" xmlns="http://www.w3.org/2000/svg" id="fi_5054226"><g id="Layer_x0020_1"><path d="m4382 1866h22196v22196h-2490v-17938l-20093 20093-1768-1767 20094-20094h-17939z" fill-rule="nonzero"></path></g></svg>`;
  const icon1 = {
    loop: true,
    autoplay: true,
    animationData: marketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const icon2 = {
    loop: true,
    autoplay: true,
    animationData: speed,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const icon3 = {
    loop: true,
    autoplay: true,
    animationData: ui,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="wb-bg-black">
      <div className="container py-5">
        <h1 className="wd-pr-heading wd-sr-heading">
          We got your covered - E-Commerce, Saas or Custom
        </h1>
        <div className="row">
          <div className="col">
            <div className="wd-sr-box">
              <div className="mb-3 mt-1 amin-svg-box amin-svg-box-1">
                <Lottie options={icon3} width={265} className="lotti-icon" />
              </div>
              <h4 className="wd-sr-h4">DESIGNED TO IMPRESS</h4>
              <p className="wd-sr-p">
                Research Backed UI-UX Customer Centric Design Interactive Design
              </p>
              <div className="mt-4 mb-3">
                <div className="wd-sr-img" onClick={props.handler}>
                  {" "}
                  <span dangerouslySetInnerHTML={{ __html: right_svg }} />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="wd-sr-box">
              <div className="my-3">
                <Lottie options={icon1} width={100} className="lotti-icon" />
              </div>
              <h4 className="wd-sr-h4">DESIGNED TO IMPRESS</h4>
              <p className="wd-sr-p">
                Research Backed UI-UX Customer Centric Design Interactive Design
              </p>
              {/* <img src={right} alr="right-icon" className='wd-sr-img'/> */}
              <div className="mt-4 mb-3">
                <div className="wd-sr-img" onClick={props.handler}>
                  {" "}
                  <span dangerouslySetInnerHTML={{ __html: right_svg }} />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="wd-sr-box">
              <div className="mb-3 amin-svg-box">
                <Lottie
                  options={icon2}
                  width={100}
                  height={150}
                  className="lotti-icon"
                />
              </div>
              <h4 className="wd-sr-h4">DESIGNED TO IMPRESS</h4>
              <p className="wd-sr-p">
                Research Backed UI-UX Customer Centric Design Interactive Design
              </p>
              {/* <img src={right} alr="right-icon" className='wd-sr-img'/> */}
              <div className="mt-4 mb-3">
                <div className="wd-sr-img" onClick={props.handler}>
                  {" "}
                  <span dangerouslySetInnerHTML={{ __html: right_svg }} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Client(props) {
  const slider = React.useRef(null);
  var leftIcon = `<svg width="40" height="40" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;

  var rightIcon = `<svg width="40" height="40" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="wb-bg-black" id="3">
      <div className="container py-5">
        <h1 className="wd-pr-heading wd-cl-heading">Hear from our Clients</h1>

        <div className="position-relative">
          <div className="text-end wd-carousel-btns">
            <button
              className="wd-arrow-btn"
              onClick={() => slider?.current?.slickPrev()}
            >
              {" "}
              <div dangerouslySetInnerHTML={{ __html: leftIcon }} />{" "}
            </button>
            <button
              className="wd-right-icon wd-arrow-btn"
              onClick={() => slider?.current?.slickNext()}
            >
              <div dangerouslySetInnerHTML={{ __html: rightIcon }} />
            </button>
          </div>
          <Slider ref={slider} {...settings}>
            <div>
              <iframe
                className="wd-iframe-vide"
                src="https://www.youtube.com/embed/If9KD8C2Jg4?si=_9Z36asboGVBFRt_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                className="wd-iframe-vide"
                src="https://www.youtube.com/embed/7Kf7lLHRO7A?si=0-1S8IEXpuPUuiMu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                className="wd-iframe-vide"
                src="https://www.youtube.com/embed/H5KFYftAXgQ?si=Tp0G0T3tTUItm-z4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Slider>
        </div>
        <div className="my-5 pt-5">
          <h1 className="wd-cl-heading2">
            Want to start <br /> a project?
          </h1>
          <div className="text-center">
            <button className="wb-btn" onClick={props.handler}>
              Let's Connect <img src={right} alt="svg" className="ms-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientBlock(props) {
  return (
    <>
      <div class="grid-item wd-cliental-border verticle_center">
        <Link to={props.URL}>
          <img className="client_logo" src={props.logo} alt="" />
        </Link>
      </div>
    </>
  );
}

function Clientele() {
    const logos = [
        {
          logo: ""+BaseURL+"/media/2021/10/Hombale-Films-Logo.png",
          URL: "/projects/hombale-films/",
        },
        {
          logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Gandhadagudi-1.png",
          URL: "/projects/gandhadagudi/",
        },
        {
          logo: ""+BaseURL+"/media/2024/04/PRK-logo.png",
          URL: "/projects/gandhadagudi/",
        },
        {
          logo: ""+BaseURL+"/media/2024/04/BKP-logo-.png",
          URL: "/#",
        },
        {
          logo: ""+BaseURL+"/media/2023/04/WODO-Cient-Lenskart.png",
          URL: "/projects/akriti-kakar/",
        },
        {
          logo: ""+BaseURL+"/media/2022/03/Akriti-Kakar.png",
          URL: ""+BaseURL+"/media/2021/10/MDS-Logo.png",
        },
        {
          logo: ""+BaseURL+"/media/2021/10/MDS-Logo.png",
          URL: "/projects/digital-strawberry/",
        },
        {
          logo: ""+BaseURL+"/media/2021/10/iSmartApps-Logo.png",
          URL: "/projects/ismartapps/",
        },
        {
          logo: ""+BaseURL+"/media/2021/10/Tankerwala-Logo.png",
          URL: "/projects/tankerwala/",
        },
        {
          logo: ""+BaseURL+"/media/2023/03/Godrej-Logo.jpg",
          URL: "",
        },
        {
          logo: ""+BaseURL+"/media/2023/12/wakefit-client-logo.jpg",
          URL: "",
        },
        {
          logo: ""+BaseURL+"/media/2023/12/ultraviolette-client-logo.jpg",
          URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/squire-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/kannadatimes-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/interact-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/floomy-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2021/10/Prollox-logo.png",
            URL: "/projects/prollox-solutions/",
        },
        {
            logo: ""+BaseURL+"/media/2021/10/Biomedit-Logo.png",
            URL: "/projects/biomedit/",
        },
        {
            logo: ""+BaseURL+"/media/2021/10/Kahaaniya-Logo.png",
            URL: "/projects/kahaaniya/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/Audley-Remedys-Logo.png",
            URL: "/projects/audley-remedys/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/TCC-Logo.png",
            URL: "/projects/the-clique-club/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/Burj-Logo.png",
            URL: "/projects/burj/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/E-Construct-logo.png",
            URL: "/projects/e-construct/",
          },
          {
            logo: ""+BaseURL+"/media/2024/04/rightcon-logo.png",
            URL: "/projects/rightcon/",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Deev-Realty-1.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Hasiruagro-2.png",
            URL: "/projects/audley-remedys/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/The-native-Angadi-Logo.png",
            URL: "/projects/the-native-angadi/",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-DGTL-1.png",
            URL: "/projects/dgtl-india/",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Leadrat-1.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2024/04/Sea-wonders-logo-2.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-TMB-1.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-TIE-1.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-TLE-1.png",
            URL: "/projects/the-life-engineering/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/CAKN-Logo.png",
            URL: "/projects/sapling-mart-2/",
          }
      ];

  return (
    <div className="wb-bg-white">
      <div className="container py-5">
        <h1 className="wd-pr-heading wd-clent-h1">Our Clientele</h1>
        <div>
          <div class="grid-container wd-grid-container wd-cliental-border">
            <div class="grid-item verticle_center">
              <h3 className="gf_h1" style={{ color: "#1f1f1f" }}>
                180
              </h3>
              Clients
            </div>
            <div class="grid-item wd-cliental-border verticle_center">
              <h3 className="gf_h1" style={{ color: "#1f1f1f" }}>
                6
              </h3>
              Countries
            </div>

            {logos.map((client, index) => (
              <ClientBlock key={index} logo={client.logo} URL={client.URL} />
            ))}

            {/* <ClientBlock logo='https://wodo.digital/wp-content/uploads/2021/10/Hombale-Films-Logo-150x150.png' URL='https://wodo.digital/projects/hombale-films/'/>

                        <ClientBlock logo='https://wodo.digital/wp-content/uploads/2023/04/WODO-Clients-Gandhadagudi-1.png' URL=''/>
                        <ClientBlock logo='https://wodo.digital/wp-content/uploads/2024/04/PRK-logo.png' URL=''/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

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
      .put("https://server-demo.wodo.digital/dev-query/new-query", formData)
      .then((res) => {
        // console.log(res);
        if (res.data.data.status === "success") {
          navigate("/dev-thank-you/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="wb-bg-yellow py-5" ref={props.scheduleRef} id="4">
        <div className="container">
          <div className="py-2">
            <div className="text-center">
              <h2 className="wd-h2 pr-h2 text-black">Quality over Quantity</h2>
            </div>
            <div className="mt-3 text-center">
              <p className="text-black text-center">
                Let’s discuss how we can help you level up your startup!
              </p>
            </div>
          </div>
          <div className="pb-3">
            <form onSubmit={formHandler}>
              <div className="text-center my-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  className="wd-cl-input"
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
                  className="wd-cl-input"
                  required
                />
              </div>
              <div className="text-center my-3">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  className="wd-cl-input"
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
                  className="wd-cl-input"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className="text-center my-3">
                <select
                  className="wd-cl-input"
                  name="services"
                  value={formData.services}
                  onChange={inputHandler}
                  required
                >
                  <option value="">Select</option>
                  <option value="B2B Website">B2B Website</option>
                  <option value="B2C Website">B2C Website</option>
                  <option value="E-Commerce Website">
                    E-Commerce Website{" "}
                  </option>
                  <option value="SaaS Product Design">
                    SaaS Product Design
                  </option>
                  <option value="I am looking for">I am looking for</option>
                </select>
              </div>
              <div className="text-center my-3">
                <button
                  type="submit"
                  className="pr-btn wd-cl-btn pr-input rounded-5"
                >
                  LET'S GET ON A CALL!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function TopDevelopers() {
  const scheduleCallRef = useRef(null);
  const handleClick = () => {
    scheduleCallRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#1") {
      const element = document.getElementById("1");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#2") {
      const element = document.getElementById("2");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#3") {
      const element = document.getElementById("3");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#4") {
      const element = document.getElementById("4");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <WebsiteRevenue handler={handleClick} />
      <Portfolio />
      <NumberTalk />
      <Services handler={handleClick} />
      <Client handler={handleClick} />
      <Clientele />
      <ScheduleCall scheduleRef={scheduleCallRef} />
    </>
  );
}

export default TopDevelopers;
