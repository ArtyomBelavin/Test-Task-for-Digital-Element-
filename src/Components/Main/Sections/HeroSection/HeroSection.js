import './heroSection.scss';

class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <section class="hero">
            <div class="container">
                <div class="hero__text">
                    <h1 class="hero__title">
                        New Automation <br>
                        Tool for Your Home
                    </h1>
                    <p class="hero__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices
                        ut
                        mauris
                        tellus at. Posuere sollicitudin odio tellus elit.
                    </p>
                    <div class="hero__link__wrapper">
                        <a href="#" class="hero__link">See Our Project</a>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
