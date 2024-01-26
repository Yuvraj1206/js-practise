
const mySym = Symbol("key1");

const JsUser={                           //object // object literals
    name: "Yuvraj",
    "full name": "Yuvraj saha",
    [mySym] : "mykey1",
    age: 18,
    sex: "Asli Mard",
    hobby: "Gaming",
    loation: "Jamshedpur",
    email: "yuvrajsaha@gmailcom",
    loggedIn: false,
    logginDays: ["monday", "friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// Object.freeze(JsUser)
JsUser.email = "yuvraj@microsoft.com"
// console.log(JsUser);

JsUser.Greetings = function(){
    console.log("Hello how are you");
}

JsUser.Greetings2 = function(){
    console.log(`hello this is ${JsUser.name}, how are you`);
}

console.log(JsUser);
console.log(JsUser.Greetings());
console.log(JsUser.Greetings2());