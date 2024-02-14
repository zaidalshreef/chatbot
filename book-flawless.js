//Hotjar Tracking Code for booking website
(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 3836584, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

/*
    Global variables section
*/

const PACKAGE_SESSION_TYPE_DURATION = " 3 ساعات ونصف";
const PACKAGE_SESSION_TYPE_TITLE = "الباقة المتكاملة للتطور المهني";

const EMAIL_VERIFICATION_MESSAGE = `في حال عدم وصول الرمز على علبة الوارد يرجى التحقق من خلال كتابة "Flawless" في البحث`;

const FLAWLESS_HOME_PAGE = "https://www.weflawless.co";

const FLAWLESS_BOOK_PAGE = "https://book.weflawless.co/"

const PACKAGE_MENTOR = "نواف%20الحربي";

const PACKAGE_SECOND_SESSION = "جلسة ٢ من الباقة (جلسة تطوير المهارات)";

const PACKAGE_THIRD_SESSION = "جلسة ٣ من الباقة (جلسة النمو المهني)";

const PACKAGE_FORTH_SESSION = "جلسة ٤ من الباقة (جلسة المتابعة)";


// let packagebookingTypes = document.querySelectorAll('.booking-type');

// Get all buttons with the class "btn.main-menu-btn"
var buttons = document.querySelectorAll(".btn.main-menu-btn");

/*
    End - Global variables section
*/

// Create WhatsApp sidebar as an HTML string
const whatsappSidebar = `<a id="whatsapp-sidebar" href="https://wa.me/966508151474" target="_blank">
    <div class="whatsapp-container">
        <svg width="20" height="20" viewBox="0 0 24 24" style="fill: var(--themePrimaryColor);">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
        </svg>
        <span style="margin-right: 5px; color: white;" class="whatsapp-text">واتساب</span>
    </div>
</a>`;

// Append the WhatsApp sidebar to the body
document.body.insertAdjacentHTML('beforeend', whatsappSidebar);


// Function to update the timeContainer text content for small screens
// Note: add the function to mutation observer
function updateTimeContainerSmall() {
    let timeContainerSmall = document.querySelector("#__layout > div > div > div > div > div > div.container > div:nth-child(1) > div:nth-child(2) > div > div > div.b-overlay-wrap.position-relative.p-1.sticky-loading-overlay > div > span > form > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.d-flex.justify-content-between.align-items-center > div > p.mx-1.m-0");

    if (timeContainerSmall) {
        let svg = timeContainerSmall.querySelector("svg");
        let textNode = svg ? svg.nextSibling : null;

        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.nodeValue = PACKAGE_SESSION_TYPE_DURATION;
        } else {
            console.log("Expected text node not found next to the SVG (Small Screen).");
        }
    } else {
        console.log("Time container not found for small screen");
    }
}

// Function to update the timeContainer text content for large screens
// Note: add the function to mutation observer
function updateTimeContainerLarge() {
    let timeContainerLarge = document.querySelector("#__layout > div > div > div > div > div > div.mt-4.container > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div.b-overlay-wrap.position-relative.p-1.sticky-loading-overlay > div > span > form > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.d-flex.justify-content-between.align-items-center > div > p.mx-1.m-0");

    if (timeContainerLarge) {
        let svg = timeContainerLarge.querySelector("svg");
        let textNode = svg ? svg.nextSibling : null;

        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.nodeValue = PACKAGE_SESSION_TYPE_DURATION;
        } else {
            console.log("Expected text node not found next to the SVG (Large Screen).");
        }
    } else {
        console.log("Time container not found for large screen");
    }
}



