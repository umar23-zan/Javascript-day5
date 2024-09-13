# Javascript-day5

Create the following buttons using HTML and CSS. The styles don't have to be exact (just use your best judgment).

10a. Amazon button
```
.addto{
        margin: 10px;
        padding: 15px 30px;
        background-color: rgb(255, 216, 20);
        color: black;
        border-radius: 50px;
        font-size: 16px;
        font-weight: bold;
      }

<button class="addto">Add to Cart</button>
    
```
10b. Uber buttons

Add to Cart

Request now

Schedule for later
```
.request{
        margin-left: 10px;
        padding: 15px 30px;
        font-size: 12px;
        font-weight: bold;
        color: white;
        background-color: black;
        border-radius: 5px;
      }

<button class="request">Request to</button>
    <button class="request">schedule for later</button>
```
rgb(255, 216, 20)

rgb(230, 230, 230)

10c. classList has another method, classList.contains('class-name'), which checks if an element has a class.
• Create a button: <button class="js-button">Test</button>
Use document.querySelector() and classList.contains('js-button') to check if this button has the class 'js-button'.
console.log() the result
```
<button class="js-button">Test</button>
    <script>
       const js=document.querySelector('.js-button');
       console.log(js.classList.contains('js-button'));
    </script>
```
10d. Create the button on the right. When clicking this button, it should turn ON / OFF. Hints:
• When clicking the button, add or remove the class 'is-toggled', and use it to change the styling.
• Use if (classList.contains('is-toggled')) to decide whether to add or remove the 'is-toggled' class.

Gaming
```
.toggle-button {
        background-color: rgb(230, 230, 230);
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        margin-right: 10px;
        font-size: 15px;
        cursor: pointer;
      }

      .is-toggled {
        background-color: black;
        color: white;
      }
      
    </style>
  </head>
  <body>
    <button class="toggle-button js-button" onclick="
      const js=document.querySelector('.toggle-button');
      if(!js.classList.contains('is-toggled')){
        js.classList.add('is-toggled');
      }
      else{
        js.classList.remove('is-toggled');
      }">Gaming
    </button>
```
10e. Continuing from 10d, create 3 buttons that can be turned ON/OFF.
Gaming

Music

Tech
```
</button>
    <button class="toggle-button js-button2" onclick="
    const js=document.querySelector('.js-button2');
      if(!js.classList.contains('is-toggled')){
        js.classList.add('is-toggled');
      }
      else{
        js.classList.remove('is-toggled');
      }
    ">Music</button>
    <button class="toggle-button js-button3" onclick="
    const js=document.querySelector('.js-button3');
      if(!js.classList.contains('is-toggled')){
        js.classList.add('is-toggled');
      }
      else{
        js.classList.remove('is-toggled');
      }
    ">Tech</button>
```
10f. Continuing from 10e, use a function to reuse the code, and separate each language into its own file (if you didn't do this already).
```
<body>
    <button class="toggle-button js-button" onclick="
      toggleButton('.js-button');">Gaming
    </button>
    <button class="toggle-button js-button2" onclick="
    toggleButton('.js-button2');
    ">Music</button>
    <button class="toggle-button js-button3" onclick="
    toggleButton('.js-button3');
    ">Tech</button>

    <script src="day5css.js"></script>
  </body>

function toggleButton(buttonSelector){
  const js=document.querySelector(buttonSelector);
  if(!js.classList.contains('is-toggled')){
    js.classList.add('is-toggled');
  }
  else{
    js.classList.remove('is-toggled');
  }
}
```
10g. Modify 10f so that only 1 button can be ON at a time.

Gaming

Music

Tech
```
function offButton(){
  const prev=document.querySelector('.is-toggled');
  if(prev){
    prev.classList.remove('is-toggled')
  }
}
```
10h. Create a file 10h.html and copy the code from 10-dom-projects.html. In the Amazon Shipping Calculator, if we type a number less than 0, display a red error message below the text box:

-5

Calculate

Error: cost cannot be less than $0
```
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Projects</title>
    <style>
      body {
        font-family: Arial;
      }

      .cost-input {
        font-size: 15px;
        padding: 10px;
      }

      .calculate-button {
        background-color: green;
        color: white;
        border: none;
        font-size: 15px;
        padding: 12px 15px;
        cursor: pointer;
      }
      .error-message {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Amazon Shipping Calculator</p>
    <input placeholder="Cost of order" class="js-cost-input cost-input" onkeydown="
      handleCostKeydown(event);
    ">
    <button onclick="
      calculateTotal();
    " class="calculate-button">Calculate</button>
    <p class="js-total-cost"></p>
    <p class="js-error-message error-message"></p>

    <script>
      function handleCostKeydown(event) {
        if (event.key === 'Enter') {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value);

        
        document.querySelector('.js-total-cost')
          .innerHTML = '';
        document.querySelector('.js-error-message')
          .innerHTML = '';

        if (cost < 0) {
          document.querySelector('.js-error-message')
            .innerHTML = 'Error: cost cannot be less than $0';
          return;
        }

        if (cost < 40) {
          cost = cost + 10;
        }

        document.querySelector('.js-total-cost')
          .innerHTML = `$${cost}`;
      }
    </script>
  </body>
</html>
```

## Arrays And Loops

a. Create an array of numbers: const nums = [10, 20, 30]; Modify the last value in this array and change it to 99.
```
const nums=[10, 20, 30];
nums[2]=99;
console.log(nums);
```
11b. Create a function getLastValue(array) that takes an array and returns the last value in the array. Hint: array indexes start at 0 so the last index is the number of values in the array minus 1 (lastIndex = array.length - 1).
• getLastValue([1, 20, 22, 24, 5]) => 5
• getLastValue(['hi', 'hello', 'good']) => 'good'
```
function getLastValue(array){
let lastIndex=array.length-1;
return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'hey']));
</script>
```
c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched). [5, 20, 22, 24, 1]
• arraySwap([1, 20, 22, 24, 5]) => • arraySwap(['hi', 'hello', 'good']) => ['good', 'hello', 'hi']
```
function arraySwap(array){
let lastIndex=array[array.length-1];
let fvalue=array[0];
let lvalue=array[lastIndex];

array[0]=lvalue;
array[lastIndex]=fvalue;
return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));
</script>
```
d. Create a for loop that counts up from 0 to 10, but counts up by 2 (0, 2, 4, ..., 8, 10).
```
let i=0;
for(i=0;i<=10;i++){
if(i%2==0)
console.log(i);
}
```
e. Create a for loop that counts down from 5 to 0.
```
for(let i=5;i!==-1;i--){
console.log(i);
```
f. Do exercises 11d and 11e, but using while loops.
```
while(i<=10){
if(i%2==0)
console.log(i);
i++;

let i=5
while(i!==-1){

console.log(i);
i--;
}
```
11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.
• [1, 2, 3] => [2, 3, 4]
```
<script>
const array=[1, 2, 3];
const array2=[];
for(let i=0;i<array.length;i++){
array2.push(array[i]+1);
}
console.log(array2);
</script>
```
h. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.
• addOne([1, 2, 3]) => [2, 3, 4]
• addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]
```
<script>
function addNum(array){
const array2=[];
for(let i=0;i<array.length;i++){
array2.push(array[i]+1);
}
return array2;
}
console.log(addNum([1, 2, 3]));
console.log(addNum([-2, -1, 0, 99]));
</script>
```
i. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'.

