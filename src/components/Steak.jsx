import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';

const Steak = () => {
	const [steak, setSteak] = useState([]);

	const getData = () => {
		setSteak(() => [])
		const food = 'steak';
		obtainInstruction(food, 0)
			.then((step1) => {
				setSteak((prev) => [...prev, step1]);
				return obtainInstruction(food, 1);
			})
			.then((step2) => {
				setSteak((prev) => [...prev, step2]);
				return obtainInstruction(food, 2);
			})
			.then((step3) => {
				setSteak((prev) => [...prev, step3]);
				return obtainInstruction(food, 3);
			})
			.then((step4) => {
				setSteak((prev) => [...prev, step4]);
				return obtainInstruction(food, 4);
			})
			.then((step5) => {
				setSteak((prev) => [...prev, step5]);
				return obtainInstruction(food, 5);
			})
			.then((step6) => {
				setSteak((prev) => [...prev, step6]);
				return obtainInstruction(food, 6);
			})
			.then((step7) => {
				setSteak((prev) => [...prev, step7]);
				return obtainInstruction(food, 7);
			})
			.then((step8) => {
				setSteak((prev) => [...prev, step8]);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className='food'>
			<button onClick={getData}>How to make Steak</button>
			{steak.length > 0 && (
				<>
					<img src='/images/steak.jpg' />
					<ol>
						{steak.map((e) => (
							<li key={e}>
                <span>{e}</span> 
							</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};
export default Steak;
