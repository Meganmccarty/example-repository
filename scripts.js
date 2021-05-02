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
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content")
//const images = document.getElementsByClassName("hover-shadow");
const closeButton = document.getElementById("close");

/*
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        lightbox.style.display = 'flex';
        let imagesCopy = images[i].cloneNode()
        lightboxContent.appendChild(imagesCopy);

        closeButton.addEventListener('click', function() {
            lightbox.style.display = 'none';
            lightboxContent.removeChild(imagesCopy);
        })
    })
}
*/
const figures = document.getElementsByClassName("figure");

for (let i = 0; i < figures.length; i++) {
    let figureImage = figures[i].firstElementChild;
    let figureDescription = figures[i].lastElementChild;
    let text = figureDescription.textContent;
    let imageCopy = figureImage.cloneNode();
    let descriptionCopy = figureDescription.cloneNode();
    figureImage.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        descriptionCopy.style.display = 'flex';
        descriptionCopy.textContent = text;
        lightboxContent.appendChild(imageCopy);
        lightboxContent.appendChild(descriptionCopy);
        
        closeButton.addEventListener('click', function() {
            lightbox.style.display = 'none';
            lightboxImage = lightboxContent.firstElementChild;
            lightboxDescription = lightboxContent.lastElementChild;
            lightboxContent.removeChild(lightboxImage);
            lightboxContent.removeChild(lightboxDescription);
        })
    })
}
