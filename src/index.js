import catOrDog from './cat-or-dog.js';

//const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-pic');
const dogNode = document.getElementById('dog-count');
const catNode = document.getElementById('cat-count');
const radioForm = document.getElementById('radio-form');



let  catCount = 0;
let  dogCount = 0;

radioForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';
    if(animal === 'cat') {
        imageSource = '../assets/cat.jpg';
        catCount++;
        catNode.textContent = catCount;
    }  
    else {
        imageSource = '../assets/dog.jpg';
        dogCount++;
        dogNode.textContent = dogCount;
    }

    image.src = imageSource;
    image.classList.remove('hidden');
  
});

radioForm.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(radioForm.elements.side.value);
});



// grab form node form  dom


// addEventListener to form Node

//have button/form submit generate random number

// create function that takes randomNumber

// assign image tag either cat or dog