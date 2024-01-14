// Primitive Types
console.log(23);
console.log("SAM");
console.log(true);
console.log(undefined);
console.log(null);

// Composite Types

// Arraym [] ( index <-> value ) - index basis
// array with same type number
console.log([1, 2, 3, 4, 5]);
// array with multiple types
console.log([1, "Sam", true, undefined, null]);

// accessing the elements in the array
console.log([1, "Sam", true, undefined, null][1]);

// Object {} ( key <-> value pair ) - key basis
console.log({ name: "Sam", age: 23, dob: "2024-05-10", isIndian: true });

// accessing the values in the object
console.log({ name: "Sam", age: 23, dob: "2024-05-10", isIndian: true }["dob"]);
console.log({ name: "Sam", age: 23, dob: "2024-05-10", isIndian: true }.dob);
