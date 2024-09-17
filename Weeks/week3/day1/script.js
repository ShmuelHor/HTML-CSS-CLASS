//1
function successPromise() {
    let myPromise = new Promise((resolve, reject) => {
        resolve("Success!");
    });
    return myPromise;
}

successPromise().then((result) => {
    console.log(result); 
});

//2
function a2(firstName, lastName) {
    console.log(firstName)
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${firstName} ${lastName}`);
        }, 1000);
    });
    return myPromise;
}

a2("shmuel", "horvitz").then((result) => {
    console.log(result); 
});


//3
function multiplyByTwo(num){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(num * 2);

        },500)
    });
    return myPromise;
}

function addFive(num){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(num + 5);

        },500)
    });
    return myPromise;
}

function subtractTen(num){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(num - 10);

        },500)
    });
    return myPromise;
}
addFive(2)
    .then(result => multiplyByTwo(result))
    .then(result => subtractTen(result))
    .then(result => console.log(result))

//4
 
function divide(num1,num2){
    let myPromise = new Promise((resolve, reject) => {
        if(num2 === 0)
            reject("לא ניתן לחלק ב 0 ")
        setTimeout(()=>{
            resolve(num1 / num2);

        },500)
    });
    return myPromise;
}
divide(10,0)
    .then((result) => {console.log(result); })
    .catch(error => console.log(error))

async function a5(firstName,lastName){
     await setTimeout(()=>{
         const fullName = firstName + " " + lastName
         console.log(fullName);
    },5000)
}
a5("a","a");