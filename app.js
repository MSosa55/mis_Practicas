
      let numeroSecreto = 0;
      let intentos = 0;
      let listaNumerosSorteados = [];
      let numeroMaximo = 10;
    
      function asignarTextoElemento(elemento, texto){
          let elementoHTML = document.querySelector(elemento);
          elementoHTML.innerHTML = texto;
      }
      //declaración de la función
      function verificarIntento(){
          let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);
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
          let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+ 1;
          //si el numero generado está en la lista
          if(listaNumerosSorteados. includes(numeroGenerado)){
              return generarNumeroSecreto();
          } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
          }

      }
      function condicionesIniciales(){
        asignarTextoElemento('h1','Juego del Numero Secreto!');
        asignarTextoElemento('p',`Indica un Numero del 1 al ${numeroMaximo}`);
      }
      function reiniciarJuego(){
        limpiarCaja();
        condicionesIniciales();
        numeroSecreto = generarNumeroSecreto();
      }
    condicionesIniciales();




  