const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (sectionNum) {
        debugger;
        console.log(this);
        console.log(this.sections);
        for (let i = 0; i < this.sections.length; i++) {
            if (this.sections[i].sectionNum == sectionNum) {
                this.sections[i].enrolled++;
                renderSections(this.sections);
            }
        }

    },
    dropStudent: function (sectionNum) {
        debugger;
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (this.sections[sectionIndex]) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
    activitiesStudent: function (sectionNum, activity) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (this.sections[sectionIndex]) {
            if (activity == "enroll") {
                this.sections[sectionIndex].enrolled++;
            } else if (activity == "drop") {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

function setCourseInfo(course) {

    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;

};

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}



document.querySelector("#enrollStudent")
    .addEventListener('click', function (e) {
        const sectionNumber = document.querySelector("#sectionNumber").value;
        console.log(sectionNumber);
        aCourse.activitiesStudent(sectionNumber, "enroll");
    });

document.querySelector("#dropStudent")
    .addEventListener('click', function (e) {
        const sectionNumber = document.querySelector("#sectionNumber").value;
        console.log(sectionNumber);
        aCourse.activitiesStudent(sectionNumber, "drop");
    });

setCourseInfo(aCourse);
renderSections(aCourse.sections);