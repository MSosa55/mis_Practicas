
      let numeroSecreto = generarNumeroSecreto();
      let intentos = 1;

    
      function asignarTextoElemento(elemento, texto){
          let elementoHTML = document.querySelector(elemento);
          elementoHTML.innerHTML = texto;
      }
      //declaración de la función
      function verificarIntento(){
          let numeroDelUsuario = parseInt(document.getElementById("valorUsuario")).value;
          console.log(numeroSecreto);
          console.log(intentos);
        if (numeroDelUsuario === numeroSecreto){
         asignarTextoElemento('p',`Correcto, acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}` );
         document.getElementById('reiniciar').removeAttribute('disabled');
         //el usuario no acertó
        } else {
            if (numeroDelUsuario > numeroSecreto){
              asignarTextoElemento('p','El numero secreto es menor');
            } else {
              asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
      return;
      }

      function limpiarCaja(){
         document.querySelector('#valorUsuario').value = "";
        
      }
      function generarNumeroSecreto(){
          return Math.floor(Math.random()*10)+ 1;

      }
      asignarTextoElemento('h1','Juego del Numero Secreto!');
      asignarTextoElemento('p','Indica un Numero del 1 al 100');