   
 
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
