
/* MOBILE NAVIGATION MENU */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    // One function to close the menu consistently
    function closeMenu() {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

    // Open or close the menu button
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            navLinks.classList.add("active");
            document.body.classList.add("menu-open");

            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );
        }
    });

    // Close the menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    // Close the menu when clicking outside it
    document.addEventListener("click", function (event) {
        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);
        const menuIsOpen = navLinks.classList.contains("active");

        if (
            menuIsOpen &&
            !clickedInsideMenu &&
            !clickedToggle
        ) {
            closeMenu();
        }
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", function (event) {
        const menuIsOpen = navLinks.classList.contains("active");

        if (event.key === "Escape" && menuIsOpen) {
            closeMenu();
            menuToggle.focus();
        }
    });
}


/* WHATSAPP ENQUIRY FORM */

const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {

event.preventDefault();

const form = event.currentTarget;

// Check that the form fields are valid
if (!form.checkValidity()) {
    form.reportValidity();
    return;
}

const formMessage = document.getElementById("form-message");


const submitButton = document.getElementById("submit-enquiry");

if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Opening WhatsApp...";
}



        // Collect the customer's details
        const name =
            form.querySelector('[name="fullName"]').value.trim();

        const email =
            form.querySelector('[name="email"]').value.trim();

        const phone =
            form.querySelector('[name="phone"]').value.trim();

        const serviceField =
            form.querySelector('[name="service"]');

        const service =
            serviceField.options[serviceField.selectedIndex].text;

        const destination =
            form.querySelector('[name="destination"]').value.trim();

        const date =
            form.querySelector('[name="travelDate"]').value || "Not specified";

        const message =
            form.querySelector('[name="message"]').value.trim();

        // Use your actual business WhatsApp number here.
        // This is the number you originally gave me.
        const whatsappNumber = "2348088505086";

        // Prepare the message for WhatsApp
        const enquiryMessage =
            `Hello Trip J Concierge Service!\n\n` +
            `I would like to make an enquiry.\n\n` +
            `Full Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Service: ${service}\n` +
            `Destination: ${destination}\n` +
            `Travel Date: ${date}\n` +
            `Message: ${message}`;

        // Create the WhatsApp link
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=` +
            encodeURIComponent(enquiryMessage);

        // Open WhatsApp with the prepared message
       
if (formMessage) {
    formMessage.textContent =
        "If WhatsApp opens, review your enquiry and press Send. " +
        "If it doesn't open, check your browser's pop-up settings.";
}


const whatsappWindow = window.open(
    whatsappURL,
    "_blank"
);

if (submitButton) {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Enquiry";
}


if (formMessage) {
    if (whatsappWindow) {
        formMessage.textContent =
            "Your enquiry is ready! Please review it in WhatsApp and press Send to contact Trip J.";

    } else {
        formMessage.textContent =
            "WhatsApp could not open. Please allow pop-ups or try again.";
    }
}


    });
}


const serviceSelect = document.querySelector(
    '#enquiry-form [name="service"]'
);

const serviceHelp = document.getElementById("service-help");

if (serviceSelect && serviceHelp) {
    function updateServiceHelp() {
        const service = serviceSelect.value;

        
        const descriptions = {
            flight: "Get help exploring flight options for your destination.",
            visa: "Get guidance on visa requirements and application documents.",
            airport: "Ask about VIP airport meet-and-greet and assistance services.",
            documents: "Get assistance with travel documentation and related requirements.",
            other: "Tell us what you need, and the Trip J team will guide you."
        };


        serviceHelp.textContent = descriptions[service] ||
            "Choose a service to see more information.";
    }

    serviceSelect.addEventListener("change", updateServiceHelp);
    updateServiceHelp();
}





/* TRIP J BACK-TO-TOP BUTTON */

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    if (!backToTop) return;

    let scrollTimer;

    function hideButton() {
        backToTop.classList.remove("visible");
    }

    window.addEventListener("scroll", function () {
        clearTimeout(scrollTimer);

        if (window.scrollY > 300) {
            backToTop.classList.add("visible");

            // Hide after scrolling stops
            scrollTimer = setTimeout(function () {
                hideButton();
            }, 1500);
        } else {
            hideButton();
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        hideButton();
    });
});

