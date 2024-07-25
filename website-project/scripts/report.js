let types = window.localStorage.getItem("types-ls").split(",") || [];
console.log(types);

let totalType1 = 0, totalType2 = 0, totalType3 = 0;

types.map((type) => {
    if (type == 1) {
        totalType1++;
    } else if (type == 2) {
        totalType2++;
    } else if (type == 3) {
        totalType3++;
    }
});

function decisionTemplate() {
    if (totalType3 <= 2) {
        return `<p>You have passed the inspection.</p>`
    } else {
        return `<p>You have not passed the inspection.</p>`
    }
}

function reportTemplate() {
    return `<p>You have <span>${totalType1}</span> defect(s) of <span>Type 1</span>,
     <span>${totalType2}</span> defect(s) of <span>Type 2</span> and 
     <span>${totalType3}</span> defect(s) of <span>Type 3</span></p>`;
}

document.querySelector("#reportVehicle").innerHTML = reportTemplate();
document.querySelector("#decision").innerHTML = decisionTemplate();