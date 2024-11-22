const testmonialContainer = document.querySelector('.testmonial-container');
const testmonial = document.querySelector('.testmonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const local = document.querySelector('.local');
const text = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
  quisquam ducimus labore rem ipsa officia rerum veritatis reiciendis
  quos, molestiae earum porro sed similique vel dicta velit recusandae
  itaque quo. Voluptatibus ad assumenda porro dignissimos! Exercitationem,
  magnam sint? Saepe fuga repudiandae mollitia unde dolores ipsum ratione
  autem laudantium? Reiciendis aliquid doloremque, similique illo iste qui
  facere deserunt numquam molestiae assumenda tenetur et ipsa dolor ipsum
  alias mollitia eos quam saepe voluptatibus, itaque quisquam commodi ea!
  Repudiandae voluptatibus hic itaque, non accusantium omnis saepe minima,
  quia accusamus, provident est. Repellendus possimus commodi facere
  quaerat ipsum libero quae a ipsa molestiae similique.
  `;

getData();

async function getData() {
  const url = 'https://randomuser.me/api/?inc=name,picture,location';
  const res = await fetch(url);
  const { results } = await res.json();
  updateTestmonial(results);
}

function updateTestmonial(results) {
  //   console.log(results);
  testmonial.innerHTML = text;

  results.forEach((result) => {
    userName.innerHTML = `${result.name.first} ${result.name.last}`;
    userImage.src = result.picture.thumbnail;
    local.innerHTML = `${result.location.city}, ${result.location.country}`;
  });
}
