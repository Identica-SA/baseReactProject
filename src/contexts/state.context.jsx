/**
 * Defines BASE context object.
 */

// React imports.
import { createContext, useReducer } from "react";

// State context definition.
export const StateContext = createContext({
	currentSession: null,
	setCurrentSession: () => null,
});

// Actions for state context.
export const STATE_ACTION_TYPES = {
	SET_CURRENT_SESSION: "SET_CURRENT_SESSION",
};

// State reducer definition.
const stateReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case STATE_ACTION_TYPES.SET_CURRENT_SESSION:
			return { ...state, currentSession: payload };

		default:
			throw new Error(`Unhandled type ${type} in stateReducer`);
	}
};

// State provider definition.
export const StateProvider = ({ children }) => {
	const [{ currentSession }, currentSessionDispatch] = useReducer(
		stateReducer,
		{
			currentSession: null,
		}
	);

	const setCurrentSession = (session) => {
		currentSessionDispatch({
			type: STATE_ACTION_TYPES.SET_CURRENT_SESSION,
			payload: session,
		});
	};

	const value = {
		currentSession,
		setCurrentSession,
	};

	return (
		<StateContext.Provider value={value}>{children}</StateContext.Provider>
	);
};
