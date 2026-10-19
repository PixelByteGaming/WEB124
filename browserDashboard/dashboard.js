
/*
    @author Dylan Gregory
    @date 10-18-2026
*/

// Part 1: Browser Information
console.log("Page URL: " + location.href);
console.log("Browser Language: " + navigator.language);
console.log("Online: " + navigator.onLine);
console.log("Screen Width: " + screen.width);
console.log("Screen Height: " + screen.height);

// Part 2: Window Information
console.log("Window Width: " + window.innerWidth);
console.log("Window Height: " + window.innerHeight);

// Part 3: Form Properties
const form = document.querySelector("#dashboardForm");
const nameField = form.elements.userName;
const siteField = form.elements.favoriteSite;
const output = document.querySelector("#output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = nameField.value;
    const favoriteSite = siteField.value;

    output.innerHTML = "";

    // Part 5: URL Object
    let websiteURL;

    try {
        websiteURL = new URL(favoriteSite);

        if (websiteURL.protocol !== "https:" &&
            websiteURL.protocol !== "http:") {
            throw new Error("Invalid URL");
        }
    } catch (error) {
        output.textContent = "Please enter a valid website URL.";
        console.log("Invalid website URL.");
        return;
    }

    // Display User Information
    const heading = document.createElement("h2");
    heading.textContent = "Your Dashboard";
    output.appendChild(heading);

    const nameResult = document.createElement("p");
    nameResult.textContent = "Name: " + userName;
    output.appendChild(nameResult);

    const siteResult = document.createElement("p");
    siteResult.textContent = "Favorite Website: " + favoriteSite;
    output.appendChild(siteResult);

    // Display URL Information
    console.log("Hostname: " + websiteURL.hostname);
    console.log("Protocol: " + websiteURL.protocol);
    console.log("Pathname: " + websiteURL.pathname);

    // Part 6: Local Storage
    localStorage.setItem("userName", userName);
    console.log("Stored Name: " + localStorage.getItem("userName"));

    // Part 7: Session Storage
    sessionStorage.setItem("favoriteSite", favoriteSite);
    console.log("Stored Website: " + sessionStorage.getItem("favoriteSite"));
});

// Part 4: Focus and Blur
nameField.addEventListener("focus", function() {
    console.log("Name field selected.");
});

nameField.addEventListener("blur", function() {
    console.log("Name field left.");
});
