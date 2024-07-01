console.log('heyy there!!');
a=8;
var a = 8;
let g=23;
var r=true;
// {
//     var a=23; //latest value is considered
//     let g = 5;
//     console.log(g);
//     console.log(a);
// }
// console.log(a);
// console.log(typeof(r));
// // JAVA SCRIPT OBJECTS
// let person ={
//     name: 'sradhss',
//     age : 20,
//     location : 'kottayam'

// }
// console.log(person.name);


// let arr= ['meera','jaison','sraddha',10]
// console.log(arr[3])
// console.log(arr.length)
// arr.push(3)
// console.log(arr)
// let arr_obj=[{age:23,location:'tvm'},{age:22,location:'hfh'}]
// console.log(arr_obj[1].location)


// function add(a,b){
//     var sum= a+b;
//     return sum;
// }
// console.log(add(1,2))

// var a = 5
// var b = ++a
// console.log(b);
// // var c = a++
// console.log(a++);
// console.log(a);
// var a1=99;
// var a2=99;
// if (a1>a2) {
//     console.log('a1 is greater')
// }
// else if(a1==a2) {
//     console.log('a1 is same as a2 and the value is'+a1)

// }
//  else {
//     console.log('a2 is larger')
// }
var arr2 =[10,20,30,40]
for (let i =0; i < arr2.length ; i++) {
    console.log(arr2[i])
    
}
for (const i in arr2){
    console.log(i)
}
for (const i of arr2){
    console.log(i)
}