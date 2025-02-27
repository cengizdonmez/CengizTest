// Import SCSS
import './scss/site.scss';

// Import JS
import './js/site.js';

// Import Bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

// Import jQuery and ensure it's globally available
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Log to verify jQuery is loaded
console.log('jQuery loaded:', typeof $, typeof window.$, typeof window.jQuery);

// Import FontAwesome if needed
import '@fortawesome/fontawesome-free/css/all.css';

// Your custom initialization code
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded - Frontend ready AAAAABBB');
});