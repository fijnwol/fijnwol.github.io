document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                contentDiv.innerHTML = '<p>Error loading page.</p>';
            });
    }

    // Load the home page by default
    loadPage('home');
});
