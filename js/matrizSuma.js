let matrizSuma = (matriz1,matriz2) => {
    let resultadoFinal = ""; 

    let suma = 0;
  
    let resultado =[];

    for (let x = 0; x < matriz1.length; x++) {
        resultado.push([]);
    }
  
    if (matrizRectangular(matriz1) && matrizRectangular(matriz2) 
        && (matriz1.length === matriz2.length) && (matriz1[0].length === matriz2[0].length)) {
         for (let n = 0; n < matriz1.length; n++) {
                 for (let i = 0; i < matriz1[0].length; i++) {
                     
                    suma = matriz1[n][i] + matriz2[n][i];
                    
                    resultado[n].push(suma);
   
                 }
         }
       
       resultadoFinal = resultado;    
    }
       else{ resultadoFinal = "Las matrices tienen que ser iguales" }
             return resultadoFinal;
}   

matrizSuma([[2,3,-3],[6,3,3]],[[2,3,-5],[6,3,4]]);