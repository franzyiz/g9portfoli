function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Add this to your existing script.js file

// Function to handle dark mode toggle
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Store the dark mode state in localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Function to apply dark mode on page load
function applyDarkMode() {
    const body = document.body;
    const darkMode = localStorage.getItem('darkMode');

    // Apply dark mode if it was enabled before
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
}

// Add event listener to apply dark mode on page load
document.addEventListener('DOMContentLoaded', function() {
    applyDarkMode();
});

