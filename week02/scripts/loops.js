myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

/*
myInfo.favoriteFoods.forEach((e) => {
    let li_element = document.createElement("li")
    li_element.textContent = e;
    document.querySelector("#favorite-foods").appendChild(li_element);
});
*/

myInfo.favoriteFoods.map((e) => {
    let li_element = document.createElement("li")
    li_element.textContent = e;
    document.querySelector("#favorite-foods").appendChild(li_element);
});

myInfo.placesLived.map((e) => {
    let dt_element = document.createElement("dt")
    dt_element.textContent = e.place;
    document.querySelector("#places-lived").appendChild(dt_element);
    let dd_element = document.createElement("dd")
    dd_element.textContent = e.length;
    document.querySelector("#places-lived").appendChild(dd_element);
    
});

/*
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];
 
let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];
 
let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];
 
let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];
 
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);
*/