// Length of an array
const arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// Join and print like 12345
console.log(arr.join(""));
console.log(+arr.join(""));
// Join and print like 1,2,3,4,5
console.log(arr.join());
// Join and print like 1-2-3-4-5
console.log(+arr.join("-"));

const nArr = [123];

nArr.push(456);

nArr.push("Sam");

nArr.push(789, 999);

console.log(nArr);

const pArr = [1, 2, 3, 4, 5];

pArr.pop();

console.log(pArr);
