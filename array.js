let roll = [`Yasir`, 25, true];
// console.log(array[0].charAt(2));
// roll.push(`friend`);
// console.log(roll);
// roll.pop();
// console.log(roll);
// roll.unshift(`Sir`);
// console.log(roll);
// roll.shift();
// console.log(roll);
// roll.unshift(`Sir`);
// console.log(roll);
// roll[2]=`Rajpoot`;
// console.log(roll);
// roll.splice(2,0,`Nasir`,`Janjua`,`Rajput`);
// console.log(roll);
// // roll.splice(2,1,`Rajput`);
// // console.log(roll);
// roll.splice(2,2);
// console.log(roll);

// let convertedString = roll.join(' ');
// console.log(convertedString);
// let newArray = [2,5,6];
// function even(prop){if(prop%2===0){ return true}}
// console.log(newArray.every(even));

// console.log([2,5,6].every((p)=>{return p%2===0;}));

// function yasir(x) 
// {
//     console.log("Yasir " + x);
// }
// yasir(5);

// function add(a, b) {
//     console.log(a + b);
// }
// add(5,7);

// let saya = [`Yasir`, 25];
// saya.map(
//     (prop) => {
//         if (typeof prop == NaN) {
//             console.log(false);
//         }
//         else {
//             console.log(true);
//         }
//     }
// )
// let arr = [1,2,3,4,5];

// function add(x, y) {
//   return x + y;
// }

// console.log(arr.reduce(add));

let person = {
    name: "yasir",
    age: 25
};
// person["his age"]=24;
// console.log(person["his age"]);
// // let a b c = 5;
// let x=5;
// while (x<10) {
//     console.log(x);
//     x++;
// }
// x=11;
// do {console.log(x);} while (x<10)
// for(let i=0; i<=11; i++)
// {
    // console.log(i);
// }
// outer:
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if (i == 5 && j ==5) {
//             break outer;
//             // breaks out of outer loop instead of only the inner one
//         }
//     }
// }
// let allInfo = "";
// console.log(allInfo);
// for (let i in person) {
//     allInfo += " " + person[i];
// }
// console.log(allInfo);
// let a=0;
// let ar = [1,2,3,4,5];
// for (let i of ar){
//     a+=ar;
// }
// console.log(a);
// let input = null;
// let name = input || "No Name.";
// console.log(name);

// grade = 'B';
// switch (grade) {
//   case 'A':
//     console.log("Great job");
//     break;
//   case 'B':
//     console.log("OK job");
//     break;
//   case 'C':
//     console.log("You can do better");
//     break;
//   default:
//     console.log("Oy vey");
//     break;
// }

// (
//     function(){
//         var name = `Yasir`;
//         console.log(name);
//     }
// )();


// (
//     function(nam){
//         console.log(nam);
//     }
// )(`input wala naam`);

// (
//     function(){
//         var i=9;
//         console.log(i);
//     }
// )();
// console.log(i);

// function pehlaFunction(){

//     let age = 5;
    
//     return function dusraFunction(){
        
//         console.log(age);
    
//     }

// }
// let tesraFunction = pehlaFunction();
// tesraFunction();

let car = {
    name: "supperleggra",
    make: "aston martin",
    func: function(){
        console.log(`${this.make} Runs Fast!`);
    }

}

// car.func();
// let fn = car.func;
// fn();
// 
// let secondFunction = function(){
    // console.log(`${this.name} runs very FAST!`);
// }
// secondFunction();
// car.nameFunction=secondFunction;
// car.nameFunction();
// console.log(car);

function outsideFn(naam){
    console.log(`${naam} owns an ${this.make}`);
}
// outsideFn(`Yasir`);
outsideFn.call(car, `Yasir`);
outsideFn.apply(car, [`Abdullah`]);

let pakkaFn = outsideFn.bind(car);
pakkaFn(`Junaid Bhai`);
pakkaFn(`Ali`);