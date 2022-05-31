let matrizDeterminante2x2 = (matriz) => {
    let resultadoFinal = "";
    let resultado = 0;    
    if (( 2 === matriz[0].length) && ( 2 === matriz[1].length) && (matriz.length === 2 )){
       resultado = matriz[0][0]*matriz[1][1]-(matriz[0][1]*matriz[1][0]);

       resultadoFinal = resultado;
       }
       
        
    
    else{ resultadoFinal = "La matriz tiene que ser de 2 x 2";}
    
    return resultadoFinal;
    
}


console.log(matrizDeterminante2x2([[2,2],[2,1]]));;