// Function to update the timeContainer text content
function updateTimeContainer() {
    let timeContainer = document.querySelector("#__layout > div > div > div > div > div > div.mt-4.container > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div.b-overlay-wrap.position-relative.p-1.sticky-loading-overlay > div > span > form > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.d-flex.justify-content-between.align-items-center > div > p.mx-1.m-0");

    if (timeContainer) {
        let svg = timeContainer.querySelector("svg");
        let textNode = svg ? svg.nextSibling : null;

        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.nodeValue = PACKAGE_SESSION_TYPE_DURATION;
        } else {
            console.log("Expected text node not found next to the SVG.");
        }
    } else {
        console.log("Time container not found");
    }
}


// Function to insert the check email message
function insertCheckEmailMsg() {
    const siblingP = document.querySelector('img + p[data-v-62b9ae33]');
    const existingCheckEmailMsg = document.querySelector('p.checkEmailMsgAdded');

    // Check if the check email message already exists
    if (!existingCheckEmailMsg) {
        const checkEmailMsg = `
                <p data-v-62b9ae33 class="mb-3 checkEmailMsgAdded" style="color: red;">
                    ${EMAIL_VERIFICATION_MESSAGE}
                </p>`;

        const checkEmailMsgDiv = document.createElement('div');
        checkEmailMsgDiv.innerHTML = checkEmailMsg;

        // Insert the message after the sibling <p> element
        if (siblingP) {
            siblingP.parentNode.insertBefore(checkEmailMsgDiv, siblingP.nextSibling);
        } else {
            console.error('The existing <p> element was not found.');
        }
    }
}

// Function to remove the check email message
function removeCheckEmailMsg() {
    const paragraph = document.querySelector('p.checkEmailMsgAdded');
    if (paragraph) {
        paragraph.remove();
    }
}

// Function to handle the email buttons
// Note: add the function to mutation observer
function handleEmailButtons() {
    // Select the buttons that leads to Email verfication
    const buttons = document.querySelectorAll('div button[data-v-62b9ae33]');
    buttons.forEach(button => {
        const buttonText = button.textContent.trim();

        // to hide email for registeration or signing up
        if (buttonText === "التحقق عبر البريد الالكتروني") {
            button.style.display = "none";
            const siblingDiv = button.previousElementSibling;
            if (siblingDiv && siblingDiv.tagName.toLowerCase() === 'div' && siblingDiv.textContent.trim() === "أو") {
                siblingDiv.style.display = "none";
            } else {
                console.error('Sibling div element not found or not of type "div".');
            }
        } else if (buttonText === "تحديث البريد الالكتروني") { // to show the email for updating the email in user profile
            button.style.display = "inline";
        }

        // shows the email verfication message when the user click on the email verfication button
        if (["تحديث البريد الالكتروني", "التحقق عبر البريد الالكتروني"].includes(buttonText)) {
            button.addEventListener('click', insertCheckEmailMsg);
        }

        // remove the email verfication message
        const removeButton = document.querySelector('button[data-v-62b9ae33].btn-link-dark');
        if (removeButton && removeButton.querySelector('span').textContent.trim() === "تغيير طريقة التحقق") {
            removeButton.addEventListener('click', removeCheckEmailMsg);
        }
    });
}


// Function to find the registered user phone number
function findPhoneNumber() {
    // Get all <legend> elements on the page
    var legends = document.querySelectorAll("legend");
    var phoneNumber;

    // Loop through each <legend> element
    for (var i = 0; i < legends.length; i++) {
        var legend = legends[i];

        // Check if the text inside the <legend> element is "رقم الجوال"
        if (legend.textContent.trim() === "رقم الجوال") {
            // Find the <div> element right after this <legend>

            // Function to find the next <div> element after the given <legend>
            function findNextDiv(legend) {
                var sibling = legend.nextElementSibling;
                while (sibling) {
                    if (sibling.tagName === "DIV") {
                        return sibling;
                    }
                    sibling = sibling.nextElementSibling;
                }
                return null;
            }

            var divElement = findNextDiv(legend);

            if (divElement) {
                // Find the <span> element inside the <div> element
                var spanElement = divElement.querySelector("span");

                if (spanElement) {
                    // Extract the text content of the <span> element
                    phoneNumber = spanElement.textContent.trim();
                    console.log("Phone Number:", phoneNumber);
                    return phoneNumber;
                }
            }
        }
    }
}

