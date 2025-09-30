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
        { img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/482533756_1188742672928892_4943216260943031034_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=g2ztzRcoWpAQ7kNvwEJONaY&_nc_oc=AdmNmHkpu36wvmnp_MrsJRaQonqaS4wWPeAFXSzK-NKa91UxmT5aM8p7-5-6Yc9RWZ7pX-aR0q-TQ1rDMlH3G5AW&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&oh=03_Q7cD3QEv8UB10HF5OFD1STON29pYfbi9zFqvgHQnifPfgJnsDw&oe=69022180", title: "Kraven the Hunter" },
        { img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/551132923_1752025425518749_2848970462013211813_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=AaJi_f6vNDIQ7kNvwHsN8yJ&_nc_oc=AdkVcGhbASmC5iTYkqoTgCZ25_AfmH1Qggf3SlkHGG0VeSwPEHu4xI3fjqWXhd6bXpQbrLMglb5s0rifd-xrRZDp&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&oh=03_Q7cD3QHUIg26ka7Y5Tvb0af8iimbjKBAI-c5aVFNjGdoJ0h8NQ&oe=690203F7", title: "Afterburn" },
        { img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/548091345_1433925767897515_9177692878586081483_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=n6lDktsXBz0Q7kNvwHdDCud&_nc_oc=AdmSi6boS29Qg1MiydedJwzpdvxqrQC8xR4S_ce1X9OxpolEcLaFh1w38B5YqsJC-f6_JteqNR4qMmID7Nit-54E&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&oh=03_Q7cD3QEph5YY031Ar_minvccZ9tF3DCgdMbJ7p2DjvRK9ZjerQ&oe=69023147", title: "Minamahal" },
        { img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t1.15752-9/552895418_806961905011154_3339892275471126328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=OlEdJMPCcvMQ7kNvwFqNaef&_nc_oc=Adla_YOajdnHek0IxyjwSUcg73SbU_55Wt-dgrSckCTNivIsfPwwf5y0JW8f3FQiSB7ojeZRO4tl14jhD28b5yVd&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&oh=03_Q7cD3QHgwEiKSDA_ssRVWkzRJ_i8h-vytLE24UbljmF0hXA4Yg&oe=69021C20", title: "One Battle After Another" }
    ];

    const comingSoonMovies = [
        { img: "https://upload.wikimedia.org/wikipedia/en/b/bc/The_Conjuring_%E2%80%93_Last_Rites.jpg", title: "a Conjuring: Last Rites" },
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
            description: "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
            trailer: "https://youtu.be/73_1biulkYk?si=JzoU2b0tRCGXcaGW"
        },
        movie2: {
            title: "Inside out 2",
            description: "Follows the titular superhero as he reconciles his heritage with his human upbringing. He is the embodiment of truth, justice and the human way in a world that views this as old-fashioned.",
            trailer: "https://youtu.be/LEjhY15eCx0?si=sDPxjGsv_Xf5elGH"
        },
        movie3: {
            title: "The wild robot",
            description: "Five years post-Jurassic World Dominion, an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.",
            trailer: "https://youtu.be/67vbA5ZJdKQ?si=HcYOpNNnmMu0sewm"
        },
        movie4: {
            title: "Beetlejuice Beetlejuice",
            description: "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
            trailer: "https://youtu.be/As-vKW4ZboU?si=0XNWAF1r90B6zTw1"
        },
        movie5: {
            title: "Mufasa the lion king",
            description: "Marvel's First Family face their most daunting challenge yet. Forced to balance their roles as heroes with the strength of their family bond, they must defend Earth from a ravenous space god called Galactus and his herald, Silver Surfer.",
            trailer: "https://youtu.be/o17MF9vnabg?si=yka1z7cNGMIHH6Kd"
        },
        movie6: {
            title: "Venom the last dance",
            description: "Unlike her past horror films, including Clarita (2019), which focused on supernatural elements, Untold explores the psychological horrors within human nature. It raises profound questions about morality, choices, and the sacrifices people are willing to make.",
            trailer: "https://youtu.be/__2bjWbetsA?si=DCHGzG2RIz4ODovf"
        },
        movie7: {
            title: "Kraven the hunter",
            description: "A teacher pays an increasingly steep price for defending the democratic process of the election.",
            trailer: "https://youtu.be/I8gFw4-2RBM?si=5mMW_MOmaC1g-8gX"
        },
        movie8: {
            title: "Afterburn",
            description: " The eco-horror film centers on a fierce battle between two mothers, Audrey (Iza Calzado) and Lydia (Dimples Romana), over the ownership of a piece of land. Audrey, who hails from the city, arrives to claim the land her husband's family owns, while Lydia, the caretaker, fiercely protects the land her family has occupied for years.",
            trailer: "https://youtu.be/ZkEjle729tI?si=SRjKLI_quCV8A7LG"
        },
        movie9: {
            title: "Minamahal",
            description: "After fighting for their love to conquer the time, distance and a global shutdown that kept them apart, Joy and Ethan meet again in Canada but realize that they have also changed a lot, individually.",
            trailer: "https://youtu.be/TU2npMg7TkM?si=ZmecWj_tG6UEwV5h"
        },
        movie10: {
            title: "One battle after another",
            description: "A woman who believes she's cursed meets a troubled landlord while fighting community displacement. As they grow closer, her fear that all her lovers disappear threatens their connection.",
            trailer: "https://youtu.be/feOQFKv2Lw4?si=EAw5l5KKNiOSwTQC"
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