• addNum([1, 2, 3], 2) => [3, 4, 5]

• addNum([1, 2, 3), 3) => [4, 5, 6]

• addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
```
<script>
function addNum(array, num){
const array2=[];
for(let i=0;i<array.length;i++){
array2.push(array[i]+num);
}
return array2;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
</script>
```
j. Create a function addArrays(arrayı, array2) that takes 2 arrays of numbers and adds each number in the arrays together.

• addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]

• addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
```
<script>
function addNum(array, array3){
const array2=[];
for(let i=0;i<array.length;i++){
array2.push(array[i]+array3[i]);
}
return array2;
}
console.log(addNum([1, 2, 3], [1, 2, 3]));
console.log(addNum([1, 2, 3], [4, 5, 6]));
</script>
```
k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.

• countPositive([1, -3, 5]) => 2

• countPositive([-2, 3, -5, 7, 10]) => 3
```
<script>
function addNum(num){
let count=0
for(let i=0;i<num.length;i++){
if(num[i]>0)
count+=1;
}
return count;
}
console.log(addNum([1, -2, 3]));
console.log(addNum([1, 2, -3, 4, -5, 6]));
</script>
```
l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min).

• minMax([1, -3, 5]) => { min: -3, max: 5 }

• minMax([-2, 3, 5, 7, 10]) => { min: -5, max: 10 }
```
<script>
      let count={
          min: 0,
          max: 0
        };
      function addNum(num){
      for(let i=0;i<num.length;i++){
        if(num[i]>0)
        count.max+=1;
        else
        count.min+=1;
      }
      return count;
    }
      console.log(addNum([1, -2, 3]));
      console.log(addNum([1, 2, -3, 4, -5, 6]));
    </script>
```
m. Update exercise 111 to also handle these cases:

• minMax([]) => { min: null, max: null }

• minMax([3]) => { min: 3, max: 3 }
```
<script>
    
      function addNum(num){
        let count={
          min: num[0],
          max: num[0]
        };
      for(let i=0;i<num.length;i++){
        const value=num[i];
        if(value<count.min){
          count.min=value;
        }
        if(value>num.max){
          num.max=value;
        }
     
    }
    return count;
  }
      console.log(addNum([1, -2, 3]));
      console.log(addNum([1, 2, -3, 4, -5, 6]));
    </script>
```
n. Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared. • countWords(['apple', 'grape', 'apple', 'apple']) => { apple: 3, grape:1} (Hint: you can access a property using a variable: object[variable]; This uses the value inside the variable as the property name).
```
function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));
```
