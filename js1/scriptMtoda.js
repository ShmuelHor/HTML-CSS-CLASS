let arr = [2,5,9,44,89,12,45,67]

// filter
let arrFilter = arr.filter(val => val < 20);
console.log(arrFilter)

//map
let arrMap = arr.map(val => {
    if(val %2 == 0)
        return `${val}`
    else
    return val
})
 console.log(arrMap)

 //reduce
 let arrReduce = arr.reduce((sum,current)=> sum + current,0);
 console.log(arrReduce)

 