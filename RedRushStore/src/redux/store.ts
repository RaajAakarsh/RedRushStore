import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productReducer from "./ProductSlice";
import { ProductState } from "./ProductSlice";
import indexReducer from "./IndexSlice";

const initialState: { products: ProductState; index: { ind: number } } = {
	products: {
		data: [],
		hasMore: true,
		loading: false,
		error: "",
	},
	index: {
		ind: 0,
	},
};

export const store = configureStore({
	reducer: {
		products: productReducer,
		index: indexReducer,
	},
	preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
