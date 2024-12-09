import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IndState {
	ind: number
}

const initialState: IndState = {
	ind : 0
};

export const indexSlice = createSlice({
	name: "index",
	initialState,
	reducers: {
		addData: (state, action: PayloadAction<number>) => {
			state.ind = action.payload;
		},
		resetData: (state) => {
			state.ind = 0;
		},
	},
});

export const { addData, resetData } = indexSlice.actions;

export default indexSlice.reducer;
