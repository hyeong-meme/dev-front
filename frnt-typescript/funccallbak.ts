function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void  {
    console.log(num);
}

console.log(typeof printResult(add(3,5)));

let combineValues: Function = add; 
console.log(combineValues(3,5));

// callback function 
function addAndHandle(n1: number, n2: number, cb: (num: number) => void ) {
    const result = n1 + n2;
    cb(result);
}

// callback 구현 
addAndHandle(8, 8, (result) => {
    console.log(result);
})