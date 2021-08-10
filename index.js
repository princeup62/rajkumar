
const Items =[
{name:'Bike', price:100},
{name:'TV', price:200},
{name:'Album', price:10},
{name:'Book', price:5},
{name:'Phone', price:500},
{name:'computer', price:1000},
{name:'keyboard', price:25}
]

/*
const filterElement = Items.filter((e)=>
{
return e.name !=='Bike'
}
)

console.log(filterElement);
*/




const findElement = Items.find((e)=>
{
    return  e.name === 'Book';
});


console.log(findElement);