//1
function a1(num1:number,num2:number):number{
    if(num1 > num2)
        return num1;
    else
        return num2;
}
console.log(a1(6,3));

//2
function a2(num1:number,num2:number):void{
    if(num1 > num2)
        console.log(num1)
    else
        console.log(num2)}
a2(6,3);

//3
function a3(num:number):string{
    if(num % 2 === 0)
        return "Even number"
    else
    return "Odd number "
        }
console.log(a3(7));

//4
function a4(str:string):number{
    return str.length;
        }
console.log(a4("shmuel"));

//5
function a5(n:number):number[]{
    const numbers:number[] = [];
    for(let i:number = 1; i < n;i++){
        numbers.push(i);
    }
    return numbers;
        }
console.log(a5(6));

//6
function a6(numbers:number[]):number{
   
    return Math.max(...numbers);
        }
console.log(a6([1, 2, 13, 4, 5]));

//7
interface Person{
    Name:string;
    Age:number;
    isStudent:boolean;
}

const user:Person = {
Name:"shmuel",
    Age:20,
    isStudent:true
}
//8

function printPerson(user:Person):void{
    console.log(`${user.Name} ${user.Age} ${user.isStudent}`)
}
printPerson(user);

//9
function isMinor(user:Person):boolean{
    if(user.Age < 18)
        return true;
    else
    return false;
}
console.log(isMinor(user));

//10

interface Book{
    Title:string;
    Author:string;
    Year:number;
}
//11
interface Reader extends Person{
    favoriteBook:Book;
}

//12
const readers: Reader[] = [
    {
        Name: "Alice",
        Age: 25,
        isStudent: true,
        favoriteBook: {
            Title: "To Kill a Mockingbird",
            Author: "Harper Lee",
            Year: 1960
        }
    },
    {
        Name: "Bob",
        Age: 30,
        isStudent: false,
        favoriteBook: {
            Title: "1984",
            Author: "George Orwell",
            Year: 1949
        }
    },
    {
        Name: "Charlie",
        Age: 22,
        isStudent: true,
        favoriteBook: {
            Title: "The Catcher in the Rye",
            Author: "J.D. Salinger",
            Year: 1951
        }
    }
];

function a12(readers: Reader[]):Reader{
    let max:Reader = readers[0]
    for(let i:number = 1; i < readers.length;i++){
        if (readers[i].Age > max.Age)
            max = readers[i];
    }
    return max;
}
console.log(a12(readers))
//13
function a13(readers: Reader[]):Book{
    let min:Reader = readers[0]
    for(let i:number = 1; i < readers.length;i++){
        if (readers[i].favoriteBook.Year < min.favoriteBook.Year)
            min = readers[i];
    }
    return min.favoriteBook;
}
console.log(a13(readers))



// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
// ['asd',3]
function b1<T, A>(first: T, second: A): [T, A] {
    return [first, second];
}
// console.log(b1(1,"sg"))
// console.log(b1(true,"sg"))

// 2.

// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט

function b2<T, K extends keyof T>(obj: T, key: K): T[K] {

    return obj[key];
}


const person = {
    name: "John",
    age: 30
};

// console.log(b2(person, "name")); 



//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך 
// עליכם לקרוא על ולהשתמש ב: Record  



// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &