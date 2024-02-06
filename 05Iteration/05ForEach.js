// For each loop is used to iterate over array 

const games=["GTA V", "GOW", "LOU", "Uncharted"]

// games.forEach(function(value){
//     console.log(value)
// })

// games.forEach((value)=>{
//     console.log(value)
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )