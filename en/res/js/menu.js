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
    text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">With more than 36 years <br>of experience</span><br></div><br><div class="wow fadeIn"><img src="../res/img/graph/adorno.png" alt="" /></div>';
  }else{
    if (option == 2) {
      text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">We care every detail for <br> conducting any kind of event.</span><br></div><br><div class="wow fadeIn"><img src="../res/img/graph/adorno.png" alt="" /></div>';
    }else {
      if (option == 3) {
        text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Business trips and events</span><br></div><br><div class="wow fadeIn"><img src="../res/img/graph/adorno.png" alt="" /></div>';
      }else {
        if (option == 4) {
          text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">From the concept <br/> to the development</span><br></div><br><div class="wow fadeIn"><img src="../res/img/graph/adorno.png" alt="" /></div>';
        }else {
          if (option == 5) {
            text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Discover a new and<br>different way to travel</span><br></div><br><div class="wow fadeIn"><img src="../res/img/graph/adorno.png" alt="" /></div>';
          }else{
            if (option == 6) {
              text = '<div class="wow fadeInRight"><span class="light" style="font-size:50px; font-weight: 400;">Contact us</span><br></div><br><div class="wow fadeIn"><img src="../res/img/graph/adorno.png" alt="" /></div>';
            }else {
              if (option === 0) {
                text = '<div class="wow fadeIn animation-one"><span class="light" style="font-size:50px; font-weight: 400;">We are the best choise<br>for your event</span><br></div><br><div class="wow fadeIn animation-one"><img src="../res/img/graph/adorno.png" alt="" /></div><br><div class="center wow fadeIn animation-one"><a href="servicios.html"><div class="ghost-light" style="margin: 0 38% 0 38%;">More</div></a></div>';
              }else{
                if (option == 7) {
                  text = '<div class="wow fadeIn animation-one"><span class="light" style="font-size:50px; font-weight: 400;">Visita nuestro sitio<br>en español</span><br></div><br><div class="wow fadeIn animation-one"><img src="../res/img/graph/adorno.png" alt="" /></div>';
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

  if (active === 0) {
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
