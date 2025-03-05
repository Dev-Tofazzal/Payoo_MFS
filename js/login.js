// setp-1 set event handler
document.getElementById("btn_login").addEventListener("click",
    function(e){
        // step-2 : prevent default behavior
        e.preventDefault()
        console.log("login button click hoyase");

        // step-3: get the phone number
        const phoneNumber = document.getElementById("phone_number").value;
        console.log(phoneNumber);
        
        
    })