// Function to redirect user to the sign in page if the user tries to book a package session 
function redirectToSignIn() {
    let bookingTypes = document.querySelectorAll('.booking-type');
    isSignedIn = findPhoneNumber();
    // Query both wide and mobile screen buttons
    const wideScreenBtns = document.querySelectorAll('.navbar-nav .header-menu button');
    const mobileScreenBtns = document.querySelectorAll('button.main-menu-btn');

    // Merge NodeLists into a single array for iteration
    const navbarBtns = [...wideScreenBtns, ...mobileScreenBtns];

    bookingTypes.forEach(bookingType => {
        if (bookingType.textContent.includes(PACKAGE_SESSION_TYPE_TITLE) && !isSignedIn) {
            let button = bookingType.querySelector('button'); 
            button.addEventListener('click', (event) => {
                event.preventDefault(); 
                navbarBtns.forEach(btn => {
                    if (btn.textContent.trim() === "حسابي" || btn.textContent.trim() === "My Account") {
                        btn.click();
                    }
                });
            });
            console.log("User is not signed in: ", findPhoneNumber());
        }
        console.log("User is signed in: ", findPhoneNumber());
    });
}

// Function to find the schedule success message and add the link
// Note: add the function to mutation observer
function findScheduleSuccessMsg() {
    let scheduleSuccessMsg =
        document.querySelector("#__layout > div > div > div > div > div > div.mt-4.container > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div.b-overlay-wrap.position-relative.p-1.sticky-loading-overlay > div > div > div > div > div:nth-child(2)")
    
    // Perform actions based on the booked session type or any other conditions
    if (scheduleSuccessMsg) {
        if (scheduleSuccessMsg.textContent.includes("تم الحجز بنجاح")) {
    
            let bookedSessionType = document.querySelector("#__layout > div > div > div > div > div > div.mt-4.container > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div.b-overlay-wrap.position-relative.p-1.sticky-loading-overlay > div > div > div > div > ul > li:nth-child(1)");
    
            checkAndAddLink(bookedSessionType);
        }
    }
}

/**
 * Redirects the user to the home page and clicks on the specified session type.
 */
function clickTheNextSession(navbarBtns, toSessionType) {
    // Set local storage to indicate the session type to click on after redirect
    localStorage.setItem('nextSessionType', toSessionType);

    // redirect user to the home page and click on the second session
    setTimeout(() => {
        navbarBtns.forEach(btn => {
            if (btn.textContent.trim() === "الرئيسية" || btn.textContent.trim() === "Home") {
                btn.click();
            }
        });
    }, 2000);
}

function processToNextSessionType() {
    const toSessionType = localStorage.getItem('nextSessionType');
    if (toSessionType) {
        console.log(`Processing to the next session type: ${toSessionType}`)
        const bookingTypes = document.querySelectorAll('.booking-type');
        bookingTypes.forEach(type => {
            if (type.textContent.includes(toSessionType)) {
                let button = type.querySelector('button');
                if (button) {
                    button.click();
                    // Clear the local storage item after clicking
                    localStorage.removeItem('nextSessionType');
                }
            }
        });
    }
}

