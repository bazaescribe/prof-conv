function scrollChange(){
  var distanceY = window.scrollY;
  var shrinkOn = 100;
  var header = document.getElementById('menuBar');
  var headerSize = $("#menuBar").height();

  if (distanceY > shrinkOn) {
    $("#menuBar").animate({ height:'50'}, 0);
  } else {
    if (headerSize < 51) {
      $("#menuBar").animate({ height:'80'}, 0);
    }
  }
}

//$(menu).animate({left: "-=300px"}, 300);

function chText(option){
  var cubo = document.getElementById('title-container');
  var option = option;
  var text = "";

  if(option == 1){
    text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Tenemos más de 35 años <br>de experiencia internaiconal.</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
  }else{
    if (option == 2) {
      text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Organizamos los mejores eventos <br>para satizfacer tus necesidades.</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
    }else {
      if (option == 3) {
        text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Lorem impsum dolor <br>dolor et sit ammet.</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
      }else {
        if (option == 4) {
          text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Lorem impsum dolor <br>dolor et sit ammet.</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
        }else {
          if (option == 5) {
            text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Lorem impsum dolor <br>dolor et sit ammet.</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
          }else{
            text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Lorem impsum dolor <br>dolor et sit ammet.</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
          }
        }
      }
    }
  }
  //console.log(option);

  cubo.innerHTML = text;
}

function showMenu(value){
  var active = value;

  if (active == 0) {
    $("#side-menu").animate({ left:'0'}, 400);
    document.getElementById('burger-btn').style.display = "none";
    document.getElementById('close-btn').style.display = "";
    document.getElementById('blind').style.display = "";
  }else {
    $("#side-menu").animate({ left:'-400px'}, 400);
    document.getElementById('burger-btn').style.display = "";
    document.getElementById('close-btn').style.display = "none";
    document.getElementById('blind').style.display = "none";
  }
  //$("#side-menu").animate({ left:'0'}, 400);
}
