const promiseOne = new Promise(function(resolve, reject){        //creating promises
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()                                                  //to call from then function
    }, 1000)
})

promiseOne.then(function(){                                            
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){                        //promise without variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour                                                     //using then,catch and finally
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {                              //returned value from then is received by another then
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))   



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){                           //  using async function
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()                                //calling async function

// async function getAllUsers(){                                         //fetching already created api using async
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')    //sabse pehle ye output de ra console me  //fetching already created api
// .then((response) => {
//     return response.json()                             //converting response from string to json
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

//---------------------BY Yuvraj---------------

const YuvrajPromise=new Promise(function(resolve,reject){
    setTimeout(function(){                                     //will execute after 1 sec
        let error=false
        
        if(!error) resolve({UserName: "Yuvraj", Pass: "123"})
        else reject("Yuvraj ka promise jutha hai")

    },1000)
})

YuvrajPromise
.then(function(response){
    // console.log(response.UserName+" ka promise saccha hai"+ "and password hai:-" + response.Pass)
    return response
})
.then((user)=>{                           //ye arrow function me hum kiye hai       //ye pehle walle then ka return receive karega
    console.log(user.UserName+" ka promise saccha hai and password hai:-" + user.Pass)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{                               //ye sala hamesa run hoga error ho ya na ho
    console.log("Toh patta chal gya na Yuvraj ka promise")
})


//fetching data from github api
//no need to create promise, just fetch from link

fetch("https://api.github.com/users/yuvraj1206")      //sabse pehle ye output de ra console me
.then((data)=>{
    return data.json()                           //converting from string to Json(on=bject jaisa) 
})
.then(function(data){
    console.log(data)
    console.log(data.name+ " Ka github se nukale hai promise")
})
.catch((error)=>{
    console.log(error)
})
