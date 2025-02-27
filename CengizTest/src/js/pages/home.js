// src/js/pages/home.js
// Home sayfasına özel JavaScript işlevselliği

/**
 * AJAX ile sunucudan veri çekmek için örnek fonksiyon
 */
export function initHomePageFunctionality() {
    const exampleButton = document.getElementById('exampleButton');
    
    if (!exampleButton) {
      return; // Eğer buton yoksa (Home sayfasında değilsek), işlem yapma
    }
    
    exampleButton.addEventListener('click', function() {
      const ajaxResult = document.getElementById('ajaxResult');
      ajaxResult.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
      
      // jQuery AJAX kullanımı
      if (window.jQuery) {
        const $ = window.jQuery;
        
        $.ajax({
          url: '/Home/GetData',
          type: 'GET',
          dataType: 'json',
          success: function(data) {
            displayData(data, ajaxResult);
          },
          error: function(xhr, status, error) {
            ajaxResult.innerHTML = '<div class="alert alert-danger">Error: ' + error + '</div>';
          }
        });
      } else {
        // Vanilla JS fetch API (jQuery alternatifi)
        fetch('/Home/GetData')
          .then(response => response.json())
          .then(data => {
            displayData(data, ajaxResult);
          })
          .catch(error => {
            ajaxResult.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
          });
      }
    });
  }
  
  /**
   * Sunucudan gelen veriyi görüntülemek için yardımcı fonksiyon
   */
  function displayData(data, targetElement) {
    let html = '<div class="alert alert-success">';
    html += '<p><strong>MessageBB:</strong> ' + data.message + '</p>';
    html += '<p><strong>Timestamp:</strong> ' + data.timestamp + '</p>';
    html += '<p><strong>Items:</strong></p><ul>';
    
    data.items.forEach(function(item) {
      html += '<li>' + item + '</li>';
    });
    
    html += '</ul></div>';
    
    targetElement.innerHTML = html;
}