let productoMatriz = (matriz1,matriz2) =>{

    let suma = 0;

    let resultadoFinal = "";

    let matrizResultante = [];

    for (let x = 0; x < matriz1.length; x++) {
        
        matrizResultante.push([])
        
    }

    if ((matriz1[0].length === matriz2.length) 
    
        && matrizRectangular(matriz1) && matrizRectangular(matriz2) ) {

            for (let x = 0; x < matriz1.length; x++) { 

                for (let y = 0; y < matriz2[0].length; y++) {
                   
                 for (let z = 0; z < matriz2.length; z++) {
                    
                     suma = suma + (matriz1[x][z] * matriz2[z][y]);
                      
                     
                    }
                    matrizResultante[x].push(suma);
         
                    suma = 0;
                }
            resultadoFinal = matrizResultante;
         }
         

        }
        else {resultadoFinal = "no anda";}

        return resultadoFinal; 
}

productoMatriz([[1,2,4],[2,5,4]],[[2,5],[4,1],[7,5]]);
