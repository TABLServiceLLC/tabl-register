const form = document.getElementById('registrationForm');
const howYouHeard = document.getElementById('howYouHeard');
const otherMethod = document.getElementById('otherMethod');
const salesTeamMember = document.getElementById('salesTeamMember');

howYouHeard.addEventListener('change', function (event) {
    otherMethod.classList.remove('show');
    salesTeamMember.classList.remove('show');
    if (this.value === 'other') otherMethod.classList.add('show');
    if (this.value === 'salesperson') salesTeamMember.classList.add('show');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://backend.tabl.page/emails/register/', {
        body: formData,
        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Secret': 'Spark Apps, LLC Resurrection',
            'Content-Type': 'multipart/form-data',
        },
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
