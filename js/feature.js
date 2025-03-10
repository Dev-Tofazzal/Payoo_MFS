document.getElementById("show_cashOut")
    .addEventListener("click",function(){
      
    document.getElementById("cash_out_form").classList.remove("hidden")

    //   hide the add money form
    document.getElementById("add_money_form").classList.add("hidden")
         
})

document.getElementById("show_addMoney")
    .addEventListener("click",function(){
        document.getElementById("add_money_form").classList.remove("hidden")
        document.getElementById("cash_out_form").classList.add("hidden")
    })