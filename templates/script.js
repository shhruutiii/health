function estimate(){
  let isYes = document.getElementById("flexRadioDefault1").checked;

 let count =0;
if (isYes==true){
    count ++;
}
 let actual=(count*100)/21
  document.getElementById("chance").innerText= Math.round(actual);
}

