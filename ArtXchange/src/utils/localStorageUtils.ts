export const saveToLocalStorage = (state: any) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("reduxState", serializedState);
	} catch (e) {
		console.error("Could not save state to localStorage", e);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem("reduxState");
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.error("Could not load state from localStorage", e);
		return undefined;
	}
};
