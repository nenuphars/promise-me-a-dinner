import { useState } from 'react';
import { getInstruction } from '../javascript/getInstruction.js';

const MashedPotatoes = () => {
	const [mashedPotatoes, setMashedPotatoes] = useState([]);

	const addItem = (item) => {
		setMashedPotatoes((prev) => [...prev, item]);
	};

	// const getData = () => {
	// 	getInstruction(
	// 		'mashedPotatoes',
	// 		0,
	// 		(step1) => {
	// 			addItem(step1);
	// 			getInstruction(
	// 				'mashedPotatoes',
	// 				1,
	// 				(step2) => {
	// 					addItem(step2);
	// 					getInstruction(
	// 						'mashedPotatoes',
	// 						2,
	// 						(step3) => {
	// 							addItem(step3);
	// 							getInstruction(
	// 								'mashedPotatoes',
	// 								3,
	// 								(step4) => {
	// 									addItem(step4);
	// 									getInstruction('mashedPotatoes', 4, (step5) => {
	// 										addItem(step5);
	// 									});
	// 								},
	// 								(error) => console.log(error)
	// 							);
	// 						},
	// 						(error) => console.log(error)
	// 					);
	// 				},
	// 				(error) => console.log(error)
	// 			);
	// 		},
	// 		(error) => console.log(error)
	// 	);
	// };

	const getData = () => {
		setMashedPotatoes(() => [])
		getInstruction(
			'mashedPotatoes',
			0,
			(step1) => {
				addItem(step1)
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			1,
			(step2) => {
				addItem(step2)
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			2,
			(step3) => {
				addItem(step3)
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			3,
			(step4) => {
				addItem(step4)
			},
			(error) => console.log(error)
		);

		getInstruction(
			'mashedPotatoes',
			4,
			(step5) => {
				addItem(step5)
			},
			(error) => console.log(error)
		);
	};

	return (
		<div className='food'>
			<button onClick={getData}>How to make Mashed Potatoes</button>
			{mashedPotatoes.length > 0 && (
				<>
					<img src='/images/mashed-potatoes.jpg' />
					<ol>
						{mashedPotatoes.map((e) => (
							<li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};
export default MashedPotatoes;
