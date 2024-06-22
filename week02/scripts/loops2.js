const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

let c=0;
/* while(c<studentReport.length){
    if(studentReport[c]< LIMIT){
        console.log(studentReport[c]);
    }
    c++;
} */

/* studentReport.forEach((e)=>{
    if(e<LIMIT){
        console.log(e);
    }
}) */;

for (const key in studentReport) {
   if(studentReport[key]<LIMIT){
    console.log(studentReport[key]);
   }
}