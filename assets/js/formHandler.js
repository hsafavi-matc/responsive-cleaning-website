document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    fetch('https://u0klcpjxt4.execute-api.us-east-1.amazonaws.com/default', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
});
