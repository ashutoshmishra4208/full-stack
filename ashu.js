// Toggle Menu
document.getElementById('menu-button').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Handle Login Form
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    alert(`Welcome, ${username}!`);

    // Redirect to another page after login form is submitted
    document.getElementById("myButton").addEventListener("click", function() {
        window.location.href = "https://example.com"; // Redirect to example.com or a different page
    });

    // Custom Action after form submission
    document.getElementById("myButton").addEventListener("click", function() {
        console.log("Performing some action...");
        // Add any additional custom code here
    });
});

// Redirect to a different page when Get Started button is clicked
document.getElementById("get-started-button").addEventListener("click", function() {
    window.location.href = "your_target_page.html"; // Replace with the actual target URL
});
