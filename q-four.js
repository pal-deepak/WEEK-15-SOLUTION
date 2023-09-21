let student={
    name:"DEEPAK",
    age:22,
    id:1,
}

//  console.log(Object.hasOwnProperty("name")); 

// or

function chechspecific(student,propertyname)
{
 return Object.hasOwnProperty(propertyname);
}
 let res=chechspecific(student,"name");
 console.group(res);
 

