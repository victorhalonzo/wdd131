let types = [];

function defectTemplate(code, description, qualification) {
    let type = 0;
    if (qualification < 50) {
        type = 3;
    } else if (qualification < 70) {
        type = 2;
    } else {
        type = 1;
    }
    types.push(type);
    localStorage.setItem("types-ls", types);
    return `<tr>
      <td>${code}</td>
      <td>${description}</td>
      <td>${qualification}</td>
      <td>Type ${type}</td>`

}

document.querySelector("#register")
    .addEventListener('click', function (e) {
        e.preventDefault();
        const code = document.querySelector("#code");
        const description = document.querySelector("#description");
        const qualification = document.querySelector("#qualification");
        const tableInspection = document.querySelector("#detail-inspection");
        if(code.value!="" && description.value!="" && qualification.value!=""){
            tableInspection.innerHTML += defectTemplate(code.value, description.value, qualification.value);
        }else{
            alert("Please put info in all the fields.")
        }
        code.value = "";
        description.value = "";
        qualification.value = ""
    });

