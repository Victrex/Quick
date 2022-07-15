NAVBAR
HTML >>
<!-- <nav class="nav">
    <div class="logoCont">
        <a href="#home" class="active"><img class="logo-navbar" src="ASSETS/LOGO/Logo_black_1.png" alt=""></a>

    </div>
    <div class="topnav" id="myTopnav">
        
        <a href="#news">Inicio</a>
        <a href="#contact">Terminos y Condiciones</a>
        <a href="#about">¿Quienes Somos?</a>
        <a href="#FAQ">FAQ</a>
        
      </div>
      <a href="javascript:void(0);" class="icon" onclick="navCollapse()">
        <i class="fa fa-bars"></i>
      </a>
</nav> -->
<<
CSS>>
<!-- 
.logo-navbar{
    height: 30px;
    
  }
  
  .nav{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 19px rgba(235, 148, 134, 0.39);
    align-items: center;
    padding-left: 20px;
    height: 60px;
  }

  .topnav {
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    
  }
  
  .topnav a {
    float: left;
    display: flex;
    color: #000000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    flex-direction: column;
    flex-wrap: wrap;
    
  }
  
  .topnav a:hover {
    background-color: rgba(235, 147, 134, 0.019);
  }
  

  
 .nav .icon {
    display: none;
    color: rgb(235, 147, 134);
    font-size: 1.5em;
    z-index: 999;
  }
  .colorActive i{
    color: #fff;
  }
  @media screen and (max-width: 650px) {
    
    .topnav a {display: none;}
    .nav a.icon {
      display: block;
      position: absolute;
        right: 10px;
        top: 10px;
    }
    
    .logoCont{
        width: 100%;
        display: flex;
        justify-content: center;
      }
  }
  
  @media screen and (max-width: 650px) {
    
    .topnav.responsive {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(235, 147, 134);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: -30;
    }
    .topnav.responsive .icon {
      position: absolute;
      
    }
    .responsive a{
        color: #fff;
        font-size: 1.5em;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
   -->
  <<
JAVASCRIPT
<!-- function navCollapse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } -->

