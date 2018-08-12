// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['teeth', 'eyes', 'skull']

// 2. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(e => console.log(e))

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)

const appendList = (a) => {
    const childList = document.createElement('li')
    const list = document.querySelector('ul').appendChild(childList);
    childList.textContent = a; 
}

shoppingList.forEach(appendList);  
 

console.log(appendList);
// 4. Create a new array `numbers` with a few numeric elements


// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
