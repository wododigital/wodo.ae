import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TeamCard from "./TeamCard";
import { useRef } from "react";
import BaseURL from "../../../components/other/BaseURL";

const data = [
    {
        name: 'Shashwathagowda M',
        designation: 'Web Developer',
        image: BaseURL+'/media/2021/02/Shashwathagowda-Web-Developer-WODO.jpg',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:'Hi, I am Shashwatha Gowda, Web Designer & Developer. I’ve been on this journey for 3+ years and have worked on 55+ projects. I Design websites that engage with the user and development which is experience focused. I’ve worked in various niches, including Corporate Firms, Educational Institutions, Movie Production Houses, Startups, Artists, and E-commerce Brands. I currently work as a Senior Web Designer & Developer at WODO, an award-winning design company. I have upskilled myself and have been an integral part of growing the company. I look forward to creating more functional and stunning websites and web apps to help brands win their online presence.'
      },
    {
      name: 'Anirudh RS',
      designation: 'Art Director',
      image: BaseURL+'/media/2021/12/Anirudh-WODO.jpg',
      linkedinUrl:'#',
      instagramUrl:'#',
      Description:''
    },
    {
      name: 'Arjun PM',
      designation: 'Content Strategist',
      image: BaseURL+'/media/2021/12/Arjun-WODO.jpg',
      linkedinUrl:'#',
      instagramUrl:'#'
    },
    {
      name: 'Nishant M',
      designation: 'Production Manager',
      image: BaseURL+'/media/2021/12/Nishant-WODO.jpg',
      linkedinUrl:'#',
      instagramUrl:'#'
    },
    {
      name: 'Anuj Srivatsava',
      designation: 'Project Mnanager',
      image: BaseURL+'/media/2021/02/Anuj-Srivastava-Project-Manager-WODO.jpg',
      linkedinUrl:'#',
      instagramUrl:'#'
    },
    // {
    //   name: 'Amit Goyal',
    //   designation: 'Brand Identity Designer',
    //   image: BaseURL+'/media/2021/02/Amit-Goyal-Brand-Identity-Designer-WODO.jpg',
    //   linkedinUrl:'#',
    //   instagramUrl:'#',
    //   Description:'Hey there, I’m Visual Goku, a.k.a Amit Goyal! 🚀 Back in college, I was that dude cooking up eye-popping banners for fests, and the design bug just never left. 🎨Fast forward, and I’ve become a self-taught design ninja with 50+ projects like Ed-Tech, agro-farming, real estate, and more. Currently donning the hat of Sr. Designer at WODO, I specialize in conjuring up eye-catching social media magic, killer branding, and UI/UX wizardry. Hustler, learner, and business enthusiast – I wear many hats, and yea… its me in a nutshell. Let’s grab a ☕ and geek out on how we can level up your branding game. Shoot me an email at goyalamit935@gmail.com or hit a ‘Hey’ at 8904618002. Let the creative sparks fly!'
    // },    
    {
      name: 'Abhilash Malkar',
      designation: 'Sr. Full Stack Web Developer',
      image: BaseURL+'/media/2024/06/abhilash.png',
      linkedinUrl:'#',
      instagramUrl:'#',
      Description:''
    },
    {
      name: 'Burroju Ramnanachary',
      designation: 'Senior Web Developer',
      image: BaseURL+'/media/2024/06/ramana-profile.png',
      linkedinUrl:'#',
      instagramUrl:'#',
      Description:'Hey there! Ramana Chary here, fresh off my B.Com graduation from Satavahana University in 2022. But accounting? Nah, not my jam. Web development, now that’s where my brain buzzes. And my journey into the world of web development began with completing a full-stack course at OneTruWeb Solutions. As a web developer, I have hands-on expertise in PHP, JavaScript, React, MySQL, Node.JS, and Laravel. Glimpse into my professional adventure(this for the experience section): Developed both front-end and back-end components for a visa application project, making it easier than ever to navigate the paperwork. Played a key role in building the back-end and database for an Olympiad exam management system, ensuring smooth test administration and evaluation. Bridged AI and web: Crafted a dynamic React.js front-end website powered by a Node.js back-end and seamlessly integrated with an AI ChatGPT API, pushing the boundaries of user interaction.'
    },
    {
        name: 'Kavana Arunkumar',
        designation: 'UI/UX Designer',
        image: BaseURL+'/media/2024/08/Kavana-Wodo-ui-ux-designer.png',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:''
      },
      {
        name: 'Karan Kumar',
        designation: 'Digital Marketer',
        image: BaseURL+'/media/2024/08/Karan-Wodo-digital-marketer.png',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:''
      },
    // {
    //   name: 'Amalu Vineed',
    //   designation: 'Content Writer',
    //   image: BaseURL+'/media/2024/02/Amalu-Content-Writer.png',
    //   linkedinUrl:'#',
    //   instagramUrl:'#',
    //   Description:'I’m here to add those missing toppings of creativity that impact your content that take it to the next level. Like the secret ingredient in your favorite pizza, I can be the ‘you-know-who’ for your content, injecting it with significance, style, and an extra touch of magic. Just drop me into a scenario that kicks my brain into night owl mode, and let’s bring your content to life.'
    // },
    {
      name: 'Omprasad M',
      designation: 'Web Developer',
      image: BaseURL+'/media/2024/02/Omprasad-Web-Developer.png',
      linkedinUrl:'#',
      instagramUrl:'#',
      Description:'Hey there! 👋 I’m an enthusiastic web developer on a mission to turn caffeine into code. 🚀 With a passion for crafting stunning websites and a toolbox filled with HTML, CSS, and JavaScript wizardry, I’m your go-to person for bringing your digital dreams to life. I’m passionate about diverse projects and love partnering with you to craft interactive experiences that make a lasting impact. Let’s code the future, together!'
    },
    // {
    //     name: 'Laishram Wangu',
    //     designation: 'Junior Grapphic designer',
    //     image: BaseURL+'/media/2024/06/wangu.png',
    //     linkedinUrl:'#',
    //     instagramUrl:'#',
    //     Description:''
    //   },    
      {
        name: 'Soumita Nandi',
        designation: 'Relationship Manager',
        image: BaseURL+'/media/2024/06/soumitha.png',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:''
      },
      {
        name: 'Sarnab Das',
        designation: 'Junior Digital Marketer',
        image: BaseURL+'/media/2024/06/sarnab.png',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:''
      },
      {
        name: 'Vinayak Pawar',
        designation: 'Junior Digital Marketer',
        image: BaseURL+'/media/2024/06/vinayak.png',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:''
      },
      
      {
        name: 'This Could Be You',
        designation: 'We are seeking top talent',
        image: BaseURL+'/media/2022/03/Success-Baby-WODO.jpg',
        linkedinUrl:'#',
        instagramUrl:'#',
        Description:''
      },
  ];

