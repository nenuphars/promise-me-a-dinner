import { useState } from 'react';
import { getInstruction } from '../javascript/getInstruction.js';

const MashedPotatoes = () => {
	const [disable, setDisable] = useState(true);
	const [mashedPotatoes, setMashedPotatoes] = useState([]);
	const [steps, setSteps] = useState(() => new Set());

	const addItem = (item) => {
		setSteps((prev) => new Set(prev).add(item));
	};

	const getData = () => {
		getInstruction(
			'mashedPotatoes',
			0,
			(step1) => {
				addItem(`${step1}`);
				getInstruction(
					'mashedPotatoes',
					1,
					(step2) => {
						addItem(`${step2}`);
						getInstruction(
							'mashedPotatoes',
							2,
							(step3) => {
								addItem(`${step3}`);
								getInstruction(
									'mashedPotatoes',
									3,
									(step4) => {
										addItem(`${step4}`);
										getInstruction('mashedPotatoes', 4, (step5) => {
											addItem(`${step5}`);
											setDisable(false);
										});
									},
									(error) => console.log(error)
								);
							},
							(error) => console.log(error)
						);
					},
					(error) => console.log(error)
				);
			},
			(error) => console.log(error)
		);

		return function placeData() {
			setMashedPotatoes([...steps]);
		};
	};
	return (
		<div className='food'>
			<button onClick={getData()} disabled={disable}>
				How to make Mashed Potatoes
			</button>
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
