/*
    @author Dylan Gregory
    @date   10-2-2026
*/

const playlistContainer = document.querySelector("#playlistContainer");
const addBtn = document.querySelector("#addBtn");
const songTitle = document.querySelector("#songTitle");
const songArtist = document.querySelector("#songArtist");

function addSong(title, artist) {

    let songCard = document.createElement("article");
    songCard.classList.add("songCard");

    let songInfo = document.createElement("span");
    songInfo.textContent = `${title} - ${artist}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    songCard.append(songInfo);
    songCard.append(deleteBtn);

    playlistContainer.append(songCard);
}

function handleAddSong() {

    let title = songTitle.value.trim();
    let artist = songArtist.value.trim();

    if (title && artist) {
        
        let duplicateFound = false;
        let songs = document.querySelectorAll(".songCard");

        for (const song of songs) {
            if (song.querySelector("span").textContent === `${title} - ${artist}`) {
                duplicateFound = true;
            }
        }

        if (!duplicateFound) {
            addSong(title, artist);

            songTitle.value = "";
            songArtist.value = "";
        } else {
            alert("That song already exists!");
        }
        
    }
}

addBtn.addEventListener("click", handleAddSong);

function handleDeleteSong(event) {

    console.log(
        "Click bubbled to playlist container:",
        event.target
    );

    if (event.target.classList.contains("deleteBtn")) {

        event.target.parentElement.remove();
    }
}

playlistContainer.addEventListener("click", handleDeleteSong);