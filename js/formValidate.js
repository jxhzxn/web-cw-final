function shopForm(){

    // var firstName = document.getElementById("firstName").value;
    // var secondName = document.getElementById("lastName").value;
    // var address = document.getElementById("address").value;
    // var email = document.getElementById("email").value;

    // if(firstName == "" || secondName == "" || address == "" || email == ""){
    //     alert("everything should be filled");
    // }
}

function shopBill(){

    prOnePrice = 100;
    prTwoPrice = 120;
    prThreePrice = 150;
    prFourPrice = 180;

    var totalPrice;



    // totalPrice = findPrice(document.getElementById("prOne").value) + findPrice(document.getElementById("prTwo").value) + findPrice(document.getElementById("prThree").value) + findPrice(document.getElementById("prFour").value)
    totalPrice = testing(document.getElementById("prOne").value) + testing(document.getElementById("prTwo").value) + testing(document.getElementById("prThree").value) + testing(document.getElementById("prFour").value)
    document.getElementById("totalQty").value = totalPrice;
    document.getElementById("totalPrice").value = totalPrice*50;

}

function testing(y){
    return parseInt(y);
}

function findPrice(x){
    var price;
    var quantity;
    if(x==""){
        
    }else{
        quantity = parseInt(x);
        price = quantity*100;
    }
    return price;
}