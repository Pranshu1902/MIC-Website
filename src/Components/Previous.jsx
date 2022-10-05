import logo from "../assets/img/MIC Logo.svg";
import faculty from "../assets/img/team/Fac.jpg";
import president from "../assets/img/team/President.jpg";
import vicepresident from "../assets/img/team/Vicepresident.jpg";
import dewanshi from "../assets/img/team/GenSec.jpg";
import venkat from "../assets/img/team/Principlesec.png";
import deepthi from "../assets/img/team/JointGenSec.jpg";
import neeraj from "../assets/img/team/TechHead.jpg";
import muskan from "../assets/img/team/Designhead.jpg";
import pje from "../assets/img/team/Prhead.jpg";
import advisory1 from "../assets/img/team/advisory-1.jpg";
import advisory2 from "../assets/img/team/advisory-2.jpg";
import advisory3 from "../assets/img/team/advisory-3.jpg";
import Footer from "./Footer";

export default function Previous() {
  document.title = "Our Team";

  const facultyData = {
    name: "Dr. Anusha Kannan",
    position: "Associate Professor",
    description:
      "Dedicated and experienced Professor in the Computer Science Department of VIT Chennai. Adept in the field of network security, she received her PhD from VIT Vellore. She is passionate about working with club members and preparing them for their future endeavours.",
    image: faculty,
  };

  const advisory = [
    {
      name: "Pratik Garai",
      image: advisory1,
      position: "Advisory",
      description:
        "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
    },
    {
      name: "Yashashwini Dixit",
      image: advisory2,
      position: "Advisory",
      description:
        "Actively involved in helping the members tackle their hurdles, planning towards making the club successful, and doing the best to assist the club.",
    },
    {
      name: "Gyanadipta Mohanty",
      image: advisory3,
      position: "Advisory",
      description: "Still Exploring",
    },
  ];

  const heads = [
    {
      name: "Neeraj J Manurkar",
      image: neeraj,
      position: "Technical Head",
      description:
        "Good people are good because they've come to wisdom through failure",
    },
    {
      name: "Muskaan Yadav",
      image: muskan,
      position: "Design and Content Head",
      description:
        "Perseverance is a virtue, success and failures are it's by product.",
    },
    {
      name: "P.Je Sai Kailash",
      image: pje,
      position: "Marketing and Public Relation Head",
      description: "Having the dream is easy, making it come true is hard",
    },
  ];

  const coreMembers = [
    {
      name: "Dewanshi Paul",
      image: dewanshi,
      position: "General Secretary",
      description:
        "Results happen over time, not overnight-work hard and be patient.",
    },
    {
      name: "Venkat Amith Woonna",
      image: venkat,
      position: "Principle Secretary",
      description: "Simply Curious",
    },
    {
      name: "Deepthi B",
      image: deepthi,
      position: "Joint General Secretary",
      description: "In the Process of Becoming the Best Version of Myself!",
    },
  ];

  const coreMembers1 = [
    {
      name: "Sam Prince Franklin",
      image: president,
      position: "President",
      description: "SELCOUTH",
    },
    {
      name: "Shreejith SG",
      image: vicepresident,
      position: "Vice President",
      description:
        "I'm here to have fun, make people laugh and chew gum, but (un)fortunately I'm all out of gum",
    },
  ];

  const showMember = (member) => {
    return (
      <div className="w-full md:w-1/4 bg-white rounded-lg shadow-lg shadow-blue-200 p-2 flex flex-col justify-center items-stretch hover:scale-105 transition duration-200">
        <img
          className="max-h-64 object-cover"
          src={member.image}
          width={"100%"}
          alt={member.name}
        />
        <div className="flex flex-col justify-center items-center p-2">
          <div className="text-xl font-bold text-[#070952]">{member.name}</div>
          <div className="text-gray-400">{member.position}</div>
          <div className="font-thin italic">{member.description}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Header */}
      <header className="fixed-top d-flex align-items-center header-transparent bg-[#070952] text-white">
        <div className="flex justify-between">
          <div className="logo">
            <a href="index.html">
              <img src={logo} width={"40%"} alt="logo" />
            </a>
          </div>

          <nav id="navbar" className="navbar flex items-center p-2">
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  className="nav-link hover:underline transition duration-300"
                  href="./index.html#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="./index.html#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="./events.html">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link active" href="./team.html">
                  Our Team
                </a>
              </li>
              <li>
                <a className="nav-link" href="./departments.html">
                  Our Departments
                </a>
              </li>
              <li>
                <a className="nav-link" href="./index.html#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Heading */}
      <section id="hero" className="bg-[#070952] text-white p-6">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div>
                <p className="text-5xl font-bold">Our Team</p>
                <p className="text-2xl font-light w-1/2 pt-4">
                  The strength of the MIC team is each individual member and the
                  strength of each member makes up our Innovative team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use
              //   xlink:href="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            />
          </g>
          <g className="wave2">
            <use
              //   xlink:href="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            />
          </g>
          <g className="wave3"></g>
        </svg>
      </section>

      <div>
        {/* Faculty Co-ordinator */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-medium pb-12">Faculty Co-ordinator</p>
          <br />
          <div className="flex justify-center items-center">
            {showMember(facultyData)}
          </div>
        </div>
        <br />
        <div>
          {/* Core Members */}
          <h2 className="flex justify-center text-4xl font-medium">
            Core Members
          </h2>
          <br />
          <div className="flex flex-col md:flex-row justify-center items-stretch h-full gap-8">
            {coreMembers1.map((member) => {
              return showMember(member);
            })}
          </div>
          <br />
          <div className="flex flex-col md:flex-row justify-center items-stretch h-full gap-8">
            {coreMembers.map((member) => {
              return showMember(member);
            })}
          </div>
        </div>
        <br />
        {/* Heads */}
        <div className="flex flex-col md:flex-row justify-center items-stretch h-full gap-8">
          {heads.map((member) => {
            return showMember(member);
          })}
        </div>
        <br />
        <header className="section-header">
          <p className="text-4xl font-medium flex justify-center">Advisory</p>
        </header>
        <br />
        {/* Advisory */}
        <div className="flex flex-col md:flex-row justify-center items-stretch h-full gap-8">
          {advisory.map((member) => {
            return showMember(member);
          })}
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
