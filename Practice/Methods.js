/*Array Methods in JavaScript*/

/*1.push()*/
/*let a = [1, 2, 3];
a.push(4);
console.log(a);*/

/*2.pop()*/
/*let a = [1, 2, 3];
let removed = a.pop();
console.log(a);
console.log(removed);*/

/*3.unshift()*/
/*let a = [4, 5, 6];
a.unshift(3);
console.log(a);*/

/*4.shift()*/
/*let a = [1, 2, 3];
let removed = a.shift();
console.log(a);
console.log(removed);*/

/*5.concat()*/
/*let a1 = [1, 2];
let a2 = [3, 4];
let result = a1.concat(a2);
console.log(result);*/

/*6.slice()*/
/*let nums = [1, 2, 3, 4, 5];
let sliced = nums.slice(1, 4);
console.log(sliced);*/

/*7.splice()*/
/*let nums = [1, 2, 3, 4, 5];
nums.splice(1, 2, 'a', 'b'); /*Removing two elements from index 1 and replacing with a & b*/
//console.log(nums);

/*8.indexOf()*/
/*let nums = [1, 2, 4, 2, 6];
console.log(nums.indexOf(2));*/

/*9.lastIndexOf()*/
/*let nums = [1, 2, 4, 5, 2, 2, 6, 7];
console.log(nums.lastIndexOf(2));*/

/*10.includes()*/ /*returns true or false*/
/*let nums = [1, 3, 5, 7, 11];
console.log(nums.includes(5));
console.log(nums.includes(13))*/

/*11.forEach()*/
/*let nums = [1, 2, 3, 4, 5];
/*Traditional function*/
/*nums.forEach(function(num) {
    console.log(num * 2);
})
nums.forEach(num => console.log(num + 10));*///Arrow function

/*12.sort()*/
/*let nums = [4, 7, 1, 2, 3, 0];
console.log(nums.sort());*/

/*13.reverse()*/
/*let nums = [1, 2, 3, 4, 5];
console.log(nums.reverse());*/

/*14.fill()*/
/*let nums = [0, 1, 2, 3, 4];
nums.fill('+');
console.log(nums);*/

/*15.join()*/
/*elements -> string*/
/*let fun = [`Object`, `Oriented`];
let newFun = fun.join(`-`);
console.log(newFun);
console.log(typeof(fun));
console.log(typeof(newFun));*/

/*16.filter()*/
/*let nums = [1, 2, 3, 4];
let x = nums.filter(num => num % 2 === 0); //returns an array of numbers that satisfies the condition
console.log(x);*/