document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || phone === "" || message === ""){
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email.");
        return;
    }

    // Remove spaces from phone number
    let cleanPhone = phone.replace(/\s/g, "");

    let phonePattern = /^[0-9]{11}$/;

    if(!phonePattern.test(cleanPhone)){
        alert("Enter a valid 11-digit phone number.");
        return;
    }

    alert("Message sent successfully!");

    document.getElementById("contactForm").reset();

});