// Function to check and add the link when the session type matches
function checkAndAddLink(sessionTypeElement) {
    // Query both wide and mobile screen buttons
    const wideScreenBtns = document.querySelectorAll('.navbar-nav .header-menu button');
    const mobileScreenBtns = document.querySelectorAll('button.main-menu-btn');

    // Merge NodeLists into a single array for iteration
    const navbarBtns = [...wideScreenBtns, ...mobileScreenBtns];

    // Check if the link has already been added
    if (!sessionTypeElement.querySelector('.custom-extra-link')) {
        if (sessionTypeElement.textContent.includes(PACKAGE_SESSION_TYPE_TITLE)) {
            clickTheNextSession(navbarBtns, PACKAGE_SECOND_SESSION)
        }
        else if (sessionTypeElement.textContent.includes(PACKAGE_SECOND_SESSION)) {
            clickTheNextSession(navbarBtns, PACKAGE_THIRD_SESSION)
        }
        else if (sessionTypeElement.textContent.includes(PACKAGE_THIRD_SESSION)) {
            clickTheNextSession(navbarBtns, PACKAGE_FORTH_SESSION)
        }
    } else console.log("link added");
}



// Function to add click event listeners to images within .silentbox-item containers
// Note: add the function to mutation observer
function initializeImageClicks() {
    var images = document.querySelectorAll('.silentbox-item img');

    images.forEach(function (image) {
        if (!image.classList.contains('click-initialized')) {
            image.classList.add('click-initialized');
            image.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default action

                var container = this.closest('.border.rounded.p-4');
                var button = container.querySelector('button.btn.btn-custom-variant');

                if (button) {
                    button.click();
                } else {
                    console.error("Button not found within the container.");
                }
            });
        }
    });
}

// Function to handle redirection on clicking the specified image in the navbar
// Note: add the function to mutation observer
function initializeNavbarImageClick() {
    var navbarImage = document.querySelector("#__layout > div > div > div > div > div > div.bg-white > div > nav > div.navbar-brand.m-0 > span > img");

    if (navbarImage && !navbarImage.classList.contains('redirection-initialized')) {
        navbarImage.classList.add('redirection-initialized');
        navbarImage.addEventListener('click', function () {
            window.location.href = FLAWLESS_HOME_PAGE;
        });
    }
}


// Function to add booking button for mobile view
// Note: Call function when page loads
function addBookingBtnMobile () {
    // Select the SVG element
    var svgElement = document.querySelector("#__layout > div > div > div > div > div > div.bottom-menu > div > button.btn.main-menu-btn.d-lg-block.d-flex.flex-column.align-items-center.btn-link.btn-sm.active > svg");
    
    // Check if the SVG element is found
    if (svgElement) {
        // Replace the current SVG content with the new SVG code
        svgElement.innerHTML = `
            <path d="m10,21.5v2.5h-1v-2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v2.5H0v-2.5c0-1.378,1.121-2.5,2.5-2.5h5c1.379,0,2.5,1.122,2.5,2.5ZM2,14c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm11.694-5l-2.02,1.746c-.19.169-.432.254-.673.254-.243,0-.487-.086-.682-.259l-1.977-1.741h-3.344V2.5c0-1.378,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5v6.5h-3.306Zm-.373-1h2.679V2.5c0-.827-.673-1.5-1.5-1.5h-7c-.827,0-1.5.673-1.5,1.5v5.5h2.721l2.262,1.993,2.339-1.993Zm7.179,11h-5c-1.379,0-2.5,1.122-2.5,2.5v2.5h1v-2.5c0-.827.673-1.5,1.5-1.5h5c.827,0,1.5.673,1.5,1.5v2.5h1v-2.5c0-1.378-1.121-2.5-2.5-2.5Zm-2.5-8c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-2,3c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Z"/>
        `;
        svgElement.classList.add('custom-svg-icon');
    
    }
    // Select the button element
    var buttonElement = document.querySelector("button.btn.main-menu-btn.d-lg-block.d-flex.flex-column.align-items-center.btn-link.btn-sm.active");
    
    // Check if the button element is found
    if (buttonElement) {
        // Create a container div element
        var containerDiv = document.createElement("div");
    
        // Add the SVG element to the container
        var svgElement = document.querySelector("#__layout > div > div > div > div > div > div.bottom-menu > div > button.btn.main-menu-btn.d-lg-block.d-flex.flex-column.align-items-center.btn-link.btn-sm.active > svg");
        if (svgElement) {
            containerDiv.appendChild(svgElement.cloneNode(true));
        }
    
        // Create a text element with the desired text
        var textElement = document.createElement("span");
        textElement.innerText = "الحجز";
    
        // Add the text element to the container
        containerDiv.appendChild(textElement);
    
        // Clear the button's content
        buttonElement.innerHTML = "";

        buttonElement.addEventListener('click', () => {
            window.location.href = FLAWLESS_BOOK_PAGE;
        });
        // Add the container div to the button
        buttonElement.appendChild(containerDiv);
    
        // Apply CSS styles to the container div for styling
        containerDiv.style.display = "flex";
        containerDiv.style.flexDirection = "column";
        containerDiv.style.alignItems = "center";
        containerDiv.style.gap = "4px";
        containerDiv.style.fontSize = "16px";
        containerDiv.style.color = "grey";
        containerDiv.style.textAlign = "center";
    }
}

