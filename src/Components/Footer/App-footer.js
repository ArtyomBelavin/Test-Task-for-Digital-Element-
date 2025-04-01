import './FooterInfo/FooterInfo';
import './FooterAbout/FooterAbout';

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer"> 
        <footer-info></footer-info>
        <footer-about></footer-about>
    </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
