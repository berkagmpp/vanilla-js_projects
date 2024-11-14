const result = document.getElementById('result');
const filter = document.getElementById('filter');
// 1. make empty array to fetching data
const listItems = [];

// 3. call function and check data with console
getData();

// 7. add filter by user input (seach by name or location)
filter.addEventListener('input', (e) => filterData(e.target.value));

// 2. get data using async await
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');

  //   const data = await res.json();
  // 5. destructure results from data.results
  const { results } = await res.json();

  // 3. call function and check data with console
  //   console.log(data);

  // 4. clear result (has Loading...)
  result.innerHTML = '';

  // 6. make tag and apply results
  results.forEach((user) => {
    // console.log(user);
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" 
           alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    `;

    result.appendChild(li);
  });
}

// 8. function for seaching by name or location
function filterData(eTargetValue) {
  listItems.forEach((itemLi) => {
    if (itemLi.innerText.toLowerCase().includes(eTargetValue.toLowerCase())) {
      itemLi.classList.remove('hide');
    } else {
      itemLi.classList.add('hide');
    }
  });
}
