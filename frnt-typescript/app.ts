console.log('Your code goes here...');

/**
function add(n1, n2) {
    return n1 + n2; 
}
 */


function add(n1: number, n2: number, printResult: boolean) {
    /** typescript에서 아래와 같은 구문이 필요없다. 
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input type');
    }
    */
    if(printResult) {
        console.log(n1 + n2); 
    } 

    return n1 + n2; 
    
}

let number1: number;
number1 = 5; 
const number2 = 2.8;
let printResult: boolean 
printResult = true; 

const result = add(number1, number2, printResult);
console.log(result);