// CSS import
import '../css/main.css';

// jQuery global setup
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// App initialization
$(document).ready(function() {
  console.log('App ready!');

  // Mobile menu toggle
  $('#mobile-menu-button').on('click', function() {
    $('#mobile-menu').toggleClass('hidden');
  });

  // Alert dismissal
  $(document).on('click', '.alert-dismissible .btn-close', function() {
    $(this).closest('.alert').fadeOut();
  });

  // --- Home Page: Collapse toggle ---
  $('#toggleCollapse').on('click', function() {
    $('#collapseContent').slideToggle();
  });

  // --- Home Page: AJAX example ---
  $('#ajaxButton').on('click', function() {
    const $btn = $(this);
    const $result = $('#ajaxResult');

    $btn.prop('disabled', true).text('Loading...');

    // Simulate AJAX call
    setTimeout(function() {
      $result.html('<div class="alert alert-success">Data loaded successfully! jQuery is working perfectly.</div>');
      $btn.prop('disabled', false).text('Load Data');
    }, 1000);
  });

  // Your custom code here...
});