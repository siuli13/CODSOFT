
function handleSubmit(event) {
  event.preventDefault();
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="password"]').value;
  var contact = document.querySelector('input[name="contact"]').value;
  var address = document.querySelector('input[name="address"]').value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Contact:", contact);
  console.log("Address:", address);

  event.target.reset();
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function calculateBMR() {
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const activityLevel = document.getElementById('activity').value;
  let bmr = 0;

  switch (activityLevel) {
    case 'sedentary':
      bmr = 1.2 * (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      break;
    case 'lightlyActive':
      bmr = 1.375 * (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      break;
    case 'moderatelyActive':
      bmr = 1.55 * (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      break;
    case 'veryActive':
      bmr = 1.725 * (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      break;
    case 'extraActive':
      bmr = 1.9 * (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      break;
    default:
      break;
  }

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your Basal Metabolic Rate (BMR) is: ${bmr.toFixed(2)} calories per day.`;
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact form");
  var nameInput = form.querySelector('input[name="name"]');
  var emailInput = form.querySelector('input[name="email"]');
  var messageInput = form.querySelector('textarea[name="message"]');
  var submitBtn = form.querySelector("a");
  var mapContainer = document.querySelector(".contact .map");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      var formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      };

      sendFormData(formData);
    }
  });

  function validateForm() {
    return true;
  }

  function sendFormData(formData) {
    fetch("/your-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(function (response) {
        console.log("Form data sent successfully!");
      })
      .catch(function (error) {
        console.error("An error occurred while sending form data:", error);
      });
  }

  function initMap() {

    var map = new google.maps.Map(mapContainer, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  function loadGoogleMapsAPI() {
    var script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  }

  loadGoogleMapsAPI();
});
