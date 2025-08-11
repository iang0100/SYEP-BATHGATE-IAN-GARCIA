const reviews = [
  {

    id: 1,
    name: 'Alain Latortue',
    job: 'Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQH1hb_YiDgvkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662519432541?e=1757548800&v=beta&t=dWbGu_R7hN520baUk1mb3oWycDN6pFQmicuewjc2cbc',
    text: "I really enjoyed teaching you and thought that you gave some insightful thoughts and words during our class discussions.",
  },
  {
    id: 2,
    name: 'Emma Garcia',
    job: 'Geometry Teacher',
    img: 'https://images.squarespace-cdn.com/content/v1/5bec73fa3917eec31d42357d/1628120571538-GLX0BDTX4GWXZ8SEO3MU/Screen+Shot+2021-08-04+at+7.41.13+PM.png?format=1000w',
    text: 'Ian, you always finish your assignments on time, which shows how responsible and hardworking you are. You hold your own and show maturity beyond your years.',
  },
  {
    id: 3,
    name: 'Eve Abraha',
    job: 'intern',
    img: 'https://images.squarespace-cdn.com/content/v1/5bec73fa3917eec31d42357d/1628120707534-L3T1VRB7DRMX8IQNQ3SY/Screen+Shot+2021-08-04+at+7.41.40+PM.png?format=1000w',
    text: 'Ian, you are such a kind and lovely student. You are very intelligent and when you buckle down, you are able to produce great work. I am very proud of you because you really came out of your shell this school year! Great job!',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});