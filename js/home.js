// add money to the account

document.getElementById("btn_add_money")
    .addEventListener("click",function(e){
        e.preventDefault();
        const addMoney = document.getElementById("input_add_money").value ;
        
        const pinNumber = document.getElementById("input_pin_number").value;
        console.log(addMoney,pinNumber);
        
        
        // console.log("add money button");
        
    })