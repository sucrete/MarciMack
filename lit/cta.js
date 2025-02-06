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
                <div class="shape-area">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/cta/01.svg"
                    alt="cta-area"
                  />
                </div>
                <div class="left-area">
                  <h3 class="title wow fadeInUp" data-wow-delay=".1s">
                    Have 2 or More Players?
                  </h3>
                  <p class="wow fadeInUp" data-wow-delay=".3s">
                    Click here to book online and save.
                  </p>
                  <a
                    href="contact.html"
                    class="rts-btn btn-primary wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Book tee time
                    <img
                      class="injectable"
                      src="assets/images/service/icons/13.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
                <div class="right wow move-out" data-wow-offset="140">
                  <img
                    class="cta-tartan"
                    loading="lazy"
                    rel="preload"
                    src="assets/images/golf/tartan-2.svg"
                    alt=""
                  />
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
