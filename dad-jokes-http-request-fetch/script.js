// using .then() to fetch data from an API

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

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

// using async/await to fetch data from an API

const jokeEl2 = document.getElementById('joke2');
const jokeBtn2 = document.getElementById('jokeBtn2');

jokeBtn2.addEventListener('click', generateJoke2);

generateJoke2();

async function generateJoke2() {
  const config = {
    headers: {
      // headers: an object that contains the request headers
      Accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com/', config);
  // basically sets what we get back from the fetch to the response variable

  const data = await response.json();
  // waits for the response to be converted to JSON format

  jokeEl2.innerHTML = data.joke;
}
