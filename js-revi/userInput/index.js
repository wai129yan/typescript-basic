//How to accept user input

//1. Using prompt() function
// 2. Professional way = HTML form elements

 let username; 

// username = prompt("Enter your name: ");
// console.log("User name is: " + username);

document.getElementById("myBtn").onclick = function() {
    username = document.getElementById("username").value;
    // document.getElementById("myH1").innerText = "Welcome " + username;
    document.getElementById("myH1").textContent = `Welcome ${username}`; //template string
    console.log("User name is: " + username);
}