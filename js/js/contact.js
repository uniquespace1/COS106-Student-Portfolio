document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let message=document.getElementById("message").value.trim();

if(name===""||email===""||phone===""||message===""){
alert("Please fill in all fields.");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Enter a valid email.");
return;
}

let phonePattern=/^[0-9]{11}$/;

if(!phonePattern.test(phone)){
alert("Enter a valid 11-digit phone number.");
return;
}

alert("✅ Message sent successfully!");

document.getElementById("contactForm").reset();

});
