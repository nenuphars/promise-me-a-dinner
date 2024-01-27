import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';

const BrusselSprouts = () => {
	const [brusselSprouts, setBrusselSprouts] = useState([]);

	const getData = () => {
		setBrusselSprouts(() => [])
		const food = 'brusselsSprouts';
		const brusselsSteps = [
			obtainInstruction(food, 0),
			obtainInstruction(food, 1),
			obtainInstruction(food, 2),
			obtainInstruction(food, 3),
			obtainInstruction(food, 4),
			obtainInstruction(food, 5),
			obtainInstruction(food, 6),
			obtainInstruction(food, 7),
		];
		Promise.all([...brusselsSteps])
			.then((steps) => {
				setBrusselSprouts(steps);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className='food'>
			<button onClick={getData}>How to make Brussel Sprouts</button>
			{brusselSprouts.length > 0 && (
				<>
					<img src='/images/brussels-sprouts.jpg' />
					<ol>
						{brusselSprouts.map((e) => (
							<li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};
export default BrusselSprouts;
