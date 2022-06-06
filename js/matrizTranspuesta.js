   
 
 let matrizTranspuesta = (matriz) =>{
    
    let matrizTran = []
    
    for (let  i = 0; i < matriz[0].length; i++) {
        
        matrizTran.push([])
        
    }

    let resultadoFinal = ""; 

    if (matrizRectangular(matriz)) {
        for (let n = 0; n < matriz[0].length; n++) {
            
             for (let i = 0; i < matriz.length; i++) {
            
                matrizTran[n].push(matriz[i][n])
            
             } 

         }

         resultadoFinal = matrizTran
        
    }
    else { resultadoFinal = "la matriz debe ser Rectangular"}
    
    return resultadoFinal;
    
}


// let matriz2 = [];
    
// let matrizNew = [];

// let matrizNueva = [];
     
//      for (let j = 0; j < (matriz.length ); j++) {
//          matriz2.push([]); 
//      }

//      for (let i = 0; i < (matriz.length ); i++) {
//          matrizNew.push([]) }
     
//      for (let K = 0; K < (matriz.length ); K++) {
//         matrizNueva.push([]) }     
     
        
//     for (let b = 0; b < matriz.length; b++) {
       
//         for (let m = 0; m < matriz.length; m++) {
//              for (let n = 0; n < matriz[0].length; n++) {
//                  if (matriz[m][n] !== matriz[m][0]) {
//                      matriz2[m].push(matriz[m][n]) 
//                  }
//              }
//          }
   
//      for (let y = 0; y < matriz2.length; y++) {
//          for (let x = 0; x < matriz2[0].length; x++) {
//              if (matriz2[y][x] !== matriz2[b][x]) {
//                  matrizNew[y].push(matriz2[y][x]) 
//              }
//          }
//      }
     
//      for (let a = 0; a < matrizNew.length; a++) {
//          if (matrizNew[a].length === 0 ) {
//              matrizNew.splice([a],1)
//          }   
//      }

//     matrizNueva[].push(matrizNew)
//     } 

// console.log(matrizNew);
