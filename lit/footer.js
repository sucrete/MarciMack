import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class Footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="gradient-footer-wrapper">
        <!-- rts footer area start -->
        <div class="rts-footer-area rts-section-gapTop">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6">
                <div>
                  <div class="logo-brick">
                    <div class="logo-col">
                      <a href="index.html" class="logo">
                        <img
                          class="footer-logo"
                          src="assets/images/logo/MM-logo-all-green.svg"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="hr-group">
                    <div class="footer-hr"></div>
                  </div>
                  <form action="" class="footer-form">
                    <div class="single">
                      <p class="mb-4">
                        Join our email list to get exclusive discounts!
                      </p>
                      <!-- <label for="name">Email</label> -->
                      <div class='that-group'>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                        <button class="rts-btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-12 col-md-5 justify-content-end d-flex">
                <div class="weather-card">
                  <div class="card-body">
                    <div class=" _500 fs-24 weather-heading">
                      Weather
                      <span class="grey-text">
                        <span class="hyphen">-</span>
                        <br class="break" />
                        Kearney, MO</span
                      >
                    </div>
                    <!--~ Top Row -->
                    <div class="row today-row">
                      <div class="col today-icon">
                        <img
                          src="./assets/images/icons/cloudy.png"
                          alt=""
                          class="img-fluid icon-img"
                        />
                      </div>
                      <div class="col today-temp text-center">
                        <div>
                          <span class="the-temp"> 35 </span>
                          <!-- <span class="degree align-top"> °F</span> -->
                        </div>
                      </div>
                      <div class="col today-weather">
                        <div class="today-weather-wrapper">
                          <div class="what-weather">snow</div>
                          <div class="light-white">
                            <svg
                              class="wind-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="64"
                              height="64"
                              fill="#6d6d6d"
                              viewBox="0 0 256 256"
                            >
                              <path
                                d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"
                              ></path>
                            </svg>
                            <span class="wind">14</span> mph
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--~ Future Row 1 -->
                    <div
                      class="row future-row future-row-1 justify-content-between"
                    >
                      <div class="col-5 day my-auto tomorrow text-center">
                        Tuesday
                      </div>
                      <div class="col-2 icon">
                        <img
                          src="./assets/images/icons/cloudy.svg"
                          alt=""
                          class="tomorrow-icon"
                        />
                      </div>
                      <div class="col-5 temp my-auto text-center">
                        <span class="hi">72</span>°F /
                        <span class="lo">57</span>°F
                      </div>
                    </div>
                    <!--~ Future Row 2 -->
                    <div
                      class="row future-row future-row-2 justify-content-between"
                    >
                      <div
                        class="col-5 day my-auto day-after-tomorrow text-center"
                      >
                        Wednesday
                      </div>
                      <div class="col-2 icon">
                        <img
                          src="./assets/images/icons/wind.svg"
                          alt=""
                          class="day-after-tomorrow-icon"
                        />
                      </div>
                      <div class="col-5 temp my-auto text-center">
                        <span class="hi">72</span>°F /
                        <span class="lo">57</span>°F
                      </div>
                    </div>
                    <!--~ Future Row 3 -->
                    <div
                      class="row future-row future-row-3 justify-content-between"
                    >
                      <div
                        class="col-5 day my-auto three-days-from-today text-center"
                      >
                        Thursday
                      </div>
                      <div class="col-2 icon">
                        <img
                          src="./assets/images/icons/snow.svg"
                          alt=""
                          class="three-days-from-today-icon"
                        />
                      </div>
                      <div class="col-5 temp my-auto text-center">
                        <span class="hi">72</span>°F /
                        <span class="lo">57</span>°F
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- rts copyright area start -->
            <div class="rts-copyright-area-one">
              <div class="row">
                <div class="col-lg-12">
                  <div class="copyright-wrapper">
                    <a
                      class="facebook-link"
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      <svg
                        class="facebook-logo"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="102.28 102.2 886 158.33"
                      >
                        <path
                          d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"
                        />
                      </svg>
                    </a>

                    <div class="new-row">
                      <p>
                        © The Golf Course at MariMack
                        ${new Date().getFullYear()} 
                      </p>

                      <a class='teequest-link' href="">
                        <!-- <svg
                          class="svg-inline--fa fa-gears"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="gears"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="#6D6D6D"
                            d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          ></path>
                        </svg> -->
                        Powered by TeeQuest
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- rts copyright area end -->
          </div>
        </div>
        <!-- rts footer area end -->
      </div>

      <div id="side-bar" class="side-bar header-two" dir="ltr">
        <button class="close-icon-menu" aria-label="footer_Button">
          <i class="far fa-times"></i>
        </button>
        <div class="mobile-menu-main">
          <nav class="nav-main mainmenu-nav mt--30">
            <ul class="mainmenu metismenu" id="mobile-menu-active">
              <li class="has-droupdown">
                <a href="#" class="main">Home</a>
                <ul class="submenu mm-collapse">
                  <li><a href="index.html">Home One</a></li>
                  <li><a href="index-two.html">Home Two</a></li>
                  <li><a href="index-three.html">Home Three</a></li>
                  <li><a href="index-four.html">Home Four</a></li>
                  <li><a href="index-five.html">Home Five</a></li>
                </ul>
              </li>
              <li class="has-droupdown">
                <a href="#" class="main">Pages</a>
                <ul class="submenu mm-collapse">
                  <li><a href="about.html">About</a></li>
                  <li><a href="service.html">Services</a></li>
                  <li><a href="service-single.html">Services Single</a></li>
                  <li><a href="case-studies.html">Case Studies</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li>
                    <a href="case-studies-single.html">Case Studies Single</a>
                  </li>
                  <li><a href="why-choose-us.html">Why Choose Us</a></li>
                  <li><a href="career.html">Career</a></li>
                  <li><a href="career-single.html">Career Single</a></li>
                  <li><a href="industry.html">Industry</a></li>
                  <li><a href="apply.html">Apply</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="team-single.html">Team Single</a></li>
                  <li><a href="faq.html">Faq's</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                  <li><a href="partner.html">Our Partner</a></li>
                  <li><a href="award.html">Award</a></li>
                  <li>
                    <a href="free-consultation.html">Free Consultation</a>
                  </li>
                  <li><a href="terms-of-use.html">Terms Of Use</a></li>
                  <li><a href="404.html">Error</a></li>
                </ul>
              </li>
              <li>
                <a href="case-studies.html" class="main">Case Studies</a>
              </li>
              <li class="has-droupdown">
                <a href="#" class="main">Services</a>
                <ul class="submenu mm-collapse">
                  <li><a href="service.html">Service</a></li>
                  <li><a href="service-single.html">Cloud Migration</a></li>
                  <li><a href="it-strategies.html">IT Strategies</a></li>
                  <li>
                    <a href="cyber-security-service.html">Cyber Security</a>
                  </li>
                  <li><a href="technologies-service.html">Technologies</a></li>
                  <li>
                    <a href="it-consulting-service.html">IT Consulting</a>
                  </li>
                  <li><a href="development-service.html">Development</a></li>
                  <li><a href="ai-learning-service.html">AI Learning</a></li>
                  <li>
                    <a href="management-service.html">Management Service</a>
                  </li>
                  <li><a href="it-innovations.html">IT Innovations</a></li>
                </ul>
              </li>
              <li class="has-droupdown">
                <a href="#" class="main">Blog</a>
                <ul class="submenu mm-collapse">
                  <li><a href="blog-list.html">Blog List</a></li>
                  <li><a href="blog-grid.html">Blog Grid</a></li>
                  <li><a href="blog-grid-two.html">Blog Grid Two</a></li>
                  <li><a href="blog-grid-four.html">Blog Grid Three</a></li>
                  <li><a href="blog-masonry.html">Blog Masonry</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li>
                <a href="contact.html" class="main">Contact</a>
              </li>
            </ul>
          </nav>

          <div class="rts-social-border-area right-sidebar mt--80">
            <ul>
              <li>
                <a href="#" aria-label="social link" data-description="social"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="#" aria-label="social link" data-description="social"
                  ><i class="fa-brands fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="#" aria-label="social link" data-description="social"
                  ><i class="fa-brands fa-linkedin-in"></i
                ></a>
              </li>
              <li>
                <a href="#" aria-label="social link" data-description="social"
                  ><i class="fa-brands fa-pinterest"></i
                ></a>
              </li>
              <li>
                <a href="#" aria-label="social link" data-description="social"
                  ><i class="fa-brands fa-youtube"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- mobile menu area end -->
      </div>
    `;
  }
}
customElements.define("my-footer", Footer);
