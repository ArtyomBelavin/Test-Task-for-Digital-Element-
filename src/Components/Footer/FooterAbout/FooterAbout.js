import './footerAbout.scss';

class FooterAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container">
            <div class="footer__about">
                <ul class="footer__contacts">
                    <li>
                        <a class="footer__logo" href="#">
                            <img src="./logo-footer.svg" alt="Afrianska">
                            Afrianska
                        </a>
                    </li>
                    <li>
                        <p>
                            A.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </li>
                    <li>
                        <a href="tel:+62-812-7313-4321"> T.</a>
                        <a href="tel:+62-812-7313-4321">

                            +62-812-7313-4321
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hello.afrian@gmail.com">E</a>
                        <a href="mailto:hello.afrian@gmail.com">
                            hello.afrian@gmail.com
                        </a>
                    </li>
                </ul>
                <div class="footer__about__right">
                    <ul class="footer__contacts">
                        <li>
                            <h3 class="footer__contacts__title">About US</h3>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">What We Do</a>
                        </li>
                        <li>
                            <a href="#">Project</a>
                        </li>
                        <li>
                            <a href="#">How It Work With Us</a>
                        </li>
                    </ul>

                    <ul class="footer__contacts">
                        <li>
                            <h3 class="footer__contacts__title">Follow US</h3>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="footer__copyright">
                2019 © Afrianska. All rights reserved.
            </p>
        </div>
    `;
  }
}

customElements.define('footer-about', FooterAbout);
