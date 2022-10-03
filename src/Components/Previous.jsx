import logo from "../assets/img/MIC Logo.svg";

export default function Previous() {
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center header-transparent bg-blue-700 text-white"
      >
        <div class="flex justify-between">
          <div class="logo">
            <a href="index.html">
              <img src={logo} width={"40%"} alt="logo" />
            </a>
          </div>

          <nav id="navbar" class="navbar flex items-center p-2">
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  class="nav-link hover:underline transition duration-300"
                  href="./index.html#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="./index.html#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link" href="./events.html">
                  Events
                </a>
              </li>
              <li>
                <a class="nav-link active" href="./team.html">
                  Our Team
                </a>
              </li>
              <li>
                <a class="nav-link" href="./departments.html">
                  Our Departments
                </a>
              </li>
              <li>
                <a class="nav-link" href="./index.html#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero" className="bg-blue-900 text-white p-6">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  <spa className="text-5xl font-bold">Our Team</spa>
                </h1>
                <h2 className="text-2xl w-1/2 pt-4">
                  The strength of the MIC team is each individual member and the
                  strength of each member makes up our Innovative team.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <svg
          class="hero-waves"
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
          <g class="wave1">
            <use
              //   xlink:href="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            />
          </g>
          <g class="wave2">
            <use
              //   xlink:href="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            />
          </g>
          <g class="wave3"></g>
        </svg>
      </section>

      <main id="main">
        <section id="team" class="team">
          <div
            class="container flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <header class="section-header">
              <h2>
                <center className="text-2xl">Faculty Co-ordinator</center>
              </h2>
            </header>
            <br />
            <div class="row gy-1 d-flex justify-center items-center w-full">
              <div
                class="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="member">
                  <div class="member-img">
                    <img
                      src="assets/img/team/Fac.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="member-info">
                    <h4>Dr. Anusha Kannan</h4>
                    <span>Associate Professor</span>
                    <p>
                      Dedicated and experienced Professor in the Computer
                      Science Department of VIT Chennai. Adept in the field of
                      network security, she received her PhD from VIT Vellore.
                      She is passionate about working with club members and
                      preparing them for their future endeavours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>
                <center>Core Members</center>
              </h2>
            </header>
            <br />
            <div class="row gy-4">
              <div class="col-lg-3"></div>
              <div
                class="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="member">
                  <div class="member-img">
                    <img
                      src="assets/img/team/President.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="https://www.linkedin.com/in/samprincefranklin/">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Sam Prince Franklin</h4>
                    <span>President</span>
                    <p>SELCOUTH</p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="member">
                  <div class="member-img">
                    <img
                      src="assets/img/team/Vicepresident.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="https://www.linkedin.com/in/shreejithsg">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
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
            <div class="row gy-4">
              <div class="col-lg-1"></div>
              <div
                class="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="member">
                  <div class="member-img">
                    <img
                      src="assets/img/team/GenSec.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="https://www.linkedin.com/in/dewanshi-paul-2515091b9/">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Dewanshi Paul</h4>
                    <span>General Secretary</span>
                    <p>
                      Results happen over time, not overnight-work hard and be
                      patient.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="member">
                  <div class="member-img">
                    <img
                      src="assets/img/team/Principlesec.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="https://in.linkedin.com/in/venkat-amith-woonna-38bb721b8">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Venkat Amith Woonna</h4>
                    <span>Principle Secretary</span>
                    <p>Simply Curious</p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="member">
                  <div class="member-img">
                    <img
                      src="assets/img/team/JointGenSec.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="https://www.linkedin.com/in/deepthibalasubramanian">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Deepthi B</h4>
                    <span>Joint General Secretary</span>
                    <p>
                      In the Process of Becoming the Best Version of Myself!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div class="container" data-aos="fade-up">
          <div class="row gy-4">
            <div class="col-lg-1"></div>
            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="assets/img/team/TechHead.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="https://www.linkedin.com/in/neeraj-j-manurkar-64372b212/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
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
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="assets/img/team/Designhead.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="https://www.linkedin.com/in/muskaan-yadav-068">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
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
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="assets/img/team/Prhead.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="https://www.linkedin.com/in/je-sai-kailash-pulipati-347180202">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>P.Je Sai Kailash</h4>
                  <span>Marketing and Public Relation Head</span>
                  <p>"Having the dream is easy, making it come true is hard"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <header class="section-header">
          <h2>
            <center>Advisory</center>
          </h2>
        </header>
        <br />
        <div class="row gy-4">
          <div class="col-lg-1"></div>
          <div
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="member">
              <div class="member-img">
                <img
                  src="assets/img/team/advisory-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="https://www.linkedin.com/in/pratik-garai-bab1a4191/">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
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
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="member">
              <div class="member-img">
                <img
                  src="assets/img/team/advisory-2.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="social">
                <a href="https://www.linkedin.com/in/yashashwinidixit/">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
              <div class="member-info">
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
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="member">
              <div class="member-img">
                <img
                  src="assets/img/team/advisory-3.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="social">
                <a href="https://www.linkedin.com/in/gyanadipta-mohanty-86567b18b/">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
              <div class="member-info">
                <h4>Gyanadipta Mohanty</h4>
                <span>Advisory</span>
                <p>Still Exploring</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-info">
              <h3>Microsoft Innovations Club</h3>
              <p class="pb-3">
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
              <div class="social-links mt-3">
                <a href="https://discord.gg/c6EAayHHR3" class="discord">
                  <i class="bx bxl-discord"></i>
                </a>
                <a
                  href="https://www.instagram.com/microsoft.innovations.vitc/"
                  class="instagram"
                >
                  <i class="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/microsoft-innovations-club-vitc/"
                  class="linkedin"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="/"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
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
