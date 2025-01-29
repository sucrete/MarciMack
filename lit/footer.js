import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class Footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="gradient-footer-wrapper">
        <!-- rts footer area start -->
        <div class="rts-footer-area rts-section-gapTop pb--80">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="logo-area">
                  <a href="index.html" class="logo">
                    <img class="footer-logo" src="assets/images/logo/MM-logo-all-green.svg" alt="logo" />
                  </a>
                  <p class="disc">
                    Luminous is a leading IT solutions company that provides
                    innovative technology services to businesses of all sizes.
                  </p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row g-5">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="single-nav-area-footer">
                      <p class="parent">Services</p>
                      <ul>
                        <li>
                          <a href="technologies-service.html">Technologies</a>
                        </li>
                        <li>
                          <a href="ai-learning-service.html">Ai Learning</a>
                        </li>
                        <li><a href="it-strategies.html">IT Strategies</a></li>
                        <li>
                          <a href="it-consulting-service.html">It Consulting</a>
                        </li>
                        <li>
                          <a href="management-service.html">Management</a>
                        </li>
                        <li>
                          <a href="service-single.html">Cloud Migration</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="single-nav-area-footer">
                      <p class="parent">Company</p>
                      <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="career.html">Careers</a></li>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="blog-grid.html">News</a></li>
                        <li><a href="partner.html">Partner</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="single-nav-area-footer">
                      <p class="parent">Industrys</p>
                      <ul>
                        <li>
                          <a href="construction-industry.html">Construction</a>
                        </li>
                        <li>
                          <a href="healthcare-industry.html">Healthcare</a>
                        </li>
                        <li><a href="ecommerce-industry.html">Ecommerce</a></li>
                        <li><a href="fintech-industry.html">Fintech</a></li>
                        <li><a href="logistic-industry.html">Logistic</a></li>
                        <li>
                          <a href="travel-industry.html">Travel Industry</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="single-nav-area-footer">
                      <p class="parent">Legal</p>
                      <ul>
                        <li><a href="terms-of-use.html">Terms</a></li>
                        <li><a href="privacy-policy.html">Privacy</a></li>
                        <li><a href="cookies-policy.html">Cookies</a></li>
                        <li><a href="faq.html">Faq's</a></li>
                        <li>
                          <a href="free-consultation.html">Consultation</a>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- rts footer area end -->

        <!-- rts copyright area start -->
        <div class="rts-copyright-area-one">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright-wrapper">
                  <p>Copyright © The Golf Course at MariMack ${new Date().getFullYear()}</p>
                  <div class="social-copyright-area">
                    <ul>
                      <li>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- rts copyright area end -->
      </div>
    `;
  }
}
customElements.define("my-footer", Footer);
