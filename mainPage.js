function myMove() {
  var elem = document.getElementById("ExpButton");   
  var pos = elem.getBoundingClientRect().top + 300;
  var rot = -45;
  //var id = setInterval(frame, 1);
  var idrot = setInterval(rotation,10);
  function rotation() {
    if(rot == 0){
      clearInterval(idrot);
    }else {
      console.log(pos-rot);
      rot++;
      elem.style.transform = "rotate(" + rot + "deg)";
      elem.style.top = pos +10+ 'px'; 
      elem.style.left = pos +10 + 'px'; 
      pos = pos + 10;     
    }
  }
}