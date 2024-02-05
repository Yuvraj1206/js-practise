// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      //semi colon yaha lagana hai taki pata chale end kaha hoga

( (name) => {      //simple iffi
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')     //passing parameter


// ( (name) => (console.log(`DB CONNECTED TWO ${name}`))  //apun ka creation
//  )('hitesh')     //passing parameter