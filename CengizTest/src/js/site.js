// Import page-specific modules
import { initHomePageFunctionality } from './pages/home.js';

// Bootstrap utilities
function initBootstrapComponents() {
  // Initialize tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (window.bootstrap && window.bootstrap.Tooltip) {
    [...tooltipTriggerList].map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
  }
  
  // Initialize popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  if (window.bootstrap && window.bootstrap.Popover) {
    [...popoverTriggerList].map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Document ready! Initializing components...');
  
  // Initialize Bootstrap components
  initBootstrapComponents();
  
  // Initialize page-specific functionality
  initHomePageFunctionality();
});

// Export functions to use elsewhere if needed
export { initBootstrapComponents };