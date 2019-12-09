import React from 'react';
import propTypes from 'prop-types';

function Congrats(props) {
	if (props.success) {
		return (
			<div data-test='component-congrats' className='alert alert-success'>
				<span data-test='congrats-message'>
					Congratulations! You guessed the beer!
				</span>
			</div>
		);
	} else {
		return <div data-test='component-congrats'></div>;
	}
}

Congrats.propTypes = {
	success: propTypes.bool.isRequired
};

export default Congrats;
