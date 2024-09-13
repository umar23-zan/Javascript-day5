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
