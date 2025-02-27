/**
 * Home sayfası için özel JavaScript fonksiyonelliği
 */

/**
 * AJAX ile sunucudan veri çeken fonksiyon
 * @param {HTMLElement} resultElement - Sonucu göstereceğimiz element
 */
function fetchDataFromServer(resultElement) {
  resultElement.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
  
  // jQuery AJAX kullanımı
  if (window.jQuery) {
    const $ = window.jQuery;
    
    $.ajax({
      url: '/Home/GetData',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        displayData(data, resultElement);
      },
      error: function(xhr, status, error) {
        resultElement.innerHTML = '<div class="alert alert-danger">Error: ' + error + '</div>';
      }
    });
  } else {
    // Vanilla JS fetch API (jQuery alternatifi)
    fetch('/Home/GetData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayData(data, resultElement);
      })
      .catch(error => {
        resultElement.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
      });
  }
}

/**
 * Sunucudan gelen veriyi görüntüleyen fonksiyon
 * @param {Object} data - Sunucudan gelen veri 
 * @param {HTMLElement} targetElement - Sonucu göstereceğimiz element
 */
function displayData(data, targetElement) {
  let html = '<div class="alert alert-success">';
  html += '<p><strong>Message:</strong> ' + data.message + '</p>';
  html += '<p><strong>Timestamp:</strong> ' + data.timestamp + '</p>';
  html += '<p><strong>Items:</strong></p><ul class="list-group mb-3">';
  
  data.items.forEach(function(item) {
    html += '<li class="list-group-item">' + item + '</li>';
  });
  
  html += '</ul></div>';
  
  targetElement.innerHTML = html;
}

/**
 * Home sayfası için bütün özellikleri başlatan ana fonksiyon
 */
export function initHomePageFunctionality() {
  console.log('Initializing home page functionality...');
  
  const homePage = document.querySelector('.text-center h1.display-4');
  if (!homePage) {
    // Home sayfasında değilsek işlem yapmıyoruz
    return;
  }
  
  // Ana sayfada olduğumuzu belirtmek için body'e sınıf ekliyoruz
  document.body.classList.add('home-page');
  
  // AJAX butonunu başlatıyoruz
  const exampleButton = document.getElementById('exampleButton');
  const ajaxResult = document.getElementById('ajaxResult');
  
  if (exampleButton && ajaxResult) {
    exampleButton.addEventListener('click', () => fetchDataFromServer(ajaxResult));
  }
}