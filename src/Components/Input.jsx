import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
	render() {
		const contents = this.props.success ? null : (
			<form className='form-inline'>
				<input
					data-test='input-box'
					className='mb-2 mx-sm-3'
					type='text'
					placeholder='enter guess'
				/>
				<button
					data-test='submit-button'
					className='btn btn-primary mb-2'
					type='submit'>
					Submit
				</button>
			</form>
		);

		return (
			<div>
				<button />
				{contents}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Input);