import './infoSection.scss';
import cardOne from '../../../../Assets/images/card-1.png';
import cardTwo from '../../../../Assets/images/card-2.png';
import cardThree from '../../../../Assets/images/card-3.png';

class InfoSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <section class="info">
            <div class="container">
                <div class="grid__container">
                    <div class="card__text">
                        <h2 class="card__text__title">
                            What we do to help
                            our client grow in
                            digital era,
                        </h2>
                    </div>
                    <div class="card">
                        <div class="card__image">
                            <img class="card__img--first" src=${cardOne} alt="cardOne">
                        </div>
                        <div class="card__text">
                            <h3 class="card__title">
                                Bring Technology To Your <br>
                                Comfrotable Home
                            </h3>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a class="card__link" href="#">Learn more
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
                                </svg>      
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__image">
                            <img src=${cardTwo} alt="cardTwo">
                        </div>
                        <div class="card__text">
                            <h3 class="card__title">
                                Make Your business To Be
                                Better Famous In Internet
                            </h3>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <a class="card__link" href="#">Learn more
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
                                </svg>    
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__image">
                            <img src=${cardThree} alt="cardThree">
                        </div>
                        <div class="card__text">
                            <h3 class="card__title">
                                Bring Technology To Your <br>
                                Comfrotable Home
                            </h3>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a class="card__link" href="#">Learn more
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
                                </svg>    
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('info-section', InfoSection);
