
/*
    @author Dylan Gregory
    @date 10-18-2026
*/

console.log("Page URL: " + location.href);
console.log("Browser Language: " + navigator.language);
console.log("Online: " + navigator.onLine);
console.log("Screen Width: " + screen.width);
console.log("Screen Height: " + screen.height);

console.log("Window Width: " + window.innerWidth);
console.log("Window Height: " + window.innerHeight);

let form = document.querySelector("#dashboardForm");
let nameField = form.elements.userName;
let siteField = form.elements.favoriteSite;
let output = document.querySelector("#output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = nameField.value;
    let favoriteSite = siteField.value;

    output.innerHTML = "";

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

    let heading = document.createElement("h2");
    heading.textContent = "Your Dashboard";
    output.appendChild(heading);

    let nameResult = document.createElement("p");
    nameResult.textContent = "Name: " + userName;
    output.appendChild(nameResult);

    let siteResult = document.createElement("p");
    siteResult.textContent = "Favorite Website: " + favoriteSite;
    output.appendChild(siteResult);

    console.log("Hostname: " + websiteURL.hostname);
    console.log("Protocol: " + websiteURL.protocol);
    console.log("Pathname: " + websiteURL.pathname);

    localStorage.setItem("userName", userName);
    console.log("Stored Name: " + localStorage.getItem("userName"));

    sessionStorage.setItem("favoriteSite", favoriteSite);
    console.log("Stored Website: " + sessionStorage.getItem("favoriteSite"));
});

nameField.addEventListener("focus", function() {
    console.log("Name field selected.");
});

nameField.addEventListener("blur", function() {
    console.log("Name field left.");
});
