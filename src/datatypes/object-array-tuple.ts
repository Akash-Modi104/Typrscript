// object
// Array
// tuple



const person1:{
    name:string;
    age:number;
}={
    name: "akash",
    age: 5
}
console.log(person1.name);



const person2:{
    name:string;
    age:number;
    hobbies:string[];
}={
    name: "akash",
    age: 5,
    hobbies: ["coding","holding"]
}
console.log(person2.hobbies);


const person3:{
    name:string;
    age:number;
    hobbies:any[];
}={
    name: "akash",
    age: 5,
    hobbies: ["coding","holding",1]
}
console.log("hobbies "+person3.hobbies[0]);
for (const hobby of person3.hobbies){
console.log(hobby);
}


// #tuple has defined structure howerver tuple support push

let tuple:[string,number]
tuple=["akash",2]
tuple.push(8)
// tuple[0]=5
console.log(tuple)