console.log('Your code goes here...');

function add_number(n1: number, n2: number, printResult: boolean) {
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

const result = add_number(number1, number2, printResult);
console.log(result);

// const ADMIN = 0;
// const READ_OLNY = 1
// const AUTHOR = 3

enum GENDER { MALE = 1, FEMALE = 2 }

const person: {
    name: string;
    age: number;
    hobbies: String[]; 
    role: [number, string]; //role: any[];
    gender: GENDER;
    twice: 'yes' | 'no';
} = {
    name: 'HyeongMin', 
    age: 99,
    hobbies: ['Weight Training', 'Drinking'], 
    role: [2, 'author'], 
    gender: GENDER.MALE,
    twice: 'yes'
};

console.log(person);

let favoriteActivities: any[];
favoriteActivities = ['Weight Training', 77, 'Drinking', 23]

for (const activ of favoriteActivities) {
    console.log(activ)
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

person.role = [99, 'admin']
for (const role of person.role) {
    console.log(role)
}

type Combinable = number | string

// Combined function 
function combine(input1: Combinable, input2: number | string) {
    let result; 
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + '&' + input2.toString()
    }

    return result;
}

const combineNames = combine('lina', 'minsoo')
console.log(combineNames);
const combineTotAge = combine(24, 34)
console.log(combineTotAge);

let age;
const ageStr = '30';
age = +ageStr
console.log(typeof age);
age = age.toString();
console.log(typeof age);
