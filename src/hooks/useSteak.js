import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';
import { reset, setter } from '../javascript/stateChanger.js';

function useSteak() {
	const [steak, setSteak] = useState([]);
	const addItem = setter(setSteak);

	function getSteakInstructions() {
		reset(setSteak);
		const food = 'steak';
		// Don't change the code above this line

		
		
		// Don't change the code below this line
	}
	
	return [steak, getSteakInstructions];
}

export default useSteak;