// Function to add home button for mobile view
// Note: Call function when page loads
function addHomeBtnMobile () {
    // Create a new button element
    // var newButton = document.createElement("button");
    // newButton.setAttribute("type", "button");
    
    var newButton = document.createElement("a");
    newButton.setAttribute("href", FLAWLESS_HOME_PAGE);
    newButton.classList.add("btn", "main-menu-btn", "d-lg-block", "d-flex", "flex-column", "align-items-center", "btn-link", "btn-sm");
    newButton.setAttribute("data-v-4f3621d4", ""); // Add the data attribute if needed
    
    // Create the SVG element for the new button with viewBox attribute
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("id", "Layer_1");
    svgElement.setAttribute("data-name", "Layer 1");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("width", "24");
    svgElement.setAttribute("height", "24");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.classList.add("bi-house", "b-icon", "bi", "custom-svg-icon"); // Add necessary classes for styling
    
    // Create the path element for the provided SVG
    var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M23.045,8.035l-2.045-1.607V2h-1v3.641L13.545,.567c-.910-.715-2.182-.715-3.090,0L.955,8.035c-.607,.477-.955,1.193-.955,1.965v14H8V14.5c0-.827,.673-1.5,1.5-1.5h5c.827,0,1.5,.673,1.5,1.5v9.5h8V10c0-.772-.348-1.489-.955-1.965Zm-.045,14.965h-6V14.5c0-1.378-1.121-2.5-2.5-2.5h-5c-1.379,0-2.5,1.122-2.5,2.5v8.5H1V10c0-.463,.209-.893,.572-1.179L11.072,1.353c.547-.429,1.309-.429,1.855,0l9.5,7.468c.363,.286,.572,.716,.572,1.179v13Z");
    
    // Append the path to the SVG and the SVG to the button
    svgElement.appendChild(pathElement);
    newButton.appendChild(svgElement);
    
    // Set the text of the new button
    var buttonText = document.createTextNode("الرئيسية");
    newButton.appendChild(buttonText);
    
    // Insert the new button to the left of the existing buttons
    var container = document.querySelector("div.d-flex.justify-content-around.border-top.pt-2.pr-2");
    var containerFirstChild = container.firstChild;
    container.insertBefore(newButton, containerFirstChild);
    //redirect user to flawless homepage 
    buttons.forEach(button => {
        if (button.textContent.trim() === 'الرئيسية') {
            button.addEventListener('click', () => {
                window.location.href = FLAWLESS_HOME_PAGE;
            });
        }
    });

    // Add click event listeners to each button
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Toggle the "active" class for the clicked button
            toggleActiveClass(button);
        });
    });


}



// Function to toggle the "active" class for each button except the clicked one
function toggleActiveClass(clickedButton) {
    buttons.forEach(function (button) {
        if (button !== clickedButton) {
            button.classList.remove("active");
        }
    });
    clickedButton.classList.toggle("active");
}



