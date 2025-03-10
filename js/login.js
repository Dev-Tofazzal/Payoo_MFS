// setp-1 set event handler
document.getElementById("btn_login").addEventListener("click",
    function(e){
        // step-2 : prevent default behavior
        e.preventDefault()
        console.log("login button click hoyase");

        // step-3: get the phone number
        const phoneNumber = document.getElementById("phone_number").value;
        
        
        const pinNumber = document.getElementById("pin_number").value;
        console.log(phoneNumber,pinNumber);
        
        if(phoneNumber=== "01302497001" && pinNumber=== "1234"){
            console.log("You are logged in");
            window.location.href= "../home.html";
        }
        else{
            alert("Wrong phone number or pin")
        }
    })