let car ={
    name:"swift",
    model:"2021",
    year:2023,
}
 
function displaypropert(car)
{
    for(let carproperty in car)
    {
        console.group(`${carproperty}:${car[carproperty]}`)
    }
 
}
 displaypropert(car);
