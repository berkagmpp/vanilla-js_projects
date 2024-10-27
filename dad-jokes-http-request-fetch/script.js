// https://icanhazdadjoke.com/api

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      // headers: an object that contains the request headers
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com/', config)
    // fetch() returns a promise
    // a global function: accepts a URL and an optional configuration object
    .then((response) => response.json())
    // then() returns a promise
    // the response object has a json() method that returns a promise
    .then((data) => {
      // then() returns a promise
      // the data object is the result of the previous promise
      console.log(data);
      // data = {id: "R7UfaahVfFd", joke: "...joke...", status: 200}
      jokeEl.innerHTML = data.joke;
      // approach data.joke directly
    });
}
