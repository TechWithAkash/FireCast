document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('predictionForm');
  const modal = document.getElementById('resultModal');
  const closeBtn = document.querySelector('.close');
  const resultSpan = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(form);

    fetch('/predict', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      resultSpan.textContent = data.result; // Assuming the response contains a JSON object with a 'result' field
      modal.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
