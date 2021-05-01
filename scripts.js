// Divs containing the photos for each insect type
const butterflies = document.getElementById("butterflies");
const moths = document.getElementById("moths");
const beetles = document.getElementById("beetles");

// Buttons for each insect type
const butterfliesButton = document.getElementById("butterfly-btn");
const mothsButton = document.getElementById("moth-btn");
const beetlesButton = document.getElementById("beetle-btn");

// Functions for switching between photo groups
butterfliesButton.addEventListener('click', function() {
    butterflies.style.display = 'flex';
    moths.style.display = 'none';
    beetles.style.display = 'none';
})

mothsButton.addEventListener('click', function() {
    butterflies.style.display = 'none';
    moths.style.display = 'flex';
    beetles.style.display = 'none';
})

beetlesButton.addEventListener('click', function() {
    butterflies.style.display = 'none';
    moths.style.display = 'none';
    beetles.style.display = 'flex';
})

// Clicking an image opens the lightbox
const images = document.getElementsByClassName("hover-shadow");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        lightbox.style.display = 'flex';
    })
}

// Variables and function for closing lightbox
const closeButton = document.getElementById("close");
const lightbox = document.getElementById("lightbox");

closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none';
})