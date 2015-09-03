function scrollChange(){
  var distanceY = window.scrollY;
  var shrinkOn = 100;
  var header = document.getElementById('menuBar');
  var headerSize = $("#menuBar").height();

  if (distanceY > shrinkOn) {
    $("#menuBar").animate({ height:'60'}, 0);
  } else {
    if (headerSize < 61) {
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
    text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Tenemos más de 35 años <br>de experiencia internacional</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
  }else{
    if (option == 2) {
      text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Organizamos los mejores eventos <br>para satizfacer tus necesidades</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
    }else {
      if (option == 3) {
        text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Los mejores viajes <br>y eventos corporativos</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
      }else {
        if (option == 4) {
          text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Desde el desarrollo del concepto <br/> hasta la ejecución</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
        }else {
          if (option == 5) {
            text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Descubre una nueva y<br>diferente forma de viajar</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
          }else{
            if (option == 6) {
              text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Contáctanos</span><br></div><br><div class="wow fadeIn"><img src="res/img/graph/adorno.png" alt="" /></div>';
            }else {
              if (option == 0) {
                text = '<div class="wow fadeIn animation-one"><span class="light" style="font-size:50px; font-weight: 400;">Somos la mejor<br>opción para tu evento</span><br></div><br><div class="wow fadeIn animation-one"><img src="res/img/graph/adorno.png" alt="" /></div><br><div class="wow fadeIn animation-one"><input type="button" name="name" value="Ver más" class="ghost-light" style="width: 200px;"></div>';
              }else{
                if (option == 7) {
                  text = '<div class="wow fadeIn animation-one"><span class="light" style="font-size:50px; font-weight: 400;">Visit our website <br>in your language</span><br></div><br><div class="wow fadeIn animation-one"><img src="res/img/graph/adorno.png" alt="" /></div><br><div class="wow fadeIn animation-one"><input type="button" name="name" value="Ver más" class="ghost-light" style="width: 200px;"></div>';
                }
              }
            }
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

function icons(value){
  var icon = "icon"+value;
  var desc = "desc"+value;

  document.getElementById(icon).style.display = "none";
  document.getElementById(desc).style.display = "";

  console.log(icon + desc);
}
