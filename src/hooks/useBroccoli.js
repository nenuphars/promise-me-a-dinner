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



		
		// Don't change the code below this line
	}
  return [broccoli, getBroccoliInstructions]
}


export default useBroccoli