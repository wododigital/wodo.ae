import React, { useEffect, useState } from "react";
import "./style.css";
import ElementorButton from "../../../components/elementorButton/elementorButton";
// import BaseURL from "../../../components/other/BaseURL";

function ProjectTabs() {
  useEffect(() => {
    // Activate Bootstrap tabs
    var tabTriggerList = document.querySelectorAll("#v-pills-tab span");
    tabTriggerList.forEach(function (tabTrigger) {
      tabTrigger.addEventListener("click", function (event) {
        event.preventDefault();
        var tabPane = document.querySelector(this.getAttribute("href"));
        var activeTab = document.querySelector(".tab-pane.active.show");
        activeTab.classList.remove("active", "show");
        tabPane.classList.add("active", "show");
      });
    });
  }, []);

  const [activeTabState, setActiveTabState] = useState(1);

  return (
    <>
      <div className="">
        <div
          className="container py-md-5 py-3 "
          style={{ position: "relative", zIndex: 10 }}
        >
          {/* <div className="row">
                    <div className="col">
                        <h2 className='Heading_title-black'>PROJECTOPEDIA: <br/>EXPLORE OUR DIGITAL WONDERS</h2>
                    </div>
                </div> */}

          <div style={{ display: "flex", position: "relative" }}>
            <div>
              {/* dash */}
            </div>

            <div>
              <h1 className="gf_h2">
              Innovative Digital Marketing, <br/>Web Design & Development <br/>Services for Business Growth
              </h1>
              <p className="gf_text py-2 home-p ">
              At WODO, we are more than just a service provider—we are your strategic partner in the digital landscape. Our mission is to empower businesses with the tools and expertise needed to thrive online.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <span
                  className={
                    activeTabState === 1
                      ? "nav-link element_tab_button element_tab_button-active"
                      : "nav-link element_tab_button"
                  }
                  onClick={() => setActiveTabState(1)}
                  id="v-pills-tab1-tab"
                  data-toggle="pill"
                  href="#v-pills-tab1"
                  role="tab"
                  aria-controls="v-pills-tab1"
                  aria-selected="true"
                >
                  {" "}
                  <div
                    className="gf_text"
                    style={{ position: "relative", display: "flex" }}
                  >
                    {" "}
                    <div className="tab_num">01</div> <h2 className="gf_text">Visual Versatility</h2>{" "}
                  </div>{" "}
                </span>
                <span
                  className={
                    activeTabState === 2
                      ? "nav-link element_tab_button element_tab_button-active"
                      : "nav-link element_tab_button"
                  }
                  onClick={() => setActiveTabState(2)}
                  id="v-pills-tab2-tab"
                  data-toggle="pill"
                  href="#v-pills-tab2"
                  role="tab"
                  aria-controls="v-pills-tab2"
                  aria-selected="false"
                >
                  <div
                    className="gf_text"
                    style={{ position: "relative", display: "flex" }}
                  >
                    {" "}
                    <div className="tab_num">02</div> <h2 className="gf_text">Brand Boldness</h2>{" "}
                  </div>
                </span>
                <span
                  className={
                    activeTabState === 3
                      ? "nav-link element_tab_button element_tab_button-active"
                      : "nav-link element_tab_button"
                  }
                  onClick={() => setActiveTabState(3)}
                  id="v-pills-tab3-tab"
                  data-toggle="pill"
                  href="#v-pills-tab3"
                  role="tab"
                  aria-controls="v-pills-tab3"
                  aria-selected="false"
                >
                  <div
                    className="gf_text"
                    style={{ position: "relative", display: "flex" }}
                  >
                    {" "}
                    <div className="tab_num">03</div> <h2 className="gf_text">Digital Chronicle</h2>{" "}
                  </div>
                </span>
                <span
                  className={
                    activeTabState === 4
                      ? "nav-link element_tab_button element_tab_button-active"
                      : "nav-link element_tab_button"
                  }
                  onClick={() => setActiveTabState(4)}
                  id="v-pills-tab4-tab"
                  data-toggle="pill"
                  href="#v-pills-tab4"
                  role="tab"
                  aria-controls="v-pills-tab4"
                  aria-selected="false"
                >
                  <div
                    className="gf_text"
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className="tab_num">04</div> <h2 className="gf_text">Content Kaleidoscope</h2>{" "}
                  </div>
                </span>
              </div>
            </div>
            <div className="col-md">
              <div
                className="tab-content"
                id="v-pills-tabContent"
                style={{ transition: "0.5s" }}
              >
                <div
                  className="tab-pane fade show active"
                  id="v-pills-tab1"
                  role="tabpanel"
                  aria-labelledby="v-pills-tab1-tab"
                >
                  <div className="row">
                    <div>
                      {/* <img
                        className="block_image"
                        src="https://wodo.digital/media/2021/10/Hombale-Films-Main.webp"
                        alt="Digital Marketing Agency For Startups"
                      />
                      <img
                        className="block_image"
                        src="https://wodo.digital/media/2021/10/Mydigitalstrawberry-main.webp"
                        alt="Digital Marketing Agency For Startups"
                      />
                      <img
                        className="block_image"
                        src="https://wodo.digital/media/2021/10/Biomedit-main-e1648550381707.webp"
                        alt="Digital Marketing Agency For Startups"
                      />
                      <img
                        className="block_image"
                        src="https://wodo.digital/media/2021/10/Akriti-Kakar-Main-1.webp"
                        alt="Digital Marketing Agency For Startups"
                      /> */}
                      <img 
                      className="bloc_image"
                      src="https://wodo.digital/media/home/visual-versatality.webp" 
                      alt="Digital Marketing Agency For Startups"
                       />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-tab2"
                  role="tabpanel"
                  aria-labelledby="v-pills-tab2-tab"
                >
                  <div className="row">
                    {/* <div className="col">
                      <div style={{ position: "relative" }}>
                        <img
                          className="block_image"
                          src="https://wodo.digital/media/2022/03/White-Wisteria-Long-Tab-Banner.jpg"
                          alt="Digital Marketing Agency For Startups"
                        />
                        <img
                          className="block_image child"
                          style={{
                            position: "absolute",
                            top: "20px",
                            left: "210px",
                          }}
                          src="https://wodo.digital/media/2022/03/WODO-Branding-Tab-3.jpg"
                          alt="Digital Marketing Agency For Startups"
                        />
                      </div>
                    </div>

                    <div className="col" style={{ position: "relative" }}>
                      <img
                        className="block_image"
                        src="https://wodo.digital/media/2022/03/WODO-The-Match-Box-Branding.jpg"
                        alt="Digital Marketing Agency For Startups"
                      />
                      <img
                        className="block_image child"
                        style={{
                          position: "absolute",
                          bottom: "-10px",
                          left: "20px",
                        }}
                        src="https://wodo.digital/media/2022/03/WODO-Branding-Tab-2.jpg"
                        alt="Digital Marketing Agency For Startups"
                      />
                    </div> */}
                    <div className="col">
                    <img 
                      className="bloc_image"
                      src="https://wodo.digital/media/home/brand-boldness.webp" 
                      alt="Digital Marketing Agency For Startups"
                       />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-tab3"
                  role="tabpanel"
                  aria-labelledby="v-pills-tab3-tab"
                >
                  <div className="row">
                    <div className="col">
                    <img 
                      className="bloc_image"
                      src="https://wodo.digital/media/home/digital-chronicle.webp" 
                      alt="Digital Marketing Agency For Startups"
                       />
                      {/* <div className="" style={{ height: "450px" }}>
                        <div style={{ position: "relative" }}>
                          <img
                            className="phone_screenshot"
                            src="https://wodo.digital/media/2021/09/WODO-Tankerwala-App-Download-ads-4.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image insta_post_1"
                            src="https://wodo.digital/media/2021/09/WODO-Tankerwala-SM-7.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image insta_post_2"
                            src="https://wodo.digital/media/2021/09/WODO-Native-Angadi-SM-2.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image insta_post_3"
                            src="https://wodo.digital/media/2021/09/WODO-Ayushyaa-SM-4.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-tab4"
                  role="tabpanel"
                  aria-labelledby="v-pills-tab4-tab"
                >
                  <div className="row">
                    <div className="col">
                      {/* <div className="verticle_center">
                        <div
                          className=""
                          style={{ position: "relative", textAlign: "center" }}
                        >
                          <img
                            className="block_image"
                            style={{ width: "250px" }}
                            src="https://wodo.digital/media/2022/03/Content-Management-Wodo-1.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image"
                            style={{ width: "350px" }}
                            src="https://wodo.digital/media/2022/03/Content-Management-Wodo-2.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image"
                            style={{ width: "250px" }}
                            src="https://wodo.digital/media/2022/03/Content-Management-Wodo-4.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image"
                            style={{ width: "350px" }}
                            src={`${BaseURL}/media/2022/03/WODO-SMM-Image-1.jpg`}
                            alt="Digital Marketing Agency For Startups"
                          />
                          <img
                            className="block_image"
                            style={{ width: "350px" }}
                            src="https://wodo.digital/media/2022/03/Content-Management-Wodo-3.jpg"
                            alt="Digital Marketing Agency For Startups"
                          />
                        </div>
                      </div> */}
                      <img 
                      className="bloc_image"
                      src="https://wodo.digital/media/home/content-kaleidoscope.webp" 
                      alt="Digital Marketing Agency For Startups"
                       />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-md-3 pb-2">
        <div className="row pb-md-5 pb-2">
          <div className="col pb-md-5 pb-2">
            <ElementorButton URL="/projects" text="VIEW ALL PROJECTS" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectTabs;
