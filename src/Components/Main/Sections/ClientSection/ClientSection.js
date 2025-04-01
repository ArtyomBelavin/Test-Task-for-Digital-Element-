import './clientSection.scss';

class ClientSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <section class="client">
            <div class="container">
                <div class="client__info">
                    <div class="client__text">
                        <h2 class="client__title">
                            Our Beloved <br>
                            Client
                        </h2>
                        <p class="client__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div class="clients-grid">
                        <div class="client__logo">LOGO CLIENT 1</div>
                        <div class="client__logo">LOGO CLIENT 2</div>
                        <div class="client__logo">LOGO CLIENT 3</div>
                        <div class="client__logo">LOGO CLIENT 4</div>
                        <div class="client__logo">LOGO CLIENT 5</div>
                        <div class="client__logo">LOGO CLIENT 6</div>
                        <div class="client__logo">LOGO CLIENT 7</div>
                        <a href="#" class="client__logo more__clients">More Clients</a>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('client-section', ClientSection);
