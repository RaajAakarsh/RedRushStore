import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productReducer from "./ProductSlice";
import { ProductState } from "./ProductSlice";
import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from "../utils/localStorageUtils";

const persistedState: { products: ProductState }  = loadFromLocalStorage() || {
	products: {
		data: [],
		startIndex: 0,
		endIndex: 4,
		hasMore: true,
		loading: false,
		error : ""
	},
};

export const store = configureStore({
	reducer: {
		products: productReducer,
	},
	preloadedState: persistedState,
});

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
