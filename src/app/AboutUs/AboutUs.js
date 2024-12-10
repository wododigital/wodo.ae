import React, { useEffect } from "react";
import "./About_css.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Awards from "../Home/Awards/Awards";
import TeamCarousel from "./TeamSection/TeamCarousel";
import ElementorButton from "../../components/elementorButton/elementorButton";
import RightIcon from "../../media/right-arrow.svg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import BaseURL from "../../components/other/BaseURL";

//Hero Section

function HeroSectionSlider() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1 className="gs_h2">
            THE <br />
            WODOVERSE
          </h1>
          <p className="text-light gf_text about-hero-p">
            At Wodo Digital, we are not just another digital agency; we are your
            strategic partner in the digital landscape. With a blend of
            creativity, technology, and data-driven insights, we craft digital
            experiences that resonate and deliver results.
          </p>
        </div>
      </div>
    </>
  );
}
//Hero Section

// Team Section

function TeamSection() {
  return (
    <>
      <div className="container py-md-5 py-3">
        <h2 className="gs_h2 h2_black">
          OUR <br />
          CREATEAM
        </h2>
        <p className="gf_text w-md-75">
          Ever seen an idea get sketched on a napkin and then built into a
          digital empire? That's just another Tuesday at WODO, where our tribe
          of creative minds and innovative hands turns daydreams into reality.
        </p>
        <p className="gf_text fw-medium w-md-75">
          P.S. We have a resident office dog who dispenses cuddles and
          productivity boosts in equal measure. Just saying
        </p>
        <TeamCarousel />
      </div>
    </>
  );
}

// Team Section

// Story Section

