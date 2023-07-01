document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.getElementById("films");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const availableTickets = document.getElementById("available-tickets");
    const buyTicketBtn = document.getElementById("buy-ticket-btn");
  
    let movies = []; // To store the movie data
  
    // Fetch movie data and populate the movie list
    fetch("http://localhost:3000/films")
      .then((response) => response.json())
      .then((data) => {
        movies = data;
        populateMovieList(movies);
        displayMovieDetails(movies[0]); // Display details of the first movie
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  
   
  
 
  
 
  
   
  });
  