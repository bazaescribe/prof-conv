function showDetails(value){
  var name = "detail"+value;
  var div = document.getElementById(name);
  var height = div.clientHeight;

  if(height > 0){
    div.style.height = "0px";
    div.style.border = "0px solid white";
  }else{
    div.style.height = "330px";
    div.style.border = "1px solid #B9812B";
  }
}
