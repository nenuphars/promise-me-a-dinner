import './App.css';
import BrusselSprouts from './components/BrusselSprouts.jsx';

import MashedPotatoes from './components/MashedPotatoes.jsx';
import Steak from './components/Steak.jsx';
import Broccoli from './components/broccoli.jsx';

function App() {

	return (
		<div className='dinner-table'>
			<MashedPotatoes />
      <Steak />
      <Broccoli />
      <BrusselSprouts />
		</div>
	);
}

export default App;
