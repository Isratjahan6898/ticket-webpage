const allDiv= document.getElementsByClassName('select-btn');

for(const div of allDiv){
   div.addEventListener("click", function(event){


    const firstconvert = getConvertValue("add-seat");
    if(firstconvert+1 > 4){
        alert(" 4 seat is limited");
        return;
    }
    event.target.style.backgroundColor = "lime";
    
    event.target.setAttribute("disabled", false);
    const addSeat = getConvertValue("add-seat");
    document.getElementById("add-seat").innerText = addSeat +1;

    const minusSeat = getConvertValue("minus-seat");
    document.getElementById("minus-seat").innerText = minusSeat-1;
    
    
    const seat = event.target.innerText;
    const seatClass='Economic';
    const price = 550;
    const selectedContainer = document.getElementById("select-container");
    const tr = document.createElement("tr");
     
    const th1= document.createElement("th");
    const th2= document.createElement("th");
    const th3= document.createElement("th");

    th1.innerText = seat;
    th2.innerText= seatClass;
    th3.innerText = price;
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    selectedContainer.appendChild(tr);
    updateTotalCost(price);
    updateGrandTotal();

   })
}

function showModal(){
    const  showDiv = document.getElementById("show-div");
    showDiv.classList.remove("hidden");

    const headerRemove = document.getElementById("header-div");
    headerRemove.classList.add("hidden");

    const mainRemove = document.getElementById("main-div");
    mainRemove.classList.add("hidden");
}

function updateTotalCost(value){
    const totalCost= getConvertValue("total-price");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}

function updateGrandTotal(status){
    const totalCost= getConvertValue("total-price");

  if(status==undefined){
    document.getElementById("grand-total").innerText = totalCost;
  }
  else {
    const couponCode = document.getElementById("coupon-code").value;
    if(couponCode == "New15"){
        const discounted = totalCost * .15;
        document.getElementById("grand-total").innerText = totalCost-discounted;
    }
    else if(couponCode == "Couple20"){
        const discounted = totalCost * .15;
        document.getElementById("grand-total").innerText = totalCost-discounted;

    }
    else{
        alert("please enter the valid coupon code")
    }
    
  }

}





function getConvertValue(id){
    const seat =document.getElementById(id).innerText;
    const convertedSeat = parseInt(seat);
    return convertedSeat;
}




 


