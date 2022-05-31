let matrizCuadrada = ( vector ) => {

let verdadero = [];

let resultadoFinal = "" ;

for (let i = 0; (i < vector.length) && (vector[i].length === vector.length) ; i++) {

verdadero.push("elemento")
}


if (verdadero.length === vector.length ) {
    resultadoFinal = true
   } 
    else {resultadoFinal = false}


return resultadoFinal;

}

let matrizRectangular = ( matriz ) => {
    
    let verdadero = [];
    
    let resultadoFinal = "" ;
    
    for (let i = 0; (i < matriz.length) && (matriz[i].length === matriz[0].length) ; i++) {
    
    verdadero.push("elemento")
    }
    
    if (verdadero.length === matriz.length ) {
        resultadoFinal = true
       } 
        else {resultadoFinal = false}
    
    
    return resultadoFinal;
    
    }

matrizCuadrada([[4,5,3] , [4,5,7] , [7,6,5] ]);

















//
//        let i = 0 ;
//       let variable = 0  ;
//       let suma =0
//         while ( i < vector.length) {
//              if ((vector[i].length) === (vector.length) ){
//                 variable = 0;
//         } else { 
//                 variable = 1;
//         }
//         suma += variable
//         console.log(suma);
//          i ++;
//     }       
//  }
//   let nahuel = [ [24,25] , [20,56] , [12,71] ];

// console.log( nahuel[0].length );