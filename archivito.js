var miVar = setInterval(miTimer, 100);

var con=0, con1=0, con2=0, con3=0;

function movimg(){
  con1= Math.ceil( Math.random()*4);
  con2= Math.ceil( Math.random()*4);
  con3= Math.ceil( Math.random()*4);
    switch (con1){
        case 1: 
          document.getElementById("img1").src="Imag/img1.png";
          break;
        case 2: 
          document.getElementById("img1").src="Imag/img2.png";
          break;
        case 3:
          document.getElementById("img1").src="Imag/img3.jpg";
          break;  
        case 4:
            document.getElementById("img1").src="Imag/img4.png";
            break;
        case 5: 
            document.getElementById("img1").src="Imag/img5.png";
            break;  
      }

    switch (con2){
      case 1: 
        document.getElementById("img2").src="Imag/img1.png";
        break;
      case 2: 
        document.getElementById("img2").src="Imag/img2.png";
        break;
      case 3:
        document.getElementById("img2").src="Imag/img3.jpg";
        break;  
        case 4:
          document.getElementById("img2").src="Imag/img4.png";
          break;
        case 5: 
          document.getElementById("img2").src="Imag/img5.png";
          break;  
  }

  switch (con3){
    case 1: 
      document.getElementById("img3").src="Imag/img1.png";
      break;
    case 2: 
      document.getElementById("img3").src="Imag/img2.png";
      break;
    case 3:
      document.getElementById("img3").src="Imag/img3.jpg";
      break;    
    case 4:
      document.getElementById("img3").src="Imag/img4.png";
      break;
    case 5: 
      document.getElementById("img3").src="Imag/img5.png";
      break;
}
}


function detener(){
  clearInterval(miVar);
  if (con1==con2 && con1==con3){
    alert("GANASTEEEEEE");
    document.getElementById("ganaoper").src="Imag/ganast.gif";
  }else{
    alert("P E R D I S T E :((((((((")
    document.getElementById("ganaoper").src="Imag/perdiste.gif";  
  }
}