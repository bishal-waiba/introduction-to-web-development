// arrow function and templete literals
const greet = (name) => {
    // console.log('hello', name);
    // console.log(`hello ${name}`)
};

greet('mola')



//array methods

const numbers = [1,2,3,4,5];
// console.log(numbers);
//push
numbers.push(6);
// console.log(numbers);
//pop
numbers.pop()
// console.log(numbers);
//array length
// console.log(numbers.length);



//map filter and reduce

const numberList = [1,2,3,4,5];
const doubleNumber = numberList.map((num) => {
    return num * 2;
})
// console.log(doubleNumber);

const evenNumberList = numberList.filter((num) => {
    return num % 2 === 0;
})
// console.log(evenNumberList);

totalSum = numberList.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, 0)
// console.log(totalSum);



//slice and splice
const fruits = ['apple', 'banana','orange','mango'];
const slicedFruits = fruits.slice(1,3);
// console.log(slicedFruits)
const slicedFruitsList = fruits.slice(1);
// console.log(slicedFruitsList)

const splicedFruits = fruits.splice(1,2,'grape', 'kiwi')
// console.log(splicedFruits)
// console.log(fruits)

//spread operator
const name = ['alice','bob','charlie']

const newNames=[...name, 'david', 'eve']
// console.log(newNames)


const user={
    namek: 'Bob',
    age: 30,
    address: 'Kathmandu',
};

const updatedUser={
    ... users,
    isStudent: false
};
// console.log(updatedUser);

//destructing
const [firstName,lastName] = newNames;
// console.log(firstName)
// console.log(lastName)

const {address, namek}= updatedUser;
console.log(namek,address)
