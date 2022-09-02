const formSubmit = document.querySelector('#formSubmit')
const valueInput = document.querySelector('#valueInput')
const resultList = document.querySelector('#resultList')
const ApiKey = 'e0bbbce2600d8dd961a4722f6c1dce73'
let movie = ""
let movies = []

const fetchMovie = async ()=>{
  const ApiUri = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${movie}`
  movies = await fetch(ApiUri).then((response) => response.json())
  console.log(movies.results)
}

const moviesDiplay = async ()=>{
  await fetchMovie()
  resultList.innerHTML = movies.results.map(
    (movie) => 
    `
      <div class="card my-3" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" class="card-img-top" alt="affiche du film ${movie.original_title}">
        <div class="card-body">
          <h5 class="card-title">${movie.original_title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Sorti le :${movie.release_date}</h6>
          <p class="card-text">VO : ${movie.original_language}</p>
          <p class="card-text">Description : ${movie.overview}</p>
          <p class="card-text">Note : ${movie.vote_average}</p>
        </div>
      </div>
    `
  ).join('')
}

formSubmit.addEventListener('submit', e => {
  e.preventDefault()
  movie = valueInput.value
  console.log(movie);
  moviesDiplay()
})