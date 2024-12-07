document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search"); // Target the search bar by its class
    const cards = document.querySelectorAll(".card"); // Get all the cards

    // Listen for input changes in the search bar
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase().trim();

        // Filter cards based on search input
        cards.forEach(card => {
            const cardText = card.innerText.toLowerCase(); // Get the text inside the card
            if (cardText.includes(searchText)) {
                card.style.display = "block"; // Show matching cards
            } else {
                card.style.display = "none"; // Hide non-matching cards
            }
        });
    });
});
