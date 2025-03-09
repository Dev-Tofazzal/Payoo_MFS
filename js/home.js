// add money to the account

document.getElementById("btn_add_money")
    .addEventListener("click",function(e){
        e.preventDefault();
        const addMoney = document.getElementById("input_add_money").value ;
        
        const pinNumber = document.getElementById("input_pin_number").value;
        console.log(addMoney,pinNumber);

        if(pinNumber === "1234"){
            const balance = document.getElementById("balance").innerText;
            const addMoneyNumber = parseFloat(addMoney)
            const balanceNumber = parseFloat(balance)
            
            
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);
            
            document.getElementById("balance").innerText = newBalance
            
            
        }
        else{
            alert("please try again")
        }
        
        
        // console.log("add money button");
        
    })