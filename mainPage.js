function myMoveExp() {
  var elem = document.getElementById("ExpButton");

  var isClicked = false;
  if(elem.getBoundingClientRect().top >= -100) {
    isClicked = true;
  }
  
  if(isClicked) {
    var posH = elem.getBoundingClientRect().top + elem.offsetHeight/2;
    var posW = elem.getBoundingClientRect().left + elem.offsetWidth/2;
    var rot = 0;

    var diffW = (elem.offsetWidth/2) /45;
    var diffH = (elem.offsetHeight/2) /45;
    var idrot = setInterval(rotation,10);
    function rotation() {
      if(rot == -45){
        clearInterval(idrot);
      }else {
        rot--;
        posW -= diffW;
        posH -= diffH;
        elem.style.transform = "translate("+posW+"px,"+posH+"px) rotate(" + rot + "deg)";
      }
    }
  }else{
    var posW = 0;
    var posH = 0;
    var rot = -45;
    //var id = setInterval(frame, 1);
    var diffW = (elem.offsetWidth/2) /45;
    var diffH = (elem.offsetHeight/2) /45;
    var idrot = setInterval(rotation,10);
    function rotation() {
      if(rot == 0){
        clearInterval(idrot);
      }else {
        rot++;
        posW += diffW;
        posH += diffH;
        elem.style.transform = "translate("+posW+"px,"+posH+"px) rotate(" + rot + "deg)";   
      }
    }
  }
}

var positionW = 0;
var positionH = 0;
function myMoveComp() {
  var elem = document.getElementById("CompButton");

  var isClicked = false;
  if(elem.getBoundingClientRect().top >= -100) {
    isClicked = true;
  }
  
  if(isClicked) {
    var posH = positionH;
    var posW = positionW;
    console.log(posW);
    var rot = 0;

    var diffW = (elem.offsetWidth/2) /45;
    console.log(diffW);
    var diffH = (elem.offsetHeight/2) /45;
    var idrot = setInterval(rotation,10);
    function rotation() {
      if(rot == 45){
        clearInterval(idrot);
      }else {
        rot++;
        posW += diffW;
        posH -= diffH;
        console.log(posW);
        elem.style.transform = "translate("+posW+"px,"+posH+"px) rotate(" + rot + "deg)";
      }
    }
  }else{
    var posW = 0;
    var posH = 0;
    var rot = 45;
    //var id = setInterval(frame, 1);
    var diffW = (elem.offsetWidth/2) /45;
    var diffH = (elem.offsetHeight/2) /45;
    var idrot = setInterval(rotation,10);
    function rotation() {
      if(rot == 0){
        clearInterval(idrot);
      }else {
        rot--;
        posW -= diffW;
        posH += diffH;
        console.log(posW);
        elem.style.transform = "translate("+posW+"px,"+posH+"px) rotate(" + rot + "deg)";   
        positionH = posH;
        positionW = posW;
      }
    }
  }
}