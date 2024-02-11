/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Manfredy Escobar",
    photo: {
        src: "images/photo.jpg",
        alt: "My Profile Picture"
    },

    favoriteFoods: [
        'Pupusas',
        'Pizza',
        'Guacamole',
        'Salad',
        'Lasagna'
    ],
    
    hobbies: [
        'video games',
        'photografy',
        'see the stars',
        'whatch Tv'
    ],

    placesLived: [
        {
            place: "Tlaquepaque, Mexico",
            length: "6 Months"
        }
    ],
};
/*
myProfile.placesLived.push(
    {
        place: 'Santa Ana, SLV',
        length: '25 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Guadalajara, MX',
        length: '2 years'
    }
);
*/
/* Populate Profile Object with placesLive objects */

function addPlace(place, length) {
    myProfile.placesLived.push({place, length});
}

addPlace("Santa Ana, El Salvador", "25 Years");
addPlace("Guadalajara, Mexico", "2 Years");


/* DOM Manipulation - Output */
document.querySelector("#name").innerHTML = myProfile.name;

/* Name */

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src
document.querySelector('#photo').alt = myProfile.photo.alt
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place=> {
    let  dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd =  document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
