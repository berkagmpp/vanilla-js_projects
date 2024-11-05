const APIUTL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    //   const res = await axios(APIUTL + username);
    //   console.log(res.data);
    // res is object of data property -> can be destructive like below
    const { data } = await axios(APIUTL + username);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
});
