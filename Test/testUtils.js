import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/Reducers/RootReducer';
import { middlewares } from '../src/configureStore';

//Store Factory
export const storeFactory = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer, initialState);
};

//Find By Test Attribute
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'props',
		component.name
	);
	expect(propError).toBeUndefined();
};
