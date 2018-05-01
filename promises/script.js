var p = new Promise((resolve, reject)=>{
    resolve("hello");
});

p.then((response)=>{
    console.log("then " + response)
}).catch((error)=>{
    console.log("error " + error)
})