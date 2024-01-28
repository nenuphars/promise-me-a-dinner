![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | #Promise me a dinner

## Introduction

Due to the asynchronous nature of JavaScript, promises and callbacks are very important. Both allow us to control the flow of the operations and execute tasks in sequence.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```shell
  $ git add .
  $ git commit -m "done"
  $ git push origin main
```

Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 0 | The starter code

We provided you with some starter code:

- `javascript/data.js` - contains four arrays with steps to preparing 4 different foods: _mashed potatoes_, _steak_, _brussels sprouts_ and _broccoli_.

- `javascript/getInstruction.js` - contains a function **`getInstruction`** that **uses callbacks** to asynchronously retrieve instruction steps for any food. It uses `setTimeout` to mimic an asynchronous operation.

  ```js
  getInstruction(food, step, callback, errorCallback);
  ```

  :exclamation: **You should not make any changes in this file.**

  >

- `javascript/obtainInstruction.js` - has a function **`obtainInstruction`** that **uses promises** to asynchronously retrieve instruction steps for any food. It also uses `setTimeout` to mimic an asynchronous operation.

  ```js
  obtainInstruction(food, step);
  ```

  :exclamation: **You should not make any changes to this file either.**

  >

- `App.jsx` - contains the basic structure needed so no need to add any code there. Previously mentioned JavaScript files are already linked to the `App.jsx`.
  > :exclamation: **You should not make any changes to this file.**

### Out of sync

**You should write your code <u>only</u> in the files of the `hooks/` folder .**

Now, open the file `hooks/useMashedPotatoes.js` and take a look at the starter code provided there. The provided code doesn't use nested callbacks to enforce a sequence of execution, which is why the steps are not displayed in the correct order.

Go ahead and run

```shell
  $ npm run dev
```

- On your terminal type `o` and press enter to open the page in the browser.
- Click the button `Make a Dinner`.
- Notice how the cooking steps are displayed out of order.

:exclamation: Before you start working on Iteration 1, comment out the initial code in `hooks/useMashedPotatoes.js`.

<br>

## Iteration 1 | Make the mashed potatoes with callbacks

Using nested callbacks print the cooking steps to make Mashed Potatoes in the correct order. Write your JavaScript in the provided `javascript/index.js` file. Once again, a reminder not to alter the `getInstruction.js` file.

```javascript
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
	addItem(step1);
	// ... Your code here
	// ...
});
```

After the last step, you should display an additional `<li>` with the text: `Mashed potatoes are ready!`.

## Iteration 2 | Make the stake with promises

Using promises and the `then()` statement print the directions to display the cooking instruction for the Stake in the correct order. This time, you will have to call the function `obtainInstruction` which returns a pending Promise.

Work in the `hooks/useSteak.js`. You should not alter the `obtainInstruction.js` file.

```javascript
// Iteration 2 - using promises
obtainInstruction('steak', 0).then((step0) => {
	addItem(step0);
	//  ... Your code here
});
// ... Your code here
```

After the last step, you should display an additional `<li>` with the text: `Steak is ready!`.

## Iteration 3 | Make the broccoli with async/await

Using promises with the `async` and `await` syntax print the directions to make Brussels Sprouts in the correct order. You will need the function `obtainInstruction` which returns a pending Promise.

```javascript
async function getBroccoliInstructions() {
	// ... Your code here
}
```

After the last step, you should display an additional `<li>` with the text: `Broccoli is ready!`.

## Bonus 1

Only when the specific food is ready to be served (all steps are listed), show the `<img />` element that represents the food, so that the image gets displayed.

## Bonus 2

Using `Promise.all` display the cooking steps to make Brussels Sprouts in the correct order.

After the last step, you should display an additional `<li>` with the text: `Brussels sprouts are ready!`.

**Happy coding!** :blue_heart:
