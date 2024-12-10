import React, { useEffect, useState } from "react";
import "./style.css";
import JetFormInput from "../../components/JetFormInput";
import JetFormSelect from "../../components/JetFormSelect";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import API_URL from "../../config";

function index() {
    // const currentUrl = window.location.href;
  function Content() {
    const [joinData, setJoinData] = useState({
      full_name: "",
      email: "",
      phone: "",
      linkedin: "",
      applying_for: "",
      role: "",
      qualification: "",
      experience: "",
      portfolio: "",
      resume: [],
    });

    const [resume, setResume] = useState(null);
    const handleFileChange = (e) => {
      const file = e.target.files[0];

      // Check if a file was selected
      if (!file) {
        return;
      }

      // Get the file extension
      const fileExtension = file.name.split(".").pop().toLowerCase();

      // List of valid file extensions
      const validExtensions = ["doc", "docx", "pdf"];

      // Check if the file extension is valid
      if (!validExtensions.includes(fileExtension)) {
        alert("Invalid file type. Please select a .doc, .docx, or .pdf file.");
        e.target.value = ""; // Clear the file input
        return;
      }

      // Set the file if it is valid
      setResume(file);
    };

    useEffect(() => {
      setJoinData((preData) => ({
        ...preData,
        resume: resume,
      }));
    }, [resume]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const inputHandler = (e) => {
      const { name, value } = e.target;
      setJoinData((preData) => ({
        ...preData,
        [name]: value,
      }));
    };

    const navigate = useNavigate();

    const wodoHandler = (e) => {
      e.preventDefault();
      // console.log(joinData);
      axios
        .post(
          `${API_URL}/join-wodo`,
          joinData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials:true,
          }
        )
        .then((res) => {
          if (res.data.status === "success") {
            navigate("/thank-you");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
    return (
      <>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col">
              <h2 className="gf_h5 storysection-h5">
                Work with Passion, Grow Without Limits
              </h2>
              <h1 className="c_h1">Join WODO's Tribe of Mavericks.</h1>
              <p>
                Ever craved a workplace where your creativity explodes, your
                skills soar, and your potential lights up the room? Look no
                further than the WODO Tribe, where passion meets purpose and
                every day is an adventure in digital wizardry: to make the
                impossible possible, and we want you to join the quest!
              </p>
            </div>
            <div className="col">
              <form onSubmit={wodoHandler}>
                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Your Full Name*</label>
                  <JetFormInput
                    type="text"
                    id="textbox1"
                    name="full_name"
                    value={joinData.full_name}
                    onChange={inputHandler}
                    placeholder="Type your name here..."
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Your Email Address*</label>
                  <JetFormInput
                    type="text"
                    name="email"
                    value={joinData.email}
                    id="textbox1"
                    onChange={inputHandler}
                    placeholder="Type your email here..."
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Your Phone Number*</label>
                  <JetFormInput
                    type="text"
                    name="phone"
                    value={joinData.phone}
                    id="textbox1"
                    onChange={inputHandler}
                    placeholder="Your phone number here..."
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">LinkedIn*</label>
                  <JetFormInput
                    type="text"
                    name="linkedin"
                    value={joinData.linkedin}
                    id="textbox1"
                    onChange={inputHandler}
                    placeholder="Paste your linked profile url"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Applying For*</label>
                  <JetFormSelect
                    id="textbox1"
                    name="applying_for"
                    value={joinData.applying_for}
                    onChange={inputHandler}
                    options={["Applying for", "Internship", "Full Time"]}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Intern Role*</label>
                  <JetFormSelect
                    id="textbox1"
                    name="role"
                    onChange={inputHandler}
                    value={joinData.role}
                    options={[
                      "Select Your Role",
                      "Content Writer",
                      "Digital Content Creator",
                      "Graphic Designer",
                      "Graphic Designer Intern",
                      "Social Media Manager",
                      "Video Editor",
                      "Web Developer",
                    ]}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Qualification*</label>
                  <JetFormSelect
                    id="textbox1"
                    onChange={inputHandler}
                    name="qualification"
                    value={joinData.qualification}
                    options={[
                      "Select Your Qualification",
                      "Under Graduate",
                      "Post Graduate",
                      "Pursuing",
                    ]}
                    required
                  />
                </div>

                {joinData.applying_for === "Full Time" ? (
                  <div className="form-group mt-3">
                    <label htmlFor="textbox1">Select Your Experience*</label>
                    <JetFormSelect
                      id="textbox1"
                      onChange={inputHandler}
                      name="experience"
                      value={joinData.experience}
                      options={[
                        "Select Experience Duration",
                        "0-1 Year",
                        "1-2 Years",
                        "2+ Years",
                      ]}
                      required
                    />
                  </div>
                ) : (
                  ""
                )}

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">
                    Portfolio (Behance, Driblble or Other links)
                  </label>
                  <JetFormInput
                    type="text"
                    onChange={inputHandler}
                    name="portfolio"
                    value={joinData.portfolio}
                    id="textbox1"
                    placeholder="Past URL here(optional)..."
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="textbox1">Upload Your Resume*</label>
                  <br />
                  <input
                    type="file"
                    name=""
                    id=""
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <button className="joinWodoSubmitBtn mt-3 mb-5">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Join WODO Today | Top Development and Design Team</title>
        <meta
          name="description"
          content="Discover exciting opportunities to join WODO and shape the future of digital creativity."
        />
        <meta
          name="keywords"
          content="Join WODO, Career Opportunities, Digital Creativity"
        />
        <meta
          property="og:image"
          content="https://wodo.digital/media/home/featured-image.webp"
        />
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default index;
