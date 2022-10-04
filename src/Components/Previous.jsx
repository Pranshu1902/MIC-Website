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

export default function Previous() {
  document.title = "Our Team";

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

  const showMember = (member) => {
    return (
      <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
        <img src={member.image} width={"20%"} alt="" />
        <div className="text-xl">{member.name}</div>
        <div>{member.position}</div>
        <div>{member.description}</div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100">
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent bg-blue-700 text-white"
      >
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

      <section id="hero" className="bg-blue-900 text-white p-6">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  <spa className="text-5xl font-bold">Our Team</spa>
                </h1>
                <h2 classNameName="text-2xl w-1/2 pt-4">
                  The strength of the MIC team is each individual member and the
                  strength of each member makes up our Innovative team.
                </h2>
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
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Faculty Co-ordinator</p>
          <br />
          <div className="flex flex-col justify-center items-center w-full">
            <img src={faculty} width={"15%"} classNameName="img-fluid" alt="" />
            <div className="flex flex-col justify-center p-6">
              <p className="flex justify-center">Dr. Anusha Kannan</p>
              <p className="flex justify-center">Associate Professor</p>
              <p className="flex justify-center p-12">
                Dedicated and experienced Professor in the Computer Science
                Department of VIT Chennai. Adept in the field of network
                security, she received her PhD from VIT Vellore. She is
                passionate about working with club members and preparing them
                for their future endeavours.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2 className="flex justify-center text-2xl">Core Members</h2>
          </header>
          <br />
          <div className="flex gap-2 p-12 justify-center">
            <div className="flex w-1/2">
              <div className="flex flex-col justify-center bg-white rounded-lg p-2">
                <div className="">
                  <img
                    src={president}
                    width={"10%"}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="">
                    <a href="https://www.linkedin.com/in/samprincefranklin/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p>Sam Prince Franklin</p>
                  <span>President</span>
                  <p>SELCOUTH</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 bg-white rounded-lg p-2" s>
              <div className="member">
                <div className="member-img">
                  <img
                    src={vicepresident}
                    width={"20%"}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.linkedin.com/in/shreejithsg">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Shreejith SG</h4>
                  <span>Vice President</span>
                  <p>
                    I'm here to have fun, make people laugh and chew gum, but
                    (un)fortunately I'm all out of gum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row gy-4">
            <div className="flex gap-4">
              {coreMembers.map((member) => {
                return <div className="w-1/3">{showMember(member)}</div>;
              })}
            </div>
          </div>
        </div>
        <br />
        <div className="row gy-4">
          <div className="flex gap-4">
            {heads.map((member) => {
              return <div className="w-1/3">{showMember(member)}</div>;
            })}
          </div>
        </div>
        <br />
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-1"></div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/TechHead.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.linkedin.com/in/neeraj-j-manurkar-64372b212/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Neeraj J Manurkar</h4>
                  <span>Technical Head</span>
                  <p>
                    Good people are good because they've come to wisdom through
                    failure
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/Designhead.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.linkedin.com/in/muskaan-yadav-068">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Muskaan Yadav</h4>
                  <span>Design and Content Head</span>
                  <p>
                    Perseverance is a virtue, success and failures are it's by
                    product.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/Prhead.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.linkedin.com/in/je-sai-kailash-pulipati-347180202">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>P.Je Sai Kailash</h4>
                  <span>Marketing and Public Relation Head</span>
                  <p>"Having the dream is easy, making it come true is hard"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <header className="section-header">
          <p className="text-2xl flex justify-center">Advisory</p>
        </header>
        <br />
        <div className="row gy-4">
          <div className="col-lg-1"></div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/advisory-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="https://www.linkedin.com/in/pratik-garai-bab1a4191/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Pratik Garai</h4>
                <span>Advisory</span>
                <p>
                  "Success isn't always about greatness. It's about consistency.
                  Consistent hard work leads to success. Greatness will come."
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/advisory-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/yashashwinidixit/">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="member-info">
                <h4>Yashashwini Dixit</h4>
                <span>Advisory</span>
                <p>
                  Actively involved in helping the members tackle their hurdles,
                  planning towards making the club successful, and doing the
                  best to assist the club.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/advisory-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/gyanadipta-mohanty-86567b18b/">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="member-info">
                <h4>Gyanadipta Mohanty</h4>
                <span>Advisory</span>
                <p>Still Exploring</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-info">
              <h3>Microsoft Innovations Club</h3>
              <p className="pb-3">
                <em>
                  “Technology is best when it brings people together.” - Matt
                  Mullenweg
                </em>
              </p>
              <p>
                VIT Chennai ,Kelambakkam - Vandalur Rd
                <br />
                Chennai, Tamil Nadu 600127
                <br />
                <br />
                <strong>Email:</strong> micvitcc@gmail.com
              </p>
              <div className="social-links mt-3">
                <a href="https://discord.gg/c6EAayHHR3" className="discord">
                  <i className="bx bxl-discord"></i>
                </a>
                <a
                  href="https://www.instagram.com/microsoft.innovations.vitc/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/microsoft-innovations-club-vitc/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>

      <script src="assets/vendor/purecounter/purecounter.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
}
