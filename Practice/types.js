/*Single-Dimensional Arrays*/
let fruits = ['Apple', 'Mango', 'Banana'];
console.log(fruits);
console.log(fruits[0]);

/*Multi-Dimensional Arrays*/
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 9, 9]
];
console.log(matrix);

console.log(matrix[0][2]);

/*Sparse Arrays*/

let a = [1, , 2, , 4];//missing elements are there at the indices 1 & 3
console.log(a[1]);

console.log(a);

/*Associative Arrays*/
/*Associative Arrays are nothing but objects in JS*/
let student = {
                name: `Chaitanya`,
                regd_no: 507,
                email: `226m1a0507@bvcr.edu.in`
};
console.log(student.regd_no);
console.log(student);
