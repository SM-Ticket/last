document.addEventListener("DOMContentLoaded", function () {
    
    const dateElements = document.querySelectorAll(".movie-date");
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    dateElements.forEach((el) => (el.textContent = formattedDate));

    
    document.querySelectorAll(".movie-poster").forEach((poster) => {
        poster.addEventListener("click", function () {
            const trailerUrl = this.closest(".movie-card").getAttribute("data-trailer");
            document.getElementById("trailerFrame").src = trailerUrl;
            document.getElementById("trailerPopup").style.display = "flex";
        });
    });
});

function DeadpoolWolverine(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `DeadpoolWolverine TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function InsideOut2(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `InsideTIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function TheWildRobot(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `The Wild Robot TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Beetlejuice(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `BeetlejuiceBeetlejuice TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Mufasa(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Mufasa TIX .html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Venom(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Venom TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Kraven(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Kraven TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Afterburn(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Afterburn TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Minamahal(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Minamahal TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function One(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `One TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}


function closeTrailer() {
    document.getElementById("trailerPopup").style.display = "none";
    document.getElementById("trailerFrame").src = "";
}

document.addEventListener("DOMContentLoaded", function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get("title");
    const movieTime = urlParams.get("time");

    
    if (movieTitle) {
        document.querySelector(".movie-title").textContent = movieTitle;
    }

    if (movieTime) {
        document.querySelector(".movie-time").textContent = `Selected Time: ${movieTime}`;
    }
});

 
 function selectTime(time) {
    document.querySelector(".movie-time").textContent = `Selected Time: ${time}`;
}