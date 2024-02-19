const allseat = document.getElementsByClassName('select-btn');
 let totalSeat = 8;
 let addSeat= 0;

 for(const seat of allseat){
  
    seat.addEventListener('click', function(e){
        totalSeat=totalSeat-1;
        addSeat=addSeat+1;
        document.getElementById("minus-seat").innerText=totalSeat;
        document.getElementById("add-seat").innerText=addSeat;
        

      
       
        
    })
 }

function showDivElement(){
    const showSection =document.getElementById('showDiv');
    showSection.classList.remove('hidden');


}
