// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = ['david', 'gordan', 'sahil','yu','han']; 



// 2. Log the value of the third element in `names` to the console
console.log("before: "+names[2]);
console.log(names.length); 
names.length = 1; 
console.log(names.length); 
console.log(names)
console.log(names[4]);
console.log(names[3]);

// 3. Log the value of the `names` array's `length` property to the console


// 4. Set the value of the `length` property to `1`


// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?


// 7. Log the entire `names` array to the console again


// 8. Add a few more elements to the array using `push`


// 9. Log the last element of the array to the console


// 10. Log the second last element of the array to the console


// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`

// console.log(document.querySelectorAll('p'))
// console.log(document.querySelector('p'[1]))
// document.querySelector('p').splice(1,0,'"JavaScript was here!"'); 
// console.log(document.querySelector('p'[1]))


const paragraph = document.querySelectorAll('p')
const p = paragraph[1]
p.textContent = '"JavaScript was here!"'; 



// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`


let
 namesString = paragraph.join('<br>');
console.log(namesString)


// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?


