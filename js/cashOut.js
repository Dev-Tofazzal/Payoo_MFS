document.getElementById("cash_out_btn").addEventListener("click",function(e){
    e.preventDefault();
    const cashOut = document.getElementById("cashOut_money").value;
    const cashOutPin = document.getElementById("cashOut_pin_number").value;

    if(cashOutPin === "1234"){
       const balance = document.getElementById("balance").innerText;
       const cashOutValue = parseFloat(cashOut)
       const balanceValue = parseFloat(balance)
       const newBalance = balanceValue - cashOutValue;
       
       document.getElementById("balance").innerText = newBalance
       
       
    }
    else{
        alert("please try again")
    }
    
    

    
})