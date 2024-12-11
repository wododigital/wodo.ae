import React from "react";
import AwardsBadge from "../../../media/Elementor-Website-Awards-2021.png";
import { useScroll, useTransform } from "framer-motion";
import { Title, AnimationBody } from "./style";
import BaseURL from "../../../components/other/BaseURL";

function Awards() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [500, -1500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 470]);

  return (
    <>
      <div className="awardsBackground">
        <div className="container py-3">
          <div className="row py-5">
            <div
              className="col verticle_center centerElements"
              style={{ textAlign: "left", alignItems: "end" }}
            >
              {/* <h3 className='gf_h3 text-light'>
                Award Winning
                <br />
                Design Studio
                </h3> */}
              <div
                style={{ display: "flex", width: "100%", position: "relative" }}
              >
                <div
                  style={{
                    width: "60px",
                    backgroundColor: "#fff",
                    height: 5,
                    marginTop: 5,
                    marginRight: 10,
                    position: "absolute",
                    left: "-65px",
                  }}
                >
                  {/* dash */}
                </div>

                <div>
                  <h2 className="gf_h2 text-light text-start">
                    Award Winning 
                    <br />
                     Design Studio
                  </h2>
                  <p className="gf_text text-light text-start pt-2">
                    Revealing our creative conquests that keep us toe-tapping on
                    the edge!
                  </p>
                </div>
              </div>
              <br />
              {/* <span style={{color: '#F8A925',fontSize: '44px',fontWeight: 600,lineHeight:1}}>
                ELEMENTOR
                <br />
                WEBSITE 2021
                </span> */}
            </div>
            <div className="col-1 verticle_center ">
              <div
                className="hideElementInPhone"
                style={{ width: 3, backgroundColor: "#fff", height: 120 }}
              >
                {/* dash */}
              </div>
            </div>
            <div className="col centerElements" style={{ textAlign: "left" }}>
              <div style={{ position: "relative", textAlign: "center" }}>
                <img
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "120px",
                  }}
                  src={`${BaseURL}/media/2022/04/Group-680@2x.png`}
                  alt=""
                />
                <div className="awards_circle">
                  <img
                    width="265"
                    height="267"
                    src={AwardsBadge}
                    alt="Digital Marketing Agency For Startups"
                    title="Digital Marketing Agency For Startups"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Heading_title">
          <AnimationBody>
            <Title style={{ x: x1 }}>
              UI/UX <span className="wodo_yellow">•</span> LOGOS{" "}
              <span className="wodo_yellow">•</span> WEBSITES{" "}
              <span className="wodo_yellow">•</span> BRAND STRATEGY{" "}
              <span className="wodo_yellow">•</span> CREATIVE CONTENT{" "}
              <span className="wodo_yellow">•</span> UI/UX{" "}
              <span className="wodo_yellow">•</span> LOGOS{" "}
              <span className="wodo_yellow">•</span> WEBSITES{" "}
              <span className="wodo_yellow">•</span> BRAND STRATEGY{" "}
              <span className="wodo_yellow">•</span> CREATIVE CONTENT
            </Title>

            {/* <motion.h1 style={{color: 'white',fontSize: '1em',zIndex: 1,margin: 0,whiteSpace: 'nowrap',marginTop: 'auto',transition: 'all 0.5s infinity', x2}}>Consultation <span className='wodo_yellow'>•</span> Growth Marketing <span className='wodo_yellow'>•</span> Conversion Optimization</motion.h1> */}
            <Title style={{ x: x2 }}>
              Consultation <span className="wodo_yellow">•</span> Growth
              Marketing <span className="wodo_yellow">•</span> Conversion
              Optimization <span className="wodo_yellow">•</span> Consultation{" "}
              <span className="wodo_yellow">•</span> Growth Marketing{" "}
              <span className="wodo_yellow">•</span> Conversion Optimization
            </Title>
          </AnimationBody>
        </div>
      </div>
    </>
  );
}

export default Awards;
