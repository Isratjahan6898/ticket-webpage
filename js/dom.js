const allDiv= document.getElementsByClassName('select-btn');

for(const div of allDiv){
   div.addEventListener("click", function(event){
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

   })
}







function getConvertValue(id){
    const seat =document.getElementById(id).innerText;
    const convertedSeat = parseInt(seat);
    return convertedSeat;
}




 


