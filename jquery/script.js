// GET: Using XHR

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var parsedData = JSON.parse(this.responseText);
//         parsedData.forEach(element => {
//             document.getElementsByClassName('main')[0].innerHTML = document.getElementsByClassName('main')[0].innerHTML + "***" + element.title + "\n";
//         });
//     }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// xhttp.send();


// GET: using Jquery

// $.get('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>{
//     response.forEach(element => {
//         document.getElementsByClassName('main')[0].innerHTML = document.getElementsByClassName('main')[0].innerHTML + "***" + element.title + "\n";
//     });
// })



// Get: Using jquery Ajax

// $.ajax({
//     method: "GET",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     success: function(response){
//         response.forEach(element => {
//             document.getElementsByClassName('main')[0].innerHTML = document.getElementsByClassName('main')[0].innerHTML + "***" + element.title + "\n";
//         });
//     },
// })