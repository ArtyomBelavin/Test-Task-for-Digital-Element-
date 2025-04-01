import './header.scss';

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <header class="header">
             <a href="#"><img src="./logo.svg" alt="Logotype"></a>
            <button class="header__btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
          </header>
        `;
  }
}

customElements.define('app-header', AppHeader);
