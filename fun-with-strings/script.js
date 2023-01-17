console.log("PAGE LOADED");

// EXAMPLE 1 - number vs string addition

let x = 10;
let y = 20;
// console.log(x + y);

let a = "10";
let b = "20";
// console.log(a + b);

// Remember to use parseInt() or parseFloat()
console.log(parseInt(a) + parseInt(b));

// EXAMPLE 2 - cleaning up string

let height = "10 m";

// Algorithm for removing "m" and turning into number
// 1 - remove the m (replace() string method)
// 2 - remove the space (trim() string method)
// 3 - convert to integer (parseInt() method)

let clean_height = height.replace("m",""); // "10 "
clean_height = clean_height.trim(); // "10"
let height_num = parseInt(clean_height); // 10
console.log(height_num);

