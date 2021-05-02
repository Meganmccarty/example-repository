// Divs containing the photos for each insect type stored in variables
const butterflies = document.getElementById("butterflies");
const moths = document.getElementById("moths");
const beetles = document.getElementById("beetles");

// Buttons for each insect type stored in variables
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

// Variables for lightbox
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content")
const closeButton = document.getElementById("close");

// Array containing all divs containing each photo and description
const figures = document.getElementsByClassName("figure");

// Function for lightbox
for (let i = 0; i < figures.length; i++) {

    // Get the <img> and <p> elements within div with class name "figure"
    let figureImage = figures[i].firstElementChild;
    let figureDescription = figures[i].lastElementChild;
    let text = figureDescription.textContent;

    // Copy the <img> and <p> elements into new variables
    // Otherwise, appendChild() will just move the elements on the page instead of copying them
    let imageCopy = figureImage.cloneNode();
    let descriptionCopy = figureDescription.cloneNode();

    // Onclick event for each <img>
    figureImage.addEventListener('click', function() {
        
        // Lightbox and description now visible
        lightbox.style.display = 'flex';
        descriptionCopy.style.display = 'flex';
        descriptionCopy.textContent = text;

        // Append <img> and <p> to lightbox
        lightboxContent.appendChild(imageCopy);
        lightboxContent.appendChild(descriptionCopy);
        
        // Onclick event for close button
        closeButton.addEventListener('click', function() {

            // Lightbox disappears
            lightbox.style.display = 'none';

            // Select <img> and <p> in lightbox
            lightboxImage = lightboxContent.firstElementChild;
            lightboxDescription = lightboxContent.lastElementChild;

            // Remove <img and <p> in lightbox
            lightboxContent.removeChild(lightboxImage);
            lightboxContent.removeChild(lightboxDescription);
        })
    })
}
