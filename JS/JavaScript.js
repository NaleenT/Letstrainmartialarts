document.body.classList.add('fade-out');

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function openForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.style.display = "block";
    }
}

function closeForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Create falling image element
    var fallingImage = document.createElement("img");
    fallingImage.src = "./Images/Satellite.png";
    fallingImage.alt = "Falling Image";
    fallingImage.classList.add("falling-image");

    // Append falling image to the #home section
    var homeSection = document.getElementById("home");
    homeSection.appendChild(fallingImage);

    // Remove falling image after animation ends
    fallingImage.addEventListener("animationend", function () {
        // Remove the falling image from the DOM
        homeSection.removeChild(fallingImage);

        // Add a new image that fills the container
        var fillImage = document.createElement("img");
        fillImage.src = "./Images/Satellite.png";
        fillImage.alt = "Filling Image";
        fillImage.style.width = "20%";
        fillImage.style.height = "20%";
        fillImage.style.objectFit = "scale-down"; // Adjust to your needs (cover, contain, etc.)
        fillImage.classList.add("filling-image");

        // Append the filling image to the #home section
        homeSection.appendChild(fillImage);
    });
});

$(document).ready(function () {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
});