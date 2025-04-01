import './Sections/HeroSection/HeroSection';
import './Sections/InfoSection/InfoSection';
import './Sections/ClientSection/ClientSection';

class AppMain extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main class="main">
          <hero-section> </hero-section>
          <info-section> </info-section>
          <client-section> </client-section>
        </main>
    `;
  }
}

customElements.define('app-main', AppMain);
