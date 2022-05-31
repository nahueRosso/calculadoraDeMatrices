let productoEscalar = (escalar,matriz) =>{
    
    let matrizResultante = [];
    let resultadoFinal = "";
    let producto = 0;

    for (let i = 0; i < matriz.length; i++) {
        matrizResultante.push([])
        
    }
    if (matrizRectangular(matriz)) {
        for (let x = 0; x < matriz.length; x++) {
            for (let y = 0; y < matriz[0].length; y++) {
                
                producto = matriz[x][y] * escalar;

                matrizResultante[x].push(producto);
            }
            
        }
        resultadoFinal = matrizResultante;
    }
    else{ resultadoFinal = "la matriz tiene que ser de orden N x M" }

    return resultadoFinal;
}

productoEscalar(2,[[1,2],[2,-1]]);