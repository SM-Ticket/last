document.addEventListener("DOMContentLoaded", function () {
    const nowShowingContainer = document.getElementById("now-showing-grid-container");
    const comingSoonContainer = document.getElementById("coming-soon-grid-container");

    const nowShowingMovies = [
        { img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg", title: "Deathpool & wolverine" },
        { img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg", title: "Inside Out 2" },
        { img: "https://m.media-amazon.com/images/I/815jTw4n2ZL._UF1000,1000_QL80_.jpg", title: "The Wild Robot" },
        { img: "https://play-lh.googleusercontent.com/Etkh88qovfK4Cwkn3rt1StrKSVS_9Iv1X6vr9d8IkSBX_J0Db4y4icatiy_nNXJcMO-VBfmwnhS6L-JoGEpq=w240-h480-rw", title: "Beetlejuice Beetlejuice" },
        { img: "https://lumiere-a.akamaihd.net/v1/images/wonderwall_intl_payoff_poster_philippines_english_9f86c0fe.jpeg", title: "Mufasa: The Lion King" },
        { img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI1nNs4L2JhWNiQKmiYBYnhoqep5cEJVzp1PqecXhL89aJSmHz", title: "Venom: The Last Dance" },
        { img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Kraven_the_Hunter_%28film%29_poster.jpg", title: "Kraven the Hunter" },
        { img: "https://m.media-amazon.com/images/M/MV5BYzJlZjJkZWItZGU4YS00ZWYwLTk3M2YtMDk2MGI4ZjNlYTI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Afterburn" },
        { img: "https://m.media-amazon.com/images/M/MV5BY2U5ZTNkNjMtMGQ5Yy00YTkzLTgyMjktODNkZWRkODk5ZjAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Minamahal" },
        { img: "https://resizing.flixster.com/yepsxuaCu3f7igZnTo2huAOVtCU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNhNmQzNDA0LWFhYjQtNDA5Mi04OTMyLTA2Y2U2OWI5ZjVmYS5qcGc=", title: "One Battle After Another" }
    ];

    const comingSoonMovies = [
        { img: "https://dx35vtwkllhj9.cloudfront.net/cj-4dplex-korea/twice/images/regions/intl/onesheet.jpg", title: "ONE IN A MILLION" },
        { img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Black_Bag_film_poster.jpg/250px-Black_Bag_film_poster.jpg", title: "Black Bag" },
        { img: "https://m.media-amazon.com/images/M/MV5BZGUyNWRjMTMtYTgxZS00YWI4LTg2MDAtNzEwZDgyZjk4YzMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Nouvelle Vague" },
        { img: "https://upload.wikimedia.org/wikipedia/en/4/4f/Shake%2C_Rattle_%26_Roll_Evil_Origins_poster.jpg", title: "Shake, Rattle & Roll: Evil Origins" },
        { img: "https://m.media-amazon.com/images/M/MV5BZjkwYzE2OTQtNGZiZC00M2UyLWJjNTEtMTMxNDgwMzY1N2RkXkEyXkFqcGc@._V1_.jpg", title: "Five Nights at Freddy’s 2 " },
        { img: "https://m.media-amazon.com/images/M/MV5BYzk0NjE4NzYtZjc5Ni00MTkxLTgyY2QtZjliOTA5N2U2YzM1XkEyXkFqcGc@._V1_.jpg", title: "TRON: Ares" },
        { img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30027251_v_v10_aa.jpg", title: "Anaconda Cursed Jungle" },
        { img: "https://lumiere-a.akamaihd.net/v1/images/p_studios_avatar_fireandash_payoff_poster_v1_32358b1e.jpeg", title: "Avatar: Fire and Ash" },
        { img: "https://m.media-amazon.com/images/M/MV5BNTNhNmJhYzYtOWY0My00Nzc0LWJiYWQtNTk0NGViMjc5MjQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Manila’s Finest" },
        { img: "https://image.tmdb.org/t/p/w500/uUzVqokTjXEwxMTMfeY7q1whWIP.jpg", title: "Call Me Mother" }
    ];

    function generateMovieCards(container, movies, isNowShowing) {
        container.innerHTML = "";
        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            const img = document.createElement("img");
            img.src = movie.img;
            img.alt = movie.title;

            const title = document.createElement("h3");
            title.textContent = movie.title;

            movieCard.appendChild(img);
            movieCard.appendChild(title);

            if (isNowShowing) {
                
                const buyButton = document.createElement("a");
                buyButton.href = "buy-tickets.html";
                buyButton.textContent = "Buy Tickets";
                buyButton.classList.add("buy-ticket");
                movieCard.appendChild(buyButton);
            }

            container.appendChild(movieCard);
        });
    }

    generateMovieCards(nowShowingContainer, nowShowingMovies, true);
    generateMovieCards(comingSoonContainer, comingSoonMovies, false);
});


document.addEventListener("DOMContentLoaded", function () {
    const nowShowingBtn = document.getElementById("nowShowingBtn");
    const comingSoonBtn = document.getElementById("comingSoonBtn");
    const nowShowingContainer = document.getElementById("now-showing-grid-container");
    const comingSoonContainer = document.getElementById("coming-soon-grid-container");

    nowShowingBtn.addEventListener("click", function () {
        nowShowingContainer.style.display = "grid";
        comingSoonContainer.style.display = "none";
        nowShowingBtn.classList.add("active");
        comingSoonBtn.classList.remove("active");
    });

    comingSoonBtn.addEventListener("click", function () {
        comingSoonContainer.style.display = "grid";
        nowShowingContainer.style.display = "none";
        comingSoonBtn.classList.add("active");
        nowShowingBtn.classList.remove("active");
    });
});

document.getElementById("logout-btn").addEventListener("click", function() {
    ;

    location.href = "login.html"; 
});


document.addEventListener("DOMContentLoaded", function () {
    const movieData = {
        movie1: {
            title: "Deathpool and wolverine",
            description: "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.",
            trailer: "https://youtube.com/embed/73_1biulkYk?si=pj66v0iPvtPfUWDs"
        },
        movie2: {
            title: "Inside out 2",
            description: "talks about growing up in an emotional way and depicts how growing up is challenging inside our thoughts. The film introduces the emotions we had from the previous movie: Joy, Anger, Sadness, Fear and Disgust. We are also introduced to new emotions: embarrassment, Ennui (boredom), Envy and Anxiety",
            trailer: "https://youtube.com/embed/LEjhY15eCx0?si=sDPxjGsv_Xf5elGH"
        },
        movie3: {
            title: "The wild robot",
            description: "The epic adventure follows the journey of a robot--ROZZUM unit 7134, Roz for short -- that is shipwrecked on an uninhabited island and must learn to adapt to the harsh surroundings, gradually building relationships with the animals on the island and becoming the adoptive parent of an orphaned gosling.",
            trailer: "https://youtube.com/embed/67vbA5ZJdKQ?si=HcYOpNNnmMu0sewm"
        },
        movie4: {
            title: "Beetlejuice Beetlejuice",
            description: "The story followed the Deetz family moving to Hawaii, where Charles is developing a resort. They soon discover that his company is building on the burial ground of an ancient Hawaiian Kahuna. The spirit comes back from the afterlife to cause trouble, and Betelgeuse becomes a hero by winning a surf contest with magic.",
            trailer: "https://youtube.com/embed/As-vKW4ZboU?si=0XNWAF1r90B6zTw1"
        },
        movie5: {
            title: "Mufasa the lion king",
            description: "A huge, powerful male lion, Mufasa was the King of the Pride Lands, father of Simba, and mate of Sarabi. He is shown to be a wise and fair ruler, who follows the Circle of Life. However, his brother Scar is jealous of Mufasa's position as king and forms a plan to kill Mufasa and Simba so he can be king.",
            trailer: "https://youtube.com/embed/o17MF9vnabg?si=yka1z7cNGMIHH6Kd"
        },
        movie6: {
            title: "Venom the last dance",
            description: "venom, the poisonous secretion of an animal, produced by specialized glands that are often associated with spines, teeth, stings, or other piercing devices. The venom apparatus may be primarily for killing or paralyzing prey or may be a purely defensive adaptation.",
            trailer: "https://youtube.com/embed/__2bjWbetsA?si=DCHGzG2RIz4ODovf"
        },
        movie7: {
            title: "Kraven the hunter",
            description: "Kraven is a master hunter and wild animal tamer, proficient in certain exotic animal-like fighting techniques, and an expert in various jungle herbs and potions. His nerve punch attack can paralyze even Spider-Man and Tigra.",
            trailer: "https://youtube.com/embed/I8gFw4-2RBM?si=5mMW_MOmaC1g-8gX"
        },
        movie8: {
            title: "Afterburn",
            description: "After a massive solar flare destroys the Earth's eastern hemisphere, an emboldened treasure hunter for-hire adventures to Europe to uncover the coveted Mona Lisa, only to learn the world needs a hero more than it needs a painting.",
            trailer: "https://youtube.com/embed/ZkEjle729tI?si=SRjKLI_quCV8A7LG"
        },
        movie9: {
            title: "Minamahal",
            description: "After fighting for their love to conquer the time, distance and a global shutdown that kept them apart, Joy and Ethan meet again in Canada but realize that they have also changed a lot, individually.",
            trailer: "https://youtube.com/embed/oV-vNGppXLU?si=aUgeafUKbbJExVs9"
        },
        movie10: {
            title: "One battle after another",
            description: "“One Battle After Another” is loosely based on the 1990 novel “Vineland” by Thomas Pynchon. The novel is set in 1984 and follows a former hippie revolutionary and his daughter in a game of cat and mouse with a demented, insecure military official. The time period is ambiguous in the film, but it feels current.",
            trailer: "https://youtube.com/embed/feOQFKv2Lw4?si=EAw5l5KKNiOSwTQC"
        }
    };

    function openPopup(movieId) {
        const popup = document.getElementById("popup");
        const title = document.getElementById("popup-title");
        const description = document.getElementById("popup-description");
        const trailer = document.getElementById("movie-trailer");

        if (movieData[movieId]) {
            title.textContent = movieData[movieId].title;
            description.textContent = movieData[movieId].description;
            trailer.src = movieData[movieId].trailer;
        }

        popup.style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("movie-trailer").src = "";
    }

    window.openPopup = openPopup;
    window.closePopup = closePopup;
});
