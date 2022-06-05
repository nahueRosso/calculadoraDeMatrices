let matriz5x5 = [[1,2,3,1,2],[4,5,6,1,2],[7,8,9,1,2],[4,5,6,1,2],[7,8,9,1,2]];

let matriz = [[4,-1],[4,1]];

//              [[1,2,3]]                   [ [0][0] ; [0][1] ; [0][2] ]
//              [[4,5,6]]                   [ [1][0] ; [1][1] ; [1][2] ]
//              [[7,8,9]]                   [ [2][0] ; [2][1] ; [2][2] ]

const recorteMatriz = (matriz) => {
    
    let arrayFinal = [] ;  let signo = -1;  let cofa = 0;
    
    for (let  i = 0; i < matriz.length; i++) {
        
        arrayFinal.push([])
        
    }

    let sinx = matrizTranspuesta(matriz)

    let sinxt = sinx.filter(x => x === sinx[0])
    
    let sinx2 = sinx.filter(x => x !== sinx[0])
    
        sinx2 = matrizTranspuesta(sinx2)
    
        for (let a = 0; a < matriz.length; a++) {

        let siny = sinx2.filter(x => x !== sinx2[a] )

        signo *= -1; 

        cofa = signo * sinxt[0][a]
    
        arrayFinal[a].push(cofa,siny)}

        return arrayFinal

    }
         
let hola = recorteMatriz(matriz);

const matrizdetrminante3x3 = (matrizpar) =>{

     let arrayFinal = [] ; let det2x2 = 0
    
    for (let  i = 0; i < matrizpar.length; i++) {
        
        arrayFinal.push([]);}
    
     for (let i = 0; i < matrizpar.length; i++) {
     
        det2x2 =  matrizDeterminante2x2(matrizpar[i][1]);
           
               arrayFinal[i].push(matrizpar[i][0]*det2x2);
     }

     let arrayConcat = arrayFinal.reduce((a,b) => {
        return a.concat(b);
      });

      let sumaArray = arrayConcat.reduce((x,y) => x + y ,0)
    
 return sumaArray;

} 



const matrizdetrminanteNxN = (matriz) => {

    let resultadoFinal = 0 ;  let primera = recorteMatriz(matriz)
    
    if (primera.length === 3) {

          resultadoFinal = matrizdetrminante3x3(primera);
    
        } else if (primera.length === 2) {

            resultadoFinal = matrizDeterminante2x2(matriz);

            
    } else {
        for (let a = 0; a < (matriz.length-2); a++) {
            
        }
            
            
    }

    return resultadoFinal
}

 
console.log(matrizdetrminanteNxN(matriz));
