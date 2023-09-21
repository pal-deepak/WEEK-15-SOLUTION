let student ={
    name:"Deepak",
    age:20,
    grade:'C',
}

student.grade="A";
function showupdated(student)
{
    for(let val in student)
    {
        console.log(`${val} :${student[val]}`);
    }
}
//  console.log(student)
showupdated(student);