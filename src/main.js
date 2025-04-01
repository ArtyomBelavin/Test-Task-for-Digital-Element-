import './reset.scss';
import './index.scss';
import './Components/Header/App-Header.js';
import './Components/Main/App-main.js';
import './Components/Footer/App-footer.js';

document.querySelector('#app').innerHTML = `
  <app-header> </app-header>
  <app-main> </app-main>
  <app-footer></app-footer>
`;
