import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useSteak() {
  const [steak, setSteak] = useState([]);
  const addItem = setter(setSteak);

  function getSteakInstructions() {
    reset(setSteak);
    const food = "steak";
    // Don't change the code above this line
	
    // Iteration 2 - using promises
    obtainInstruction(food, 0).then((step0) => {
      addItem(step0);
      obtainInstruction(food, 1).then((step1) => {
        addItem(step1);
        obtainInstruction(food, 2).then((step2) => {
          addItem(step2);
          obtainInstruction(food, 3).then((step3) => {
            addItem(step3);
            obtainInstruction(food, 4).then((step4) => {
              addItem(step4);
              obtainInstruction(food, 5).then((step5) => {
                addItem(step5);
                obtainInstruction(food, 6).then((step6) => {
                  addItem(step6);
                  obtainInstruction(food, 7).then((step7) => {
                    addItem(step7);
                    addItem("Steak is ready!");
                  }).catch((err)=>{
					console.log(err)
				})
                }).catch((err)=>{
					console.log(err)
				})
              }).catch((err)=>{
				console.log(err)
			})
            }).catch((err)=>{
				console.log(err)
			})
          }).catch((err)=>{
			console.log(err)
		})
        }).catch((err)=>{
			console.log(err)
		})
      }).catch((err)=>{
		console.log(err)
	})
    }).catch((err)=>{
		console.log(err)
	})
    // ... Your code here

    // Don't change the code below this line
  }

  return [steak, getSteakInstructions];
}

export default useSteak;
