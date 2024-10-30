import { useState, useEffect } from 'react';
import {
	bg1,
	bg2,
	bg3,
	bg4,
	bg5,
	bg6,
	bg7,
	bg8,
	bg9,
	bg10,
} from './assets/images';

import phrases from './phrases.json';
import reloadPage from './helpers/reload-page';
import SpinLoader from './components/SpinLoader';

import './App.css';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

function App() {
	const [loading, setLoading] = useState(true); // Estado de carga
	const [phrase, setPhrase] = useState({});
	const [img, setImg] = useState('');

	useEffect(() => {
		const randomNum = Math.floor(Math.random() * images.length);
		setPhrase(phrases[randomNum]);
		setImg(images[randomNum]);

		const timer = setTimeout(() => {
			setLoading(false); // Cambia el estado de carga después de 3 segundos
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				{loading ? (
					<SpinLoader />
				) : (
					// Muestra el SpinLoader mientras carga
					<>
						<h1 className="heading">Tu destino...</h1>
						<div className="card">
							<div className="card__body">
								<q>{phrase.phrase}</q>
								<cite className="luckyNumber">
									Tu número de la suerte es: {phrase.luckyNumber}
								</cite>
							</div>
						</div>
						<button onClick={reloadPage} className="btn">
							Ver otro
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
