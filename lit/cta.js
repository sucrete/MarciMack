import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class CTA extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="rts-cts-area">
        <div class="container">
          <div class="row">
            <div class="col-gl-12">
              <div class="cta-one-wrapper">

                <!-- decorative squares start -->
                <!-- <div class="shape-area">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/cta/01.svg"
                    alt="cta-area"
                  />
                </div> -->
                <!-- decorative squares end -->

                <div class="left-area">
                  <h3 class="title wow fadeInUp" data-wow-delay=".1s">
                    Have 2 or More Players?
                  </h3>
                  <p class="wow fadeInUp" data-wow-delay=".3s">
                    Click here to book online and save.
                  </p>
                  <a
                    href="contact.html"
                    class="rts-btn btn-primary wow fadeInUp cta-button"
                    data-wow-delay=".3s"
                  >
                    Book tee time
                    <img
                      class="injectable"
                      src="assets/images/service/icons/13.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
                <div class="right" >
                 <div class="right-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-cta", CTA);