// function TeamCarousel() {

//     var leftIcon=`<svg width="40" height="40" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;
 
//   var rightIcon=`<svg width="40" height="40" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;

//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: false
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//   return (
//     <>
//       <div className="container py-4 fadeInUp-animation">
//         <div className="row">
       
//         <Slider {...settings}>
//           {data.map((item, index) => (
//             <TeamCard
//             key={index}
//             name={item.name}
//             designation={item.designation}
//             instagramUrl={item.linkedinUrl}
//             linkedinUrl={item.linkedinUrl}
//             image={item.image}
//           />
//           ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }

function TeamCarousel() {
  const slider = useRef(null);

  var leftIcon = `<svg class='leftIconsvg' viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;

  var rightIcon = `<svg class='rightIconsvg' viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;
  var settings = {
    dots: false,
    infinite: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container py-4 fadeInUp-animation">
        <div className="row">
          <div className="text-end">
            <button
              className=" arrow-btn"
              onClick={() => slider?.current?.slickPrev()}
            >
              {" "}
              <div dangerouslySetInnerHTML={{ __html: leftIcon }} />{" "}
            </button>
            <button
              className=" right-icon arrow-btn"
              onClick={() => slider?.current?.slickNext()}
            >
              <div dangerouslySetInnerHTML={{ __html: rightIcon }} />
            </button>
          </div>

          <Slider ref={slider} {...settings}>
            {data.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                designation={item.designation}
                instagramUrl={item.linkedinUrl}
                linkedinUrl={item.linkedinUrl}
                image={item.image}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default TeamCarousel;
