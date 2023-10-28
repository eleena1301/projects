const form = document.getElementById('signup-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone= document.getElementById('phone').value;
    if (name === '' || email === '' || password === '' || phone ==='') {
        alert('Please fill in all fields.');
    } else {
        // You can send the form data to a server for processing here.
        // For now, let's display the form data in an alert.
        alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}\n Phone: $(phone)`);
    }
});
