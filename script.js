document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://backend.tabl.page/emails/register/', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            this.reset();
            alert('Registration successful! Please allow up to 48 hours for account creation.');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(`Error! ${error.message}`);
        });
});
