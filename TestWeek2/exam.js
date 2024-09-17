//1 
function Mission1(listNumbers)  
{
   return listNumbers.filter(x => x %2 == 0);
}

//2
function Mission2(str){
    const a = str.split(" ");
    return (a.filter(x => x.length == 4)).length;
}

//3

const a = [[1,2,3],[4,5,6],[7,8,9]]
function Mission3(listTwoDimensional){
    const newListNumbers = listTwoDimensional[0];
 return newListNumbers.concat(listTwoDimensional[1],listTwoDimensional[2])
}
console.log(Mission3(a))
//4
function Mission4(listNumbers) {
    let isAscending = true;
    let isDescending = true;
    let previousNumber = listNumbers[0];
    
    for (let i = 1; i < listNumbers.length; i++) {
        if (listNumbers[i] < previousNumber) {
            isAscending = false;
        } else if (listNumbers[i] > previousNumber) {
            isDescending = false;
        }
        previousNumber = listNumbers[i];
    }
    
    if (isAscending && !isDescending) {
        return 1;
    } else if (isDescending && !isAscending) {
        return 2;
    } else {
        return 0;
    }
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}