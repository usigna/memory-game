function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab);

const cardArray = [
  {
    name: 'monster-1',
    img: 'img/monster-1.png'
  },
  {
    name: 'monster-2',
    img: 'img/monster-2.png'
  },
  {
    name: 'monster-3',
    img: 'img/monster-3.png'
  },
  {
    name: 'monster-4',
    img: 'img/monster-4.png'
  },
  {
    name: 'monster-5',
    img: 'img/monster-5.png'
  },
  {
    name: 'monster-6',
    img: 'img/monster-6.png'
  },
  {
    name: 'monster-7',
    img: 'img/monster-7.png'
  },
  {
    name: 'monster-8',
    img: 'img/monster-8.png'
  },
  {
    name: 'monster-9',
    img: 'img/monster-9.png'
  },
  {
    name: 'monster-10',
    img: 'img/monster-10.png'
  },
  {
    name: 'monster-1',
    img: 'img/monster-1.png'
  },
  {
    name: 'monster-2',
    img: 'img/monster-2.png'
  },
  {
    name: 'monster-3',
    img: 'img/monster-3.png'
  },
  {
    name: 'monster-4',
    img: 'img/monster-4.png'
  },
  {
    name: 'monster-5',
    img: 'img/monster-5.png'
  },
  {
    name: 'monster-6',
    img: 'img/monster-6.png'
  },
  {
    name: 'monster-7',
    img: 'img/monster-7.png'
  },
  {
    name: 'monster-8',
    img: 'img/monster-8.png'
  },
  {
    name: 'monster-9',
    img: 'img/monster-9.png'
  },
  {
    name: 'monster-10',
    img: 'img/monster-10.png'
  }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', './img/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const resultDisplay = document.getElementById('result');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId.setAttribute('src', './img/blank.png')];
    cards[optionTwoId.setAttribute('src', './img/blank.png')];
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', './img/empty.png');
    cards[optionTwoId].setAttribute('src', './img/empty.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', './img/blank.png');
    cards[optionTwoId].setAttribute('src', './img/blank.png');
  }

  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if(cardsWon.length == cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations you found them all!';
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}