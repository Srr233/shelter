const NAVIGATION = document.body.querySelector(".header__nav");
const BURGER_BTN = document.body.querySelector(".header__burger");
const A_LINKS = document.body.querySelectorAll("a");

BURGER_BTN.addEventListener("click", e => {
    const element = e.target.tagName == "BUTTON" ? e.target : e.target.parentElement;
    Array.from(element.children).forEach(span => span.classList.toggle("active"));
    Array.from(A_LINKS).forEach(link => link.classList.toggle("active"));
    NAVIGATION.classList.toggle("active");
})

window.addEventListener('scroll', function() {
    const elem = document.querySelector('.header__wrapper');
  if (pageYOffset === 0) {
      elem.classList.toggle("top");
  } else {
      elem.classList.add("top");
  }
});

//--------------------------------------------------------------------------

const pets = [
    {
        "id" : "0",
        "name": "Katrine",
        "img": "../../assets/images/cat-1-3.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "1",
        "name": "Jennifer",
        "img": "../../assets/images/puppy-2-3.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "2",
        "name": "Woody",
        "img": "../../assets/images/dog-3-3.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": "3",
        "name": "Sophia",
        "img": "../../assets/images/pets-sofia.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "5",
        "name": "Charly",
        "img": "../../assets/images/pets-charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "id": "6",
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
];

const leftArrow = document.querySelector('.our-friends__arrow-left');
const rightArrow = document.querySelector('.our-friends__arrow-right');

leftArrow.addEventListener('click', sliceCard);
rightArrow.addEventListener('click', sliceCard);


function createCardPetDocument (infoPet) {
    const card = document.createElement('article');
    card.classList.add('card');
    card.dataset.id = infoPet.id;
    card.addEventListener('click', showPetCard);
    const cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('card__img');
    const cardImg = document.createElement('img');
    const cardName = document.createElement('p');
    cardName.classList.add('card__name');
    const cardButton = document.createElement('button');
    cardButton.classList.add('card__button');

    card.append(cardImgDiv);
    card.append(cardName);
    card.append(cardButton);
    cardImgDiv.append(cardImg);

    cardImg.setAttribute('src', infoPet['img']);
    cardImg.setAttribute('alt', infoPet['name']);
    cardName.textContent = infoPet['name'];
    cardButton.textContent = 'learn more';

    return card;
}

const petsDOM = pets.map(pet => createCardPetDocument(pet));

addPetsDom();

window.onresize = addPetsDom;

function addPetsDom (direction, index) {

    const widthBody = document.body.getBoundingClientRect().width;
    const slider = document.querySelector('.our-friends__slider');
    const sliderChildren = slider.children;
    const length = sliderChildren.length;

    if (typeof direction === 'string') {
        for (let i = 0; i < length; i++) {
            sliderChildren[0].remove();
        }

        if (direction === 'right') {
            index -= length - 2;
            for (let i = 0; i < length; i++) {
                slider.append(petsDOM[i + index]);
            }
        } else if (direction === 'left') {
            index += length - 1; 
            for (let i = length; i > 0; i--) {
                slider.append(petsDOM[index - i]);
            }
        }

        for (let i = 0; i < sliderChildren.length; i++) {
            sliderChildren[i].classList.add('slide');
        }

        setTimeout(() => {
            for (let i = 0; i < sliderChildren.length; i++) {
                sliderChildren[i].classList.remove('slide');
            }
        })
    } else {
        for (let i = 0; i < length; i++) {
            sliderChildren[0].remove();
        }

        if (widthBody < 760) {
            slider.append(petsDOM[0]);
        } else if (widthBody < 1126) {
            for (let i = 0; i < 2; i++) {
                slider.append(petsDOM[i]);
            }
        } else {
            for (let i = 0; i < 3; i++) {
                slider.append(petsDOM[i]);
            }
        }
    }
}

function sliceCard(e) {
    const buttonTarget = e.target.tagName === 'IMG' ? e.target.parentElement : e.target;
    const slider = document.querySelector('.our-friends__slider');
    const children = slider.children;
    
    if (buttonTarget.classList.contains('our-friends__arrow-left')) {
        if (children[0] === petsDOM[1]) {
            buttonTarget.setAttribute('disabled', true);
            buttonTarget.classList.add('disabled');
            addPetsDom('left', petsDOM.indexOf(children[0]));
        } else {
            document.querySelector('.our-friends__arrow-right').removeAttribute('disabled');
            document.querySelector('.our-friends__arrow-right').classList.remove('disabled');
            addPetsDom('left', petsDOM.indexOf(children[0]));
        }
    } else {
        if (children[children.length - 1] === petsDOM[petsDOM.length - 2]) {
            buttonTarget.setAttribute('disabled', true);
            buttonTarget.classList.add('disabled');
            addPetsDom('right', petsDOM.indexOf(children[children.length - 1]));
        } else {
            document.querySelector('.our-friends__arrow-left').removeAttribute('disabled');
            document.querySelector('.our-friends__arrow-left').classList.remove('disabled');

            addPetsDom('right', petsDOM.indexOf(children[children.length - 1]));
        }
    }
}

//--------------------------------------------------------------------------

function showPetCard(petDOM) {
    petDOM = petDOM.target;
    while (petDOM.tagName !== 'ARTICLE'|| petDOM.tagName !== 'ARTICLE') {
        petDOM = petDOM.parentElement;
    }
    const specific = pets.find(item => item.id === petDOM.dataset.id);
    console.log(specific);
}