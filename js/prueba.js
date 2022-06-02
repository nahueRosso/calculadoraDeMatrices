let matriz = [[1,2,3,1,2],[4,5,6,1,2],[7,8,9,1,2],[4,5,6,1,2],[7,8,9,1,2]]

//              [[1,2,3]]                   [ [0][0] ; [0][1] ; [0][2] ]
//              [[4,5,6]]                   [ [1][0] ; [1][1] ; [1][2] ]
//              [[7,8,9]]                   [ [2][0] ; [2][1] ; [2][2] ]

// for (let a = 0; a < matriz.length; a++) {
    
// }

// let matriz1 = matriz.filter(x => x.length < 0)

// console.log(hola(matriz1));


let checkAdult = (age) => {
    return age >= 18;
}

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);


console.log(result);