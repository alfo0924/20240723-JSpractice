// let s = 'hello, world';
// console.log(s);
// console.log(s.length);


// console.log(s.split('').reverse().join(''))

// let s2 = s.toUpperCase();
// console.log(s2)
// console.log(s)

// s = 'asdf asdfa asfsd'
// console.log(s.includes('Hello'))
// // s2 = s[0].toUpperCase() + s.slice(1)
// // s2 = s.charAt(0).toUpperCase() + s.slice(1)
// s2 = s.substring(0).toUpperCase() + s.substring(1)
// // s2 = s.capitalize()
// console.log(s2)

// s3='thisIs a javascript';
// console.log(s3.slice(3,5));

s4='this is javascript , hello';
console.log(s4);
ss4=s4.split('');
js=ss4[2];
js1=js.slice(0,-1);
console.log(js1);



let arr=['ba','tr','ar'];
s=arr.join( );
console.log(s);

// callBack function
arr=[11,22,33,44,35,66,77,88,999,9]
r=arr.find(x=>(x>20))
console.log(r)

console.log(arr);
s5 = arr.toSorted();
console.log(s5);


let arr2=['today','is','a','good','day'];
r2=arr2.join( ' ' );
console.log(r2);

r=arr.find(condi);
function condi(value)
{
    return value>35
}
r=arr.find(x=>x>35)
console.log(r);

let tot=0;
for(x of arr)
{
    tot+=x;
}
console.log('total of arr :  '+tot);

let tot2=0;

arr.forEach(x=>{
    tot2+=x;
})
console.log(tot2);

let tot3=0;
for(let i=0; i<=arr.length;i++)
{
    tot3+=x;
}
console.log(tot3);


names= ['Nick','Jie','Albert'];
height=[172,177,176];
weight=[67,65,72];

people=[
['Nick','172','62'],
['Jie',177,65],
['Albert',176,72]

]

bmi=weight/height*height;
const nick=
{
name:'Nick',
height:172,
weight:67,
bmi()
{
    h=this.height/100
    return this.weight/(h**2)
}

};
console.log(nick.bmi());
people.forEach(p=>{console.log('$(p.weight/(p.weight*p.weight))')/});










