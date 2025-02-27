// Stil dosyalarını import ediyoruz
import './scss/site.scss';

// Bootstrap'i import ediyoruz
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

// jQuery'i import ediyoruz ve global olarak tanımlıyoruz
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// FontAwesome'u import ediyoruz
import '@fortawesome/fontawesome-free/css/all.css';

// Sayfa modüllerini import ediyoruz
import { initCommonFunctionality } from './js/common.js';
import { initHomePageFunctionality } from './js/pages/home.js';
import { initPrivacyPageFunctionality } from './js/pages/privacy.js';

// DOM yüklendiğinde uygulamayı başlatıyoruz
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded - Frontend ready!');
  
  // Ortak fonksiyonelliği başlatıyoruz
  initCommonFunctionality();
  
  // Sayfa bazlı fonksiyonelliği başlatıyoruz
  initHomePageFunctionality();
  initPrivacyPageFunctionality();
});