function estimate(){
  let count =0;
  let isYes = document.getElementById("flexRadioDefault1").checked;

 
if (isYes==true){
    count ++;
}
 let actual=(count*100)/21
  document.getElementById("chance").innerText= Math.round(actual);
}

