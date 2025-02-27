/**
 * Ortak sayfa fonksiyonelliği
 * Bootstrap bileşenlerini başlatır ve sayfa genelinde kullanılan özellikleri içerir
 */

/**
 * Bootstrap bileşenlerini başlatan fonksiyon
 */
function initBootstrapComponents() {
    // Tooltip'leri başlatıyoruz
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (window.bootstrap && window.bootstrap.Tooltip) {
      [...tooltipTriggerList].map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
    }
    
    // Popover'ları başlatıyoruz
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    if (window.bootstrap && window.bootstrap.Popover) {
      [...popoverTriggerList].map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));
    }
  }
  
  /**
   * Navbar davranışını özelleştiren fonksiyon
   * Kaydırma esnasında navbar görünümünü değiştirir
   */
  function initNavbarBehavior() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
  
  /**
   * Tüm ortak sayfa fonksiyonelliğini başlatan ana fonksiyon
   */
  export function initCommonFunctionality() {
    console.log('Initializing common functionality...');
    
    // Bootstrap bileşenlerini başlatıyoruz
    initBootstrapComponents();
    
    // Navbar davranışını başlatıyoruz
    initNavbarBehavior();
    
    // Diğer ortak işlevleri buraya ekleyebilirsiniz
  }