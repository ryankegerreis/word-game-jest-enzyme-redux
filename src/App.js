import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Components/Congrats';
import GuessedWords from './Components/GuessedWords';
import Input from './Components/Input';
import { getSecretWord } from './Actions/Actions';

export class UnconnectedApp extends Component {
	componentDidMount() {
		this.props.getSecretWord();
	}

	render() {
		return (
			<div className='container'>
				<h1>Guess The Word!</h1>
				<Congrats success={this.props.success} />
				<Input />
				<GuessedWords guessedWords={this.props.guessedWords} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { success, guessedWords, secretWord } = state;
	return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
