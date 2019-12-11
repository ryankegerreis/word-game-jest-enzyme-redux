import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../Test/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe('render', () => {
	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper = setup(initialState);
		});

		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		});
		test('renders input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(1);
		});
		test('renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton.length).toBe(1);
		});
	});
	describe('word has been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
		});

		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		});
		test('renders input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(0);
		});
		test('renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton.length).toBe(0);
		});
	});
});

describe('redux props', () => {
	test('reveive success piece of state as a prop', () => {
		const success = true;
		const wrapper = setup({ success });
		const successProp = wrapper.instance().props.success;
		expect(successProp).toBe(success);
	});

	test('guessedWord action creator is received as a prop', () => {
		const wrapper = setup();
		const guessedWordProp = wrapper.instance().props.guessedWord;
		expect(guessedWordProp).toBeInstanceOf(Function);
	});
});

describe('guessword action creator call', () => {
	let guessWordMock;
	let wrapper;
	const guessedWord = 'train';
	beforeEach(() => {
		guessWordMock = jest.fn();
		const props = {
			guessedWord: guessWordMock
		};
		wrapper = shallow(<UnconnectedInput {...props} />);
		wrapper.setState({ currentGuess: guessedWord });

		const submitButton = findByTestAttr(wrapper, 'submit-button');
		submitButton.simulate('click', { preventDefault() {} });
	});
	test('test if guessWord gets called when the submit button is clickend', () => {
		const guessedWordCallCount = guessWordMock.mock.calls.length;
		expect(guessedWordCallCount).toBe(1);
	});
	test('calls guessWord with input value as argument', () => {
		const guessWordArg = guessWordMock.mock.calls[0][0];
		expect(guessWordArg).toBe(guessedWord);
	});
});
