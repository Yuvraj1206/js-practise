const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})     //map will iterate and return each value of array after some processing

const newNums = myNumers
                .map((num) => num * 10 )                 //using multiple map and filter in a array
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);