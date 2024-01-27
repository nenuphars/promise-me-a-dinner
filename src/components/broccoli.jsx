import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';

const Broccoli = () => {
	const [broccoli, setBroccoli] = useState([]);

	const getData = async () => {
		setBroccoli(() => [])
		const food = 'broccoli';
		try {
			const step1 = await obtainInstruction(food, 0);
			setBroccoli((prev) => [...prev, step1]);

			const step2 = await obtainInstruction(food, 1);
			setBroccoli((prev) => [...prev, step2]);

			const step3 = await obtainInstruction(food, 2);
			setBroccoli((prev) => [...prev, step3]);

			const step4 = await obtainInstruction(food, 3);
			setBroccoli((prev) => [...prev, step4]);

			const step5 = await obtainInstruction(food, 4);
			setBroccoli((prev) => [...prev, step5]);

			const step6 = await obtainInstruction(food, 5);
			setBroccoli((prev) => [...prev, step6]);

			const step7 = await obtainInstruction(food, 6);
			setBroccoli((prev) => [...prev, step7]);

			const step8 = await obtainInstruction(food, 7);
			setBroccoli((prev) => [...prev, step8]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='food'>
			<button onClick={getData}>How to make Broccoli</button>
			{broccoli.length > 0 && (
				<>
					<img src='/images/broccoli.jpg' />
					<ol>
						{broccoli.map((e) => (
							<li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};
export default Broccoli;
