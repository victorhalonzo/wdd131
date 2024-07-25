const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>${step}</li>`;
}
const stepsHtml =  steps.map(step => listTemplate(step)); // use map to convert the list from strings to HTML
console.log(stepsHtml);
//document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades= ['A','B','A'];
function convertGrades(letter){
    if(letter=='A'){
        return 4;
    }else if(letter=='B'){
        return 3;
    }
};

let gpaPoints= grades.map((grade)=> convertGrades(grade));
console.log(gpaPoints);

let average = gpaPoints.reduce((total, point) => total + point, 0) / gpaPoints.length;
console.log(average);

const fruits=['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let fruits2 = fruits.filter(fruit => fruit.length > 6);
console.log(fruits2);

let numbers=[12, 34, 21, 54];
const luckyNumber=21;
console.log(numbers.indexOf(21));

let courseName="JavaScript";
let stuFirstName="Victor";
console.log(`Welcome to the ${courseName} ${stuFirstName}!` );


/* let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'};
let dose=0;
console.log(  esomeprazole['amount']); */