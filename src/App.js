import React, { Component } from 'react';

import Congrats from './Components/Congrats';
import GuessedWords from './Components/GuessedWords';
import Input from './Components/Input';

export default class App extends Component {
	render() {
		return (
			<div className='container'>
				<h1>Jotto</h1>
				<Congrats success={true} />
				<Input />
				<GuessedWords
					guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
				/>
			</div>
		);
	}
}
