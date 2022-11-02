    const movieSearchInput = document.querySelector("#searchMovie");
    const movieList = document.querySelector("#moviesList");
    const previousPage = document.querySelector("#previousPage");
    const nextPage = document.querySelector("#nextPage");
    const Page = document.querySelector("#page");
    const aboveMovies = document.querySelector(".pageBtn");
    const main = document.querySelector(".main");
    const glass = document.querySelector(".glasses");
    const API_URL = "https://www.omdbapi.com/";
    const API_KEY = "3ef4ab9e";
    let page = 1;

    movieSearchInput.addEventListener("keyup", function () {
    main.style.overflowY = "visible";
    main.style.background = "aliceblue";
    glass.style.display = "none";
    aboveMovies.style.display ="none"
    movieName = movieSearchInput.value;
    movieList.innerHTML = "";
    page = 1;
    getMovies(movieName, page);
    });

    searchMovie.oninput = function() {
        if (searchMovie.value === ""){movieList.innerHTML = ''}
        aboveMovies.style.display ="none"
        movieList.style.display ="none"
      };

    function getMovies(movieName) {
     showResult(page);
     
    fetch(`${API_URL}?apiKey=${API_KEY}&s=${movieName}&page=${page}`).then(
        (response) => {
        response.json().then((response) => {
            let movies = response.Search;
            if (response.totalResults >= 8) {
            nextPage.style.display = "flex";
            } else {
            nextPage.style.display = "none";
            }
            if(movies != undefined) {
            aboveMovies.style.display = "flex";
            showMovies(movies);
            }
            if (page > 1) {
            previousPage.style.display = "flex";
            } else {
            previousPage.style.display = "none";
            }
        });
        }
    );
    }

    movieList.addEventListener("click", function (event) {
    showInfoAboutMovie(event.target.closest(".movie").getAttribute("show-id"));
    });

    nextPage.addEventListener("click", function () {
    page += 1;
    movieList.innerHTML = "";
    getMovies(movieName, page);
    showResult(page);
    });

    previousPage.addEventListener("click", function () {
    page -= 1;
    movieList.innerHTML = "";
    showResult(page);
    getMovies(movieName, page);
    if (page == 1) {
        previousPage.style.display = "none";
    }
    });

    const movieInformation = document.querySelector("#movie-info");

    function showInfoAboutMovie(id) {
    fetch(`${API_URL}?i=${id}&apikey=${API_KEY}`).then((response) => {
        response.json().then((response) => {
        movieList.style.opacity = "0.33";
        movieList.style.filter = "blur(5px)";
        movieInformation.style.display = "flex";
        aboveMovies.style.display = "none";
        movieInformation.innerHTML = `
        <div class="close"> <button id="close">X</button></div>
        <img class="posterImg" src="${response.Poster}"/>
        <div class="allMovieInfo">
        <div class="movieTitle">${response.Title}</div>
        <div class="movieRating"> <span class="description"> Rating IMBD: </span> ${response.Ratings[0].Value} </div>
        <div class="movieInfoText"> <span class="description"> Release date: </span>${response.Released}
        <div class="movieInfoText"> <span class="description"> Genre: </span>${response.Genre}</div>   
        <div class="movieInfoText"> <span class="description"> Plot: </span> ${response.Plot} </div>
        </div>
        `;
        const closeBtn = document.querySelector("#close");
        closeBtn.addEventListener("click", function () {
            movieInformation.innerHTML = "";
            movieInformation.style.display = "none";
            movieList.style.filter = "blur(0)";
            movieList.style.opacity = "1";
        });
        });
    });
    }

    function showMovies(movies) {
    movies.forEach((item) => {
        movieList.style.display = "";
        const element = document.createElement("div");
        element.classList.add("movie");
        element.setAttribute("show-id", item.imdbID);
        element.innerHTML = `
            <img id="movie-img" src="${item.Poster}" />
            <div id="movie-title" class="movie-title--color">${item.Title}</div>
            `;
        movieList.appendChild(element);
    });
    }

    function showResult(page) {
    Page.style.display = "flex";
    Page.style.fontSize = "25px";
    Page.textContent = "";
    Page.textContent = "Page:" + page;
    }
