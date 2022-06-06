
let sdf = [[0,2,3,1,2],[1,5,6,1,2],[7,8,9,1,2],[4,5,6,1,2],[7,8,9,1,2]];

let matriz = [[1,4,2],[-2,1,4],[3,2,7]];

const matrizOrden = (matrizDesordenada) => {
   let arraySuma = []; let arrayFinal = 0;
        for (let i = 0; i < matrizDesordenada.length; i++) {
           arraySuma.push([]);
       }    
            for (let j = 0; j < (matrizDesordenada.length - 1); j++) {
                arraySuma[j].push(matrizDesordenada[j + 1])
            }
            arraySuma[(matrizDesordenada.length - 1)].push(matrizDesordenada[0])
      
      arrayFinal = arraySuma.reduce((a,b) => {
        return a.concat(b);
      });
      return arrayFinal;
}

const matrizLista = (matriz) => {
    let resultadoFinal = matriz;
     for (let i = 0; i < matriz.length; i++) {
        if (resultadoFinal[0][0] === 0) {
            resultadoFinal = matrizOrden(resultadoFinal);
        } else {
            resultadoFinal = resultadoFinal
        }
    }
    return resultadoFinal
}

const matrizDeterminanteNxN = (matrizIn,acumulador) => {
    
    let matriz = matrizLista(matrizIn)

    const firstRow = matriz[0] ; let reducedMatriz = []; let multiplier = 0; let newRow = 0;  let sumaMat = 0;

             for (let a = 1; a < matriz.length; a++) {
                 reducedMatriz.push([]);
             }
             for (let b = 1; b < matriz.length; b++) {

                 multiplier = (-matriz[b][0])/firstRow[0];

                    newRow = productoEscalar(multiplier,[firstRow]);

                        sumaMat = matrizSuma(newRow,[matriz[b]]) ;   

                    reducedMatriz[(b-1)].push(sumaMat[0])    ;
                 } 
                 let concat = reducedMatriz.reduce((a,b) => {
                    return a.concat(b);
                  });

                  for (let c = 0; c < concat.length; c++) {
                      concat[c].splice(0,1)
                  }
               
                  if (acumulador === 0 || acumulador === undefined || acumulador === "") {
                      return [concat,matriz[0][0]];
                  } else {
                      return [concat,(matriz[0][0]*acumulador)];
                    }
}

const matrizDeterminante = (parametro) => {
   if (matrizCuadrada(parametro)) {
    let matriz = [parametro]; 
    for (let i = 1; i < (parametro.length ); i++) {
        
        matriz = matrizDeterminanteNxN(matriz[0])
        
    }

    return matriz[0][0]*matriz[1]
   } else {
    
    return "La matriz debe ser matrizCuadrada."
   }
    
}

console.log(matrizDeterminante(matriz));