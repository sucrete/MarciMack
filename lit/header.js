import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class Header extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-four-wrapper">
              <div class="nav-area">
                <nav>
                  <ul>
                    <li>
                      <a class="nav-link" href="#"> Rates </a>
                    </li>
                    <li
                      class="has-dropdown position-static with-megamenu margin-single-0"
                    >
                      <a class="nav-link" href="#"
                        >Events
                        <!-- <i class="fa-duotone fa-regular fa-chevron-down"></i> -->
                      </a>
                      <div class="submenu">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a href="about.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >About</a
                                  >
                                </li>
                                <li>
                                  <a href="service.html">
                                    <i class="fa-sharp fa-regular fa-chevron-right"></i>
                                    Services</a
                                  >
                                </li>
                                <li>
                                  <a href="service-single.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Services Single</a
                                  >
                                </li>
                                <li>
                                  <a href="pricing.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Pricing Plan</a
                                  >
                                </li>
                                <li>
                                  <a href="case-studies.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Case Studies</a
                                  >
                                </li>
                                <li>
                                  <a href="privacy-policy.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Privacy Policy</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a href="case-studies-single.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Case Studies Single</a
                                  >
                                </li>
                                <li>
                                  <a href="why-choose-us.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Why Choose Us</a
                                  >
                                </li>
                                <li>
                                  <a href="career.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Career</a
                                  >
                                </li>
                                <li>
                                  <a href="career-single.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Career Single</a
                                  >
                                </li>
                                <li>
                                  <a href="industry.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Industry</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a href="apply.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Apply</a
                                  >
                                </li>
                                <li>
                                  <a href="team.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Team</a
                                  >
                                </li>
                                <li>
                                  <a href="team-single.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Team Single</a
                                  >
                                </li>
                                <li>
                                  <a href="faq.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Faq's</a
                                  >
                                </li>
                                <li>
                                  <a href="coming-soon.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Coming Soon</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a href="partner.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Our Partner</a
                                  >
                                </li>
                                <li>
                                  <a href="award.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Award</a
                                  >
                                </li>
                                <li>
                                  <a href="free-consultation.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Free Consultation</a
                                  >
                                </li>
                                <li>
                                  <a href="terms-of-use.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Terms Of Use</a
                                  >
                                </li>
                                <li>
                                  <a href="404.html"
                                    ><i
                                      class="fa-sharp fa-regular fa-chevron-right"
                                    ></i
                                    >Error</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li class="has-dropdown position-static with-megamenu">
                      <a class="nav-link" href="service.html"
                        >Membership
                        <!-- <i class="fa-duotone fa-regular fa-chevron-down"></i> -->
                    </a>
                      <div class="submenu">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="service-single.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/22.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">Cloud Migration</h4>
                                      <p>
                                        Moving data to cloud infrastructure.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="it-strategies.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/23.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">IT Strategies</h4>
                                      <p>Alignment, Innovation Scalability.</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="cyber-security-service.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/24.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">Cyber Security</h4>
                                      <p>
                                        Protecting data software and networks.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="technologies-service.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/25.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">Technologies</h4>
                                      <p>
                                        Empowering, innovative, transformative.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="it-consulting-service.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/26.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">
                                        IT Consulting Service
                                      </h4>
                                      <p>
                                        Expertise-driven technology
                                        problem-solving.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="development-service.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/27.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">Development</h4>
                                      <p>
                                        Creating innovative solutions through
                                        technology.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <ul class="single-menu parent-nav">
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="ai-learning-service.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/28.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">AI Learning</h4>
                                      <p>
                                        Empowering machines to mimic
                                        intelligence.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="management-service.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/29.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">Management</h4>
                                      <p>
                                        Organizing resources to achieve goals
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="single-service-area-wrapper"
                                    href="it-innovations.html"
                                  >
                                    <div class="icon">
                                      <img
                                        src="assets/images/service/icons/30.svg"
                                        alt="service"
                                      />
                                    </div>
                                    <div class="info">
                                      <h4 class="title">IT Innovations</h4>
                                      <p>
                                        Transforming ideas into digital
                                        solutions.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <ul
                                class="single-menu parent-nav industry-signle-menu"
                              >
                                <li class="parent-top-industry">
                                  <p>Industries</p>
                                </li>
                                <li>
                                  <a
                                    class="industries"
                                    href="construction-industry.html"
                                  >
                                    <img
                                      class="injectable"
                                      src="assets/images/icons/arrow-right.svg"
                                      alt="arrow"
                                    />
                                    Constructions
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="industries"
                                    href="healthcare-industry.html"
                                  >
                                    <img
                                      class="injectable"
                                      src="assets/images/icons/arrow-right.svg"
                                      alt="arrow"
                                    />
                                    HealthCare
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="industries"
                                    href="ecommerce-industry.html"
                                  >
                                    <img
                                      class="injectable"
                                      src="assets/images/icons/arrow-right.svg"
                                      alt="arrow"
                                    />
                                    Retail & E-Commerce
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="industries"
                                    href="fintech-industry.html"
                                  >
                                    <img
                                      class="injectable"
                                      src="assets/images/icons/arrow-right.svg"
                                      alt="arrow"
                                    />
                                    Fintech
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="industries"
                                    href="logistic-industry.html"
                                  >
                                    <img
                                      class="injectable"
                                      src="assets/images/icons/arrow-right.svg"
                                      alt="arrow"
                                    />
                                    Logistics & Automotive
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="industries"
                                    href="travel-industry.html"
                                  >
                                    <img
                                      class="injectable"
                                      src="assets/images/icons/arrow-right.svg"
                                      alt="arrow"
                                    />
                                    Travel & Hospitality
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="has-dropdown">
                      <a class="nav-link" href="#">Pool
                        <!-- <i class="fa-duotone fa-regular fa-chevron-down"></i> -->
                      </a>
                      <ul class="submenu parent-nav with-border">
                        <li>
                          <a href="blog-list.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Blog List</a
                          >
                        </li>
                        <li>
                          <a href="blog-grid.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Blog Grid</a
                          >
                        </li>
                        <li>
                          <a href="blog-grid-two.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Blog Grid Two</a
                          >
                        </li>
                        <li>
                          <a href="blog-grid-four.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Blog Grid Three</a
                          >
                        </li>
                        <li>
                          <a href="blog-masonry.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Blog Masonry</a
                          >
                        </li>
                        <li>
                          <a href="blog-details.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Blog Details</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="button-area-right-header">
                <div class="menu-btn-toggle">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                    <rect width="20" height="2" fill="#1F1F25"></rect>
                  </svg>
                </div>
              </div>
              <a href="index.html" class="logo">
                <img src="assets/images/logo/logo-2.svg" alt="logo" />
              </a>
              <div class="nav-area">
                <nav>
                  <ul>
                  <li>
                      <a class="nav-link" href="case-studies.html"
                        >Online Store</a
                      >
                    </li>
                    <li>
                      <a class="nav-link" href="#"> About </a>
                    </li>
                    <li>
                      <a
                        href="contact.html"
                        class="rts-btn btn-primary wow my-btn btn-border"
                      >
                        Book tee time
                        <img
                          class="injectable"
                          src="assets/images/service/icons/13.svg"
                          alt="arrow"
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-header", Header);
