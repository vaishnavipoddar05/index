// Get references to elements
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

// Add event listener for the search input
searchInput.addEventListener('keyup', function() {
    const searchQuery = searchInput.value.toLowerCase();

    // Loop through each card and check if the h2 text matches the search query
    cards.forEach(card => {
        const cardHeading = card.querySelector('h2').textContent.toLowerCase();
        
        // Show or hide the card based on the search query
        if (cardHeading.includes(searchQuery)) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});
