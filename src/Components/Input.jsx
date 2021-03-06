import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessedWord } from '../Actions/Actions';

export class UnconnectedInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGuess: null
		};
		this.submitGuessedWord = this.submitGuessedWord.bind(this);
	}

	submitGuessedWord(evt) {
		evt.preventDefault();
		const guessedWord = this.state.currentGuess;

		if (guessedWord && guessedWord.length > 0) {
			this.props.guessedWord(guessedWord);
			this.setState({ currentGuess: '' });
		}
	}
	render() {
		const contents = this.props.success ? null : (
			<form className='form-inline'>
				<input
					data-test='input-box'
					className='mb-2 mx-sm-3'
					type='text'
					placeholder='enter guess'
					value={this.state.currentGuess}
					onChange={evt => this.setState({ currentGuess: evt.target.value })}
				/>
				<button
					data-test='submit-button'
					className='btn btn-primary mb-2'
					type='submit'
					onClick={this.submitGuessedWord}>
					Submit
				</button>
			</form>
		);

		return <div data-test='component-input'>{contents}</div>;
	}
}

const mapStateToProps = ({ success }) => {
	return { success };
};

export default connect(mapStateToProps, { guessedWord })(UnconnectedInput);