function StorySection() {
  return (
    <>
      <div className="story-section">
        <div className="container py-md-5 py-3">
          <h2 className="gf_h2 gs_h2 h2_black ">
            WODO-PEDIA <br />
            TALES
          </h2>

          <div className="row py-md-5 py-3">
            <div className="col-lg-7 col">
              <h3 className="gf_h5 storysection-h5 w-md-100 d-md-block d-none">
                Where it all started???
              </h3>
              <div className="year-text gf_h3 mt-5 d-md-block d-none">
                <span style={{ color: "#595959" }}>20</span>19
              </div>
              <div className="storysection-h5-mob d-md-none">
                <h3 className="gf_h5 storysection-h5 w-75">
                  Where it all started???
                </h3>
                <div className="year-text-mob gf_h3 w-25 text-end">
                  <span style={{ color: "#595959" }}>20</span>19
                </div>
              </div>
              <p className="gf_text py-2">
                Remember that summer of 2019? Two curious souls met in
                Bangalore, discontent simmering thicker than filter coffee.
                Witnessing bland websites and generic marketing plans, revolt
                brew! WODO was born - the masala dabba of digital, crafting
                unique solutions, hotter than fresh jalebis! We built dreams,
                pixel by pixel, for our underdog heroes -small businesses.
                Bootstrap nights, fueled by filter coffee and grit, bloomed into
                online success stories.
              </p>
            </div>
          </div>
          <div className="row py-md-5 py-3">
            <div className="col-lg-7 col">
              <h3 className="gf_h5 storysection-h5 w-md-100 d-md-block d-none">
                Diving Deep and Dodging Asteroids
              </h3>
              <div className="year-text gf_h3 mt-5 d-md-block d-none">
                <span style={{ color: "#595959" }}>20</span>20
              </div>
              <div className="storysection-h5-mob d-md-none">
                <h3 className="gf_h5 storysection-h5 w-75">
                  Diving Deep and Dodging Asteroids
                </h3>
                <div className="year-text-mob gf_h3 w-25 text-end">
                  <span style={{ color: "#595959" }}>20</span>20
                </div>
              </div>
              <p className="gf_text py-2">
                As the digital ocean churned, WODO dived headfirst, learning,
                testing, and evolving. We weren't afraid to get our hands dirty,
                even when the world got a little bumpy (remember the pandemic?).
                In fact, that's when we really hit the gas - projects tripled,
                teams thrived, and international sails caught the wind, carrying
                us beyond Bangalore's borders.
              </p>
            </div>
          </div>
          <div className="row py-md-5 py-3">
            <div className="col-lg-7 col">
              <h3 className="gf_h5 storysection-h5 w-md-100 d-md-block d-none">
                Awards, Moves, and Movie Magic.
              </h3>
              <div className="year-text gf_h3 mt-5 d-md-block d-none">
                <span style={{ color: "#595959" }}>20</span>21
              </div>
              <div className="storysection-h5-mob d-md-none">
                <h3 className="gf_h5 storysection-h5 w-75">
                  Awards, Moves, and Movie Magic.
                </h3>
                <div className="year-text-mob gf_h3 w-25 text-end">
                  <span style={{ color: "#595959" }}>20</span>21
                </div>
              </div>
              <p className="gf_text py-2">
                Our hard work paid off. We snagged a shiny award, proving our
                digital mojo, and even upgraded our Bangalore digs (comfy
                couches are essential for world domination, you know). But the
                coolest part? We started building our own magic - a tool to help
                small businesses conquer the online universe. And oh yeah, we
                became BFFs with the folks behind KGF (talk about epic!) and
                helped Tankerwala win a unicorn startup battle like champs!
              </p>
            </div>
          </div>
          <div className="row py-md-5 py-3">
            <div className="col-lg-7 col">
              <h3 className="gf_h5 storysection-h5 w-md-100 d-md-block d-none">
                The Power-squads Assembling
              </h3>
              <div className="year-text gf_h3 mt-5 d-md-block d-none">
                <span style={{ color: "#595959" }}>20</span>22
              </div>
              <div className="storysection-h5-mob d-md-none">
                <h3 className="gf_h5 storysection-h5 w-75">
                  The Power-squads Assembling
                </h3>
                <div className="year-text-mob gf_h3 w-25 text-end">
                  <span style={{ color: "#595959" }}>20</span>22
                </div>
              </div>
              <p className="gf_text py-2">
                This year, the WODO crew levelled up. We gathered a dream team
                of growth hackers, creative wizards, and seasoned
                entrepreneurs—they became the go-to gurus for launching
                businesses into the digital stratosphere, their expertise a
                rocket fuel for success stories. But the ride didn't stop there.
                We leveled up our service offerings, launching a content
                production game that turned words into digital empires
              </p>
            </div>
          </div>
          <div className="row py-md-5 py-3">
            <div className="col-lg-7 col">
              <h3 className="gf_h5 storysection-h5 w-md-100 d-md-block d-none">
                We leveled up the awesome factor
              </h3>
              <div className="year-text gf_h3 mt-5 d-md-block d-none">
                <span style={{ color: "#595959" }}>20</span>23
              </div>
              <div className="storysection-h5-mob d-md-none">
                <h3 className="gf_h5 storysection-h5 w-75">
                  We leveled up the awesome factor
                </h3>
                <div className="year-text-mob gf_h3 w-25 text-end">
                  <span style={{ color: "#595959" }}>20</span>23
                </div>
              </div>
              <p className="gf_text py-2">
                Cramped walls? Pah! We traded cramped spaces for a spacious new
                office, welcomed fresh faces to our growing team, and embraced
                the global stage with international clients seeking our
                expertise. But it doesn't stop there - we birthed a
                groundbreaking AI product, dipped our toes into the electrifying
                world of EV, and proudly stepped into the role of digital
                partners for India Pavilion. It's not just about milestones;
                it's about the incredible journey we're on, and we're thrilled
                to share it with you.
              </p>
            </div>
          </div>
          <div className="row py-md-5 py-3">
            <div className="col-lg-7 col">
              <h3 className="gf_h5 storysection-h5 w-md-100 d-md-block d-none">
                The Narrative Continues...
              </h3>
              <div className="year-text gf_h3 mt-5 d-md-block d-none">
                <span style={{ color: "#595959" }}>20</span>24
              </div>
              <div className="storysection-h5-mob d-md-none">
                <h3 className="gf_h5 storysection-h5 w-75">
                  The Narrative Continues...
                </h3>
                <div className="year-text-mob gf_h3 w-25 text-end">
                  <span style={{ color: "#595959" }}>20</span>24
                </div>
              </div>
              <p className="gf_text py-2">
                And here we are, in the present chapter of the WODO odyssey.
                It's a story still being written, a canvas unfolding with
                vibrant possibilities. We invite you to join us, to become part
                of the extraordinary. Let's craft your brand's success story
                together, where the limits are limitless and every pixel is a
                brushstroke of your digital destiny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// Story Section

// Founders Section

function FoundersStory() {
  return (
    <>
      <div className="founders-story">
        <div className="container py-md-5 py-3">
          <div className="row py-3">
            <div className="col-lg-3">
              <img src={`${BaseURL}/media/2022/03/Joey-WODO-CHO.jpg`} alt="" />
              <h3 className="gf_h5 pt-4 fname">JOEY</h3>
              <p className="gf_text">Chief Happiness Officer</p>
            </div>
            <div className="col-lg-6">
              <h4 className="gf_h4">The maestro of mirth and mischief</h4>
              <p className="fstory-text gf_text">
                Here's Joey, who makes you forget spreadsheets and stuffy suits,
                Joey brings the wag to WODO! This furry whirlwind keeps the
                team's energy crackling with endless games of fetch and
                motivational tail wags. He's your furry productivity sherpa,
                leading the pack to happier projects and tail-wagging wins. Are
                you ready for a collaboration that's paws-itively awesome?
              </p>
            </div>
            <div className="col-lg-3 button-col">
              <ElementorButton URL="/contact" text="PAW-FIE" />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-3">
              <img
                src={`${BaseURL}/media/2023/04/WODO-Shyam-about.jpg`}
                alt=""
              />
              <h3 className="gf_h5 pt-4 fname">SHYAM</h3>
              <p className="gf_text">Chief Executive Officer, CEO</p>
            </div>
            <div className="col-lg-6">
              <h4 className="gf_h4">Think websites are just boring pages?</h4>
              <p className="fstory-text gf_text">
                Meet Shyam, the architect of digital dreams. He doesn't build,
                he sculpts. Every pixel is a brushstroke, crafting award-winning
                masterpieces like his 2021 and 2022 Elementor Top Website. He
                turns business puzzles into pixelated perfection. And solve your
                woes, digitally with ease!
              </p>
            </div>
            <div className="col-lg-3 button-col">
              <ElementorButton URL="/contact" text="Let's digitalize" />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-3">
              <img
                src={`${BaseURL}/media/2023/04/WODO-Suhas-about.jpg`}
                alt=""
              />
              <h3 className="gf_h5 pt-4 fname">SUHAS</h3>
              <p className="gf_text">Chief Financial Officer, CFO</p>
            </div>
            <div className="col-lg-6">
              <h4 className="gf_h4">Struggling to get your startup noticed?</h4>
              <p className="fstory-text gf_text">
                Oh, finally meet Suhas, the digital growth whisperer. He speaks
                the language of clicks and conversions, turning shy brands into
                social media superstars. Google-certified and armed with
                marketing mojo, he's helped OIT, Tankerwala, and TNA rise to the
                top. Ready to watch your business take flight?
              </p>
            </div>
            <div className="col-lg-3 button-col">
              <ElementorButton URL="/contact" text="Get Lead" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// Founders Section

// CTA Section

function CtaSection() {
  return (
    <>
      <div className="ctaSection py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3 className="gf_h3 text-light text-center fw-bold">
                If you're on the lookout for a place that cherishes your{" "}
                <span style={{ color: "#f8a925" }}>
                  Curiosity, zeal, and hunger for knowledge,
                </span>
                your quest ends here!
              </h3>
              <p className="gf_text text-light text -center py-2">
                WODO's Calling, Dare to click, dare to WODO!
              </p>
              <Link to="/contact/">
                <div className="about-cta-btn py-3">
                  <p className="about-cta-text m-0">Give it a Click !</p>
                  <img src={RightIcon} alt="" className="about-cta-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// CTA Section

function AboutUs() {
  //     const location = useLocation();
  //   const canonicalUrl = `https://wodo.digital${location.pathname}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About WODO - Digital Marketing & SEO Experts in UAE</title>
          <meta
            name="description"
            content="Learn about WODO, a UAE-based digital marketing agency providing SEO, web design & development, and branding services to drive business growth."
          />
          <meta
            name="keywords"
            content="Digital marketing agency, creative agency, web development, branding services, growth marketing, Wodo Digital, digital transformation, design and branding, SEO agency​"
          />
          <meta
            property="og:title"
            content="Meet WODO - UAE’s Trusted Digital Marketing and SEO Experts"
          ></meta>

          <meta
            property="og:description"
            content="Discover how WODO’s digital marketing expertise helps UAE businesses succeed online with tailored SEO strategies and impactful branding solutions."
          ></meta>
          <meta
            property="og:image"
            content="https://wodo.digital/media/home/featured-image.webp"
          />
          <meta
            property="og:image:alt"
            content="Digital Marketing, Web Design & Development Services at Wodo Digital"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:url" content="https://wodo.ae/about-us/" />
          {/* <link rel="canonical" href={canonicalUrl} /> */}
        </Helmet>
      </HelmetProvider>

      <Header />
      <HeroSectionSlider />
      <StorySection />
      <Awards />
      <TeamSection />
      <FoundersStory />
      <CtaSection />
      <Footer />
    </>
  );
}

export default AboutUs;
