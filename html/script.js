var d = 0;
var Interval = setInterval(()=> {
    document.getElementById('timer').innerHTML = ++d;
    if(d >= 10 ){
        document.getElementById('timer').style.background = '#008000';
        clearInterval(Interval)
        document.getElementById('timer').innerHTML = '';
    };
},300)


// setInterval(()=> {
// var n =new Date();
// var d =n.toLocaleTimeString();
//     document.getElementById('timer').innerHTML = d;
// }, 1000)