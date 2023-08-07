const calculoIMC = () => {

    while (true) {
        //Almaceno datos recibidos por el usuario
      let peso = parseFloat(prompt("Ingrese su peso en KG"));
      let altura = parseFloat(prompt("Ingrese su altura en METROS"));
        
      //Verifico que el tipo de dato no sea otro que Number
      if (isNaN(peso) || isNaN(altura)) {
        alert("Datos ingresados incorrectos");
        continue;
      }
      
      //Comprobacion para que ingrese un numero mayor a 0
      if (peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese datos mayores a 0");
        continue;
      }
      
      //Calculo de IMC
      let imc = peso / (altura * altura);
      let mensaje;
      
      switch (true) {
        case imc < 18.5:
          mensaje = "Su peso está por debajo del normal";
          break;
        case imc >= 18.5 && imc < 25:
          mensaje = "Tu IMC es normal";
          break;
        case imc >= 25 && imc < 30:
          mensaje = "Tu IMC es superior al normal (Sobrepeso)";
          break;
        default:
          mensaje = "Tienes obesidad";
      }
  
      alert(`Tu IMC es: ${imc.toFixed(2)}, según el Instituto (NHLBI) ${mensaje}`);
      
      //Compruebo si desea hacer otro calculo IMC o salir de la app
      let seguir = prompt("¿Deseas calcular el IMC nuevamente? (si / no)");
      if (seguir !== "sí" && seguir !== "si") {
        break;
      }
    }
  };
  
  calculoIMC();

