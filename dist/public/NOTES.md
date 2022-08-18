NAVBAR
HTML >>
<!-- <nav class="nav">
    <div class="logoCont">
        <a href="#home" ><img class="logo-navbar" src="ASSETS/LOGO/Logo_black_1.png" alt=""></a>

    </div>
    <div class="topnav" id="myTopnav">
        
        <a href="landing.html">Inicio</a>
        <a href="#contact">Terminos y Condiciones</a>
        <a href="#about">¿Quienes Somos?</a>
        <a href="#FAQ">FAQ</a>
        
      </div>
      <a href="javascript:void(0);" id="icon" class="icon" onclick="navCollapse()">
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
    background-color: #fff;
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
    font-size: 0.9em;
  }
  
  .topnav a:hover {
    background-color: rgba(235, 147, 134, 0.019);
  }
  

  
 .nav .icon {
    display: none;
    color: rgb(235, 147, 134);
    font-size: 1.5em;
  }
  .colorActive i{
    color: #fff;
  }
  @media screen and (max-width: 700px) {
    
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
  
  @media screen and (max-width: 700px) {
    
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



ESTRUCTURA BASICA DE HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="../ASSETS/LOGO/Logo_white.svg" type="image/x-icon">
    <title>Document</title>
</head>
<body class="" id="body">
    <nav class="nav">
        <div class="logoCont">
            <a href="#home" ><img class="logo-navbar" src="../ASSETS/LOGO/Logo_black.svg" alt=""></a>
    
        </div>
        <div class="topnav" id="myTopnav">
            
            <a href="landing.html">Inicio</a>
            <a href="#">Mis Pedidos</a>
            <a href="qs.html">Mi Cuenta</a>
            <a href="faq.html">¡Conócenos!</a>
            
          </div>
          <a href="javascript:void(0);" id="icon" class="icon" onclick="navCollapse()">
            <i class="fa fa-bars"></i>
          </a>
        </nav>



    
    
    
    
    
    
    <script src="js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

</body>
</html>