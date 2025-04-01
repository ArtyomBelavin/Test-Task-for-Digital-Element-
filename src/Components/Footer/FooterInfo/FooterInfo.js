import './footerInfo.scss';

class FooterInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container">
            <div class="footer__info">
                <div class="footer__text">
                    <h2 class="footer__title">
                        Intersted to work <br>
                        with our team?
                    </h2>
                    <p class="footer__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div class="footer__btn--wrapper">
                    <button class="footer__btn" id="openModal">Let’s Talk</button>
                </div>
            </div>
        </div>
        <div class="footer__spacer"></div>

        <div id="modal" class="modal" style="display: none;">
            <div class="modal__content">
                <span class="modal__close" id="closeModal">&times;</span>
                <form class="form" id="contactForm" action="/submit" method="POST">
                    <h3 class="form__title">SEND US MESSAGE</h3>
                    <label class="form__label" for="name">
                        Full Name
                        <input class="form__input" type="text" name="name" id="name" placeholder="Your Name">
                        <span class="form__error" id="nameError"></span>
                    </label>
                    <label class="form__label" for="email">
                        Email
                        <input class="form__input" type="email" name="email" id="email" placeholder="Your Email">
                        <span class="form__error" id="emailError"></span>
                    </label>
                    <label class="form__label" for="description">
                        Message
                        <textarea class="form__description" name="description" id="description"
                            placeholder="Your Message"></textarea>
                        <span class="form__error" id="descriptionError"></span>
                    </label>
                    <button class="form__btn" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    `;

    this.initModal();
  }

  initModal() {
    const modal = this.querySelector('#modal');
    const openModalBtn = this.querySelector('#openModal');
    const closeModalBtn = this.querySelector('#closeModal');
    const form = this.querySelector('#contactForm');
    const body = document.body;

    function openModal() {
      modal.style.display = 'flex';
      body.classList.add('modal-open');
    }

    function closeModal() {
      modal.style.display = 'none';
      body.classList.remove('modal-open');
    }

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.validateForm()) {
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData);
        alert(
          `Отправляемые данные:\nName: ${formDataObj.name}\nEmail: ${formDataObj.email}\nMessage: ${formDataObj.description}`,
        );
        fetch('/submit', {
          method: 'POST',
          body: formData,
        })
          .then(() => {
            form.reset();
            closeModal();
          })
          .catch((error) => {
            console.error('Form submission error:', error);
          });
      }
    });
  }

  validateForm() {
    let isValid = true;
    const name = this.querySelector('#name');
    const email = this.querySelector('#email');
    const description = this.querySelector('#description');
    const nameError = this.querySelector('#nameError');
    const emailError = this.querySelector('#emailError');
    const descriptionError = this.querySelector('#descriptionError');

    nameError.textContent = '';
    emailError.textContent = '';
    descriptionError.textContent = '';

    if (name.value.trim() === '') {
      nameError.textContent = 'Full Name is required';
      isValid = false;
    }

    if (email.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.textContent = 'Valid Email is required';
      isValid = false;
    }

    if (description.value.trim() === '') {
      descriptionError.textContent = 'Message is required';
      isValid = false;
    }

    return isValid;
  }
}

customElements.define('footer-info', FooterInfo);
