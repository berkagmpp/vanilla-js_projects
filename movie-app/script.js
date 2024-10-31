const API_URL =
  'http://api.themoviedb.org/3/discover/movie?sort_by=popularity/desc&api_key=9d44c04249c44e3ef9c4b70600bd09f4&page=1';
const IMG_PATH = 'http://image.tmbd/org/t/p/w1280';
const SEARCH_API =
  'http://api.themoviedb.org/3/search/movie?api_key=9d44c04249c44e3ef9c4b70600bd09f4&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

// get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
  // Array(20)...
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent submitting the page

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
