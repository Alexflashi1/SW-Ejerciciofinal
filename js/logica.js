 function iniciar(){
 		//obtener la información de la cadena por un id
            var valor = document.getElementById("palabra").value;
            /*Lo siguiente será volver a la cadena en minúscula para que detecte a la palabras que empiecen con mayúscula
            por ejemplo si no lo hiciera detectaría como no palíndroma a la palabra "Ana" y "ana" como palíndroma*/
            valor=valor.toLowerCase();
            //Sirve para convertir a un array la palabra
            let Array= valor.split("");
            //Esta sentencia de abajo nos sirve para invertir el orden del array
            let reverse = Array.reverse();

            //Por último creamos la condición para saber si es palíndroma o no. el "join" nos sirve para unir la cadena invertida
            //y comprobar si es igual a la cadena original
         if (valor==reverse.join("")) {
         	alert(valor+ " es una palabra palíndroma");
            } else {alert(valor + " no es palíndroma");
            	
            }
         	// statement
         }
            