//Use an array inside an object

const adventurer = {
    name: "Macreen",
    hitPoint: 10,
    belongings: ["sword", "potions", "bombs"],
    companion: {
        name: "Anders",
        type: "Fairy",
        belongings: ["pixie dust", "sleeping powder", "health tome"]
    }
}

//access the values in the array

//console.log(`My companions name is ${adventurer.companion.name}');
//console.log('one of my companions belongings is ${adventurer.companion.belongings[2]`});

//access the first belonging

// console.log('first belonging: ${adventurer.belongings[0]}');

//iterate over an array inside of an object

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i])
// }

//#1 OBJ within OBJ

// const movies = [
//     {
//         title: "Super Mario Bros Movie"
//     },
//     {
//         title: "Sonic the Hedgehog: The Movie"
//     },
//     {
//         title: "Rush Hour"
//     }
// ];

// console.log(movies[0].title) //object
// // Looping over array of objects

// for(let i = 0; i <movies.length; i++){
//     console.log(movies[i].title)
// }

// const foo = {
//     arr: [1,2,3],
//     obj: {
//         prop: "object property"
//     },
//     doSomething: () => {
//         console.log("I did something!")
//     }
// }

// console.log(foo.arr[0]); 
// console.log(foo.obj.prop)
// foo.doSomething();

// const foo = [
//     [1, 2, 3,],
//     ["4", "5", "6"],
//     [7, 8, 9],
//     ()=>{
//         console.log("I am a function inside an array")
//     }
// ]
// console.log(foo[0])
// //[]
// console.log(foo[0][1])
// // 2

// //Storing functions in an array 
// console.log(foo[3]())

//Creating a class

class Character {
constructor(name, age, eyes, hair, lovesCats = true, lovesDogs){
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
}
setHairColor (HairColor){
    this.hair = HairColor;
}
    //method 1
        greet (otherCharacter){
            console.log(`Hello ${otherCharacter}`);
        }
        smith(){
            console.log('I smite thee you vile person!')
        }
}

const alexander = new Character();
const brock = new Character();

// alexander.greet("Brock");
// brock.greet("Alexander");
// alexander.smite()
// name, ages, eyes, hair
const azreal = new Character('azreal', '150', 'green', 'silver');
azreal.setHairColor('red')
console.log(azreal);