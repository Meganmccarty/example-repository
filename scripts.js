// Divs containing the photos for each insect type
const butterflies = document.getElementById("butterflies");
const moths = document.getElementById("moths");

// Buttons for each insect type
const butterfliesButton = document.getElementById("butterfly-btn");
const mothsButton = document.getElementById("moth-btn");

butterfliesButton.addEventListener('click', function() {
    butterflies.style.display = 'flex';
    moths.style.display = 'none';
})

mothsButton.addEventListener('click', function() {
    moths.style.display = 'flex';
    butterflies.style.display = 'none';
})