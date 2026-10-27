
/*
    Final Assignment - Pokemon TCG Deck Tracker
*/

const startingDecks = [
    {
        name: "Charizard ex",
        type: "Fire",
        wins: 3,
        losses: 1
    },
    {
        name: "Gardevoir ex",
        type: "Psychic",
        wins: 2,
        losses: 2
    },
    {
        name: "Dragapult ex",
        type: "Dragon",
        wins: 4,
        losses: 1
    }
];

let decks;

const savedDecks = localStorage.getItem("pokemonDecks");

if (savedDecks !== null) {
    decks = JSON.parse(savedDecks);
} else {
    decks = startingDecks;
}

// Select elements
const deckList = document.getElementById("deckList");
const deckForm = document.querySelector("#deckForm");
const welcomeBtn = document.getElementById("welcomeBtn");

// Save decks to localStorage
function saveDecks() {
    localStorage.setItem("pokemonDecks", JSON.stringify(decks));
}

// Display all decks
function displayDecks() {
    deckList.innerHTML = "";

    decks.forEach(function(deck, index) {
        const card = document.createElement("div");
        card.classList.add("deckCard");

        // Calculate win percentage
        const totalGames = deck.wins + deck.losses;
        let winRate = 0;

        if (totalGames > 0) {
            winRate = (deck.wins / totalGames) * 100;
        }

        card.innerHTML = `
            <h3></h3>
            <p class="deckType"></p>
            <p class="deckRecord"></p>
            <p class="winRate"></p>
            <button class="winBtn" data-index="${index}">+ Win</button>
            <button class="lossBtn" data-index="${index}">+ Loss</button>
            <button class="deleteBtn" data-index="${index}">Delete</button>
        `;

        card.querySelector("h3").textContent = deck.name;
        card.querySelector(".deckType").textContent =
            "Type: " + deck.type;
        card.querySelector(".deckRecord").textContent =
            "Wins: " + deck.wins + " | Losses: " + deck.losses;
        card.querySelector(".winRate").textContent =
            "Win Rate: " + winRate.toFixed(1) + "%";

        deckList.appendChild(card);
    });
}

// Welcome button
welcomeBtn.addEventListener("click", function() {
    document.getElementById("welcomeMessage").textContent =
        "Scroll down to view your decks or add a new one!";
});

// Event delegation
deckList.addEventListener("click", function(event) {
    const button = event.target;

    if (!button.matches("button")) {
        return;
    }

    const index = Number(button.dataset.index);

    if (button.classList.contains("winBtn")) {
        decks[index].wins++;
    } else if (button.classList.contains("lossBtn")) {
        decks[index].losses++;
    } else if (button.classList.contains("deleteBtn")) {
        decks.splice(index, 1);
    }

    saveDecks();
    displayDecks();
});

// Add a new deck
deckForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("deckName").value.trim();
    const type = document.getElementById("deckType").value;

    if (name === "") {
        return;
    }

    const newDeck = {
        name: name,
        type: type,
        wins: 0,
        losses: 0
    };

    decks.push(newDeck);

    saveDecks();
    displayDecks();

    document.getElementById("formMessage").textContent =
        name + " was added to your collection!";

    deckForm.reset();
});

// Focus and blur
const deckName = document.getElementById("deckName");

deckName.addEventListener("focus", function() {
    deckName.style.backgroundColor = "#fff8d6";
});

deckName.addEventListener("blur", function() {
    deckName.style.backgroundColor = "white";
});

// Browser objects: 
console.log("Browser width: " + window.innerWidth);
console.log("Current page: " + location.href);

// Display decks when the page loads
displayDecks();


/*
    Reflection Questions

    1. Which JavaScript feature was easiest?
    I thought using event listeners was the easiest because
    it was pretty simple to make buttons do something.

    2. Which JavaScript feature was most challenging?
    Event delegation was probably the most challenging.
    I had to figure out how one event listener could
    work with multiple buttons.

    3. How did you use events in your project?
    I used click events to update wins and losses or
    delete decks. I also used a submit event for adding
    decks and focus and blur events on the name input.

    4. How did you use storage in your project?
    I used localStorage to save the deck collection.
    This lets the decks and their records stay saved
    even after refreshing the page.
*/
