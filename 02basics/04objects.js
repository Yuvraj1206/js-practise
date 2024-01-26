// const tinderUser = new Object()       // object singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {            //nested object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                        // accha tarika nhi hai join karne ka object me object me object aa jaega
// const obj3 = Object.assign({}, obj1, obj2, obj4)         //joining multiple objects 

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [                        //array of object
    { 
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          //sirf key print karna hai array me 
// console.log(Object.values(tinderUser));        //sirf value print karna hai array me
// console.log(Object.entries(tinderUser));       // dono ayega nested array me

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    //destructuring

// console.log(courseInstructor);
console.log(instructor);

// {                                             API JSON
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [                                             // API JSON OF ARRAY OF OBJECT
//     {},
//     {},
//     {}
// ]
