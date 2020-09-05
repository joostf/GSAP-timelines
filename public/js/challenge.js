let html = document.getElementById('html')
let css = document.getElementById('css')
let js = document.getElementById('js')
let code = document.getElementById("code").contentWindow.document;

    html.value= `
<main class="challenge-main">
    <div class="context">
        <h1>Coding Challenge</h1>
    </div>
    <div class="splashscreen">
        <ul class="minor-logo">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</main>`

  css.value= `
  body {
    font-family: "Exo", sans-serif;
    margin: 0;
  }

  .splashscreen {
    background: #4e54c8;
    width: 100%;
    height: 100vh;
  }

  .context {
    width: 100%;
    position: absolute;
    top: 20vh;
  }
  .context h1 {
    text-align: center;
    color: #fff;
    font-size: 50px;
  }
  `
function compile() {
    window.onload = function() {
        code.open();
        code.writeln(
            html.value +
              "<style>" +
              css.value +
              "</style>" +
              "<style>" +
              minorLogo +
              "</style>" +
              "<script>" +
              js.value +
              "</script>"
          );
    }
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<style>" +
              minorLogo +
              "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();


  let minorLogo = `
  @import url(https://fonts.googleapis.com/css?family=Exo:400,700);* {
    margin: 0px;
    padding: 0px;
  }
  
  .minor-logo {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .minor-logo li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background-image: url(../images/logo_white.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
    mix-blend-mode: difference;
    -webkit-animation: animate 25s linear infinite;
            animation: animate 25s linear infinite;
    bottom: -150px;
  }
  .minor-logo li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  .minor-logo li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 2s;
            animation-delay: 2s;
    -webkit-animation-duration: 12s;
            animation-duration: 12s;
  }
  .minor-logo li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 4s;
            animation-delay: 4s;
  }
  .minor-logo li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
    -webkit-animation-duration: 18s;
            animation-duration: 18s;
  }
  .minor-logo li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  .minor-logo li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    -webkit-animation-delay: 3s;
            animation-delay: 3s;
  }
  .minor-logo li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    -webkit-animation-delay: 7s;
            animation-delay: 7s;
  }
  .minor-logo li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    -webkit-animation-delay: 15s;
            animation-delay: 15s;
    -webkit-animation-duration: 45s;
            animation-duration: 45s;
  }
  .minor-logo li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    -webkit-animation-delay: 2s;
            animation-delay: 2s;
    -webkit-animation-duration: 35s;
            animation-duration: 35s;
  }
  .minor-logo li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
    -webkit-animation-duration: 11s;
            animation-duration: 11s;
  }

  @-webkit-keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.7;
      /* border-radius: 0; */
    }
    100% {
      transform: translateY(-1200px) rotate(720deg);
      opacity: 0;
      /* border-radius: 50%; */
    }
  }
  
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.7;
      /* border-radius: 0; */
    }
    100% {
      transform: translateY(-1200px) rotate(720deg);
      opacity: 0;
      /* border-radius: 50%; */
    }
  }

  
  `