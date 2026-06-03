//map loop
//map array ma matra launa milcha
//element ko value lai modify garna map loop use garincha
let ar1=[1,2,3,4,5];
//ar=[4,4,4,4,4]    values herdai return hancha
//              1 , 0
//              2 , 1
//              3 , 2
//              4 , 3
//              5 , 4 first case ma return 4 huncha so kei function navai simply 4 return garcha
let ar=ar1.map((item,i)=>{
    return 4;
})
console.log(ar);

let ar2=ar1.map((item,i)=>{
    return item*item; //return ley chai ar2 ma value haldai jancha
})
console.log(ar2);

let ar3=ar1.map((item,i)=>{
    return item*2;
})
console.log(ar3);   

let ar4=ar1.map((item,i)=>{
    return item*i; //index sanga multiply gardai jancha
});
console.log(ar4);


let ar6=[20,30,10,5];
let ar5=ar6.map((item,i)=>{
    if(item>18)
    {
        return item*2;

    }
    else{
        return item*0;
    }
});
console.log(ar5);


//euta matra item modify bhako cha vane map loop use garna milcha
//name chai string ma modify vako cha , age number ma(integer)
//input array ma cha hamlai output ni array ma chaiyeko cha vane map loop use garna milcha
//input 3 cha output ni 3 cha so map loop use garna milcha
let users=[
{name:"Tanisha",age:21},
{name:"Swornima",age:20},
{name:"Sita",age:19}];

let user=users.map((item,i)=>{
    return item.name; //name chai string ma modify vako cha , age number ma(integer)
});
console.log(user);

let ages=users.map((item,i)=>{
    return item.age;
});
console.log(ages);



