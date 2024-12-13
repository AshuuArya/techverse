// Function to generate a random rotation value between specified ranges
function getRandomRotation(degreesMin, degreesMax) {
  return Math.random() * (degreesMax - degreesMin) + degreesMin + 'deg';
}

// Set the random rotations for each button
document.documentElement.style.setProperty('--random-rotation-1', getRandomRotation(7, 7));
document.documentElement.style.setProperty('--random-rotation-2', getRandomRotation(-9, -6));
document.documentElement.style.setProperty('--random-rotation-3', getRandomRotation(3, 6));
document.documentElement.style.setProperty('--random-rotation-4', getRandomRotation(-6, -5));

// Function to check and add visibility class to fade-in elements
document.addEventListener('DOMContentLoaded', function () {
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkFadeElements() {
    fadeElements.forEach(element => element.classList.toggle('visible', element.getBoundingClientRect().top < window.innerHeight));
  }

  checkFadeElements(); // Initial check when the page loads
  window.addEventListener('scroll', checkFadeElements); // Check on scroll
});

// Add 'scrolled' class to header on scroll
window.addEventListener('scroll', function () {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 22);
});

// Function to apply float-in animation to elements
document.addEventListener('DOMContentLoaded', function () {
  const elementsToShow = document.querySelectorAll('.float-in');

  function loop() {
    elementsToShow.forEach(element => element.classList.toggle('float-in-show', isElementInViewport(element)));
  }

  loop(); // Initial check
  window.addEventListener('scroll', loop); // Check on scroll
});

// Function to add fade-in class to footer on scroll
document.addEventListener('DOMContentLoaded', function () {
  const footerContainer = document.getElementById('footer-container');

  function fadeInFooter() {
    footerContainer.classList.toggle('fade-in', isInViewport(footerContainer));
  }

  window.addEventListener('load', fadeInFooter); // Initial check when the page loads
  window.addEventListener('scroll', fadeInFooter); // Check on scroll
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to generate a random direction for the float-in animation
function getRandomDirection() {
  var directions = ['float-in-left', 'float-in-right', 'float-in-up', 'float-in-down'];
  return directions[Math.floor(Math.random() * directions.length)];
}

// Function to float in the image when it's in the viewport
// Function to float in the image when at least 10% of it is visible
function floatInImage() {
  var imageContainers = document.querySelectorAll('.fakeimg');
  imageContainers.forEach(function (imageContainer) {
    var rect = imageContainer.getBoundingClientRect();
    var threshold = window.innerHeight * 0.1; // 10% of the viewport height
    if (rect.top < window.innerHeight - threshold && rect.bottom >= threshold) {
      var randomDirection = getRandomDirection();
      imageContainer.classList.add('float-in-show', randomDirection);
    } else {
      imageContainer.classList.remove('float-in-show', 'float-in-left', 'float-in-right', 'float-in-up', 'float-in-down');
    }
  });
}


// Initial check when the page loads
floatInImage();

// Check on scroll
window.addEventListener('scroll', floatInImage);

document.getElementById('googlePayButton').addEventListener('click', function() {
  const paymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'UPI',
        parameters: {
          payeeAddress: '6395012557@okicici',
          payeeName: 'Your Name',
          transactionNote: 'Payment for goods/services',
          amount: {
            currencyCode: 'INR',
            value: '10.00'
          }
        },
        tokenizationSpecification: {
          type: 'DIRECT',
        }
      }
    ],
  
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '10.00',
      currencyCode: 'INR',
      countryCode: 'IN'
    }
  };

  const paymentsClient = new google.payments.api.PaymentsClient({
    environment: 'TEST' // Change to 'PRODUCTION' for production environment
  });

  paymentsClient.loadPaymentData(paymentDataRequest)
    .then(function(paymentData) {
      console.log('Payment successful:', paymentData);
      // Handle successful payment (e.g., update UI, process order, etc.)
      alert('Payment successful!');
    })
    .catch(function(error) {
      console.error('Error:', error);
      // Handle errors (e.g., display error message to user)
      alert('Payment failed: ' + error);
    });
});
// JavaScript to animate list items one by one
const tabItems = document.querySelectorAll('.tab li');


