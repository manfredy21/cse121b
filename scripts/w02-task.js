/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Manfredy Escobar";
let currentYear = new Date().getFullYear();
let profilePicture = "images/photo.jpg";





/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);


/* Step 5 - Array */

let favFood = ['lasagna ', 'steak in term 3/4 ', 'gucamole ', 'pupusas ', 'chocolate ', 'mango '];
foodElement.innerHTML = favFood;
let newFood = 'pizza ';
favFood.push(newFood);
foodElement.innerHTML += `<br>${favFood}`;
let firstFood = favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
let lastFood = favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;



