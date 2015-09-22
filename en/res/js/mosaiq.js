function mosaiq(value){
  var section = "tide-content-" + value;
  var button = "tide-button-" + value;
  console.log(section);

  document.getElementById(section).style.display = "";
  document.getElementById(button).style.display = "none";
}
