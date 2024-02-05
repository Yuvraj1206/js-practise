const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {             //welcome message is variable storing funtions inside object
        console.log(`${this.username} , welcome to website`);   //this keyword is used to define variable in same scope
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);     

// function chai(){               //function me aise this use nhi kar sakte object jaisa
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {       
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {          //arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      //implicit return in arrow function

// const addTwo = (num1, num2) => ( num1 + num2 )   //implicit return using () in arrow function

const addTwo = (num1, num2) => ({username: "hitesh"})  //yaha object return kar re tho usko paranthesis me wrap karna padega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()