// Function to add click event listener to the logo image 
// Note: add the function to mutation observer
function addClickListener() {
    var image = document.querySelector("#portal-sidebar > div > div > div.text-center.text-lg-left > div > div > div > div:nth-child(1) > img");
    if (image) {
        image.addEventListener('click', function () {
            // Update the window location when the image is clicked
            window.location.href = FLAWLESS_HOME_PAGE;
        });
    }
}

// Function to check and hide booking type if it matches the criteria
function toggleBookingTypeIfNeeded(element, bookedSessions) {
    // the text content of the booking type
    var text = element.textContent || element.innerText;
    // Decide visibility based on package and individual session booking status
    if (text.includes(PACKAGE_SECOND_SESSION)) {
        !bookedSessions.hasBookedPackageSession ? 
        element.style.display = 'none' : 
        element.style.display = bookedSessions.second ? 'none' : 'block';

    } else if (text.includes(PACKAGE_THIRD_SESSION)) {
        !bookedSessions.hasBookedPackageSession ? 
        element.style.display = 'none' : 
        element.style.display = bookedSessions.third ? 'none' : 'block';

    } else if (text.includes(PACKAGE_FORTH_SESSION)) {
        !bookedSessions.hasBookedPackageSession ? 
        element.style.display = 'none' : 
        element.style.display = bookedSessions.fourth ? 'none' : 'block';

    }  else {
        // hide main booking type if user booked a package
        bookedSessions.hasBookedPackageSession ? 
        element.style.display = 'none' : 
        element.style.display = 'block';
    }
}


// check if the user have booked the package sessions
// Note: add the function to mutation observer
function checkAppointmentCards() {
    const appointmentCards = document.querySelectorAll(".appointment-card");
    const bookingTypes = document.querySelectorAll('.booking-type');
    
    // Initialize an object to track booked sessions
    let bookedSessions = {
        hasBookedPackageSession: false,
        second: false,
        third: false,
        fourth: false
    };

    appointmentCards.forEach(card => {
        const cardText = card.textContent.trim();
        // user have booked the package session
        if (cardText.includes(PACKAGE_SESSION_TYPE_TITLE)) {
            bookedSessions.hasBookedPackageSession = true;
        }
        // Check for individual session bookings
        if (cardText.includes(PACKAGE_SECOND_SESSION)) {
            bookedSessions.second = true;
        }
        // Check for individual session bookings
        if (cardText.includes(PACKAGE_THIRD_SESSION)) {
            bookedSessions.third = true;
        }
        // Check for individual session bookings
        if (cardText.includes(PACKAGE_FORTH_SESSION)) {
            bookedSessions.fourth = true;
        }
    });
    // Toggle display based on whether a package session has been booked
    bookingTypes.forEach(bookingType => {
        toggleBookingTypeIfNeeded(bookingType, bookedSessions);
    });
}


// Function to observe changes in the DOM
function observeDOM() {
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // New nodes have been added to the DOM
                addClickListener();
                redirectToSignIn();
            }
        });

        initializeImageClicks();
        initializeNavbarImageClick(); // Call this again if dynamic content might include the navbar image
        // Initial call to updateTimeContainer for both small and large screens
        updateTimeContainerSmall();
        updateTimeContainerLarge();

        checkAppointmentCards();
        handleEmailButtons();
        findScheduleSuccessMsg();

        // Add a window resize event listener to update the container when the screen size changes
        window.addEventListener("resize", () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 768) {
                updateTimeContainerSmall();
            } else {
                updateTimeContainerLarge();
            }
        });
        
    });
    
    var config = { childList: true, subtree: true };
    observer.observe(document.body, config);
}

// Call the observeDOM function to start observing DOM changes
observeDOM();

processToNextSessionType();

// the call order is important -> addBookingBtnMobile() should be called before addHomeBtnMobile()
addBookingBtnMobile();
addHomeBtnMobile();