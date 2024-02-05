import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useBroccoli() {
  const [broccoli, setBroccoli] = useState([]);
  const addItem = setter(setBroccoli)

	async function getBroccoliInstructions() {
		reset(setBroccoli)
		const food = 'broccoli';
		// Don't change the code above this line
		await obtainInstruction(food, 0).then((step0)=>{
			addItem(step0)
		})
		.catch((err)=>{
			console.log(err)
		})
		await obtainInstruction(food, 1).then((step1)=>{
			addItem(step1)
		})
		.catch((err)=>{
			console.log(err)
		})
		await obtainInstruction(food, 2).then((step2)=>{
			addItem(step2)
		})
		.catch((err)=>{
			console.log(err)
		})
		await obtainInstruction(food, 3).then((step3)=>{
			addItem(step3)
		})
		.catch((err)=>{
			console.log(err)
		})
		await obtainInstruction(food, 4).then((step4)=>{
			addItem(step4)
		})
		.catch((err)=>{
			console.log(err)
		})
		await obtainInstruction(food, 5).then((step5)=>{
			addItem(step5)
		})
		.catch((err)=>{
			console.log(err)
		})
		await obtainInstruction(food, 6).then((step6)=>{
			addItem(step6)
			addItem("Broccoli is ready!")
		})
		.catch((err)=>{
			console.log(err)
		})

		
		// Don't change the code below this line
	}
  return [broccoli, getBroccoliInstructions]
}


export default useBroccoli