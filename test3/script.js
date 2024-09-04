const people = ["Greg", "Mary", "Devon", "James"];
//1
people.splice(people.indexOf("Greg"),1);
//2
people.splice(people.indexOf("James"),1);
//3
people.unshift("Matt");
//4 
people.push("Shmuel");
//5

const people1 = people.splice(1);

//6
people.indexOf("Mary");
//7
people.indexOf("Foo"); // -1 כי הוא לא מצא כזה פריט
//8
people.splice(0);
people.push("Greg", "Mary", "Devon", "James");
let index = people.indexOf("Devon");
people.splice(index,1);
people.splice(index, 0, "Elizabeth");
people.splice(index +1, 0, "Artie");
//9
const whitBob = people;
whitBob.push("Bob")

console.log(whitBob)