import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
	id: string;
	image: string;
	name: string;
	price: number;
	rating: { rate: number; count: number };
}

export interface ProductState {
	data: Product[];
	startIndex: number;
	endIndex: number;
	hasMore: boolean;
	loading: boolean;
	error: string;
}

const initialState: ProductState = {
	data: [],
	startIndex: 0,
	endIndex: 4,
	hasMore: true,
	loading: false,
	error: "",
};

export const getProducts = createAsyncThunk<
	Product[],
	{ startIndex: number; endIndex: number }
>("products/getProducts", async ({ startIndex, endIndex }) => {
	const response = await fetch(
		`https://fakestoreapi.com/products?_start=${startIndex}&_limit=${
			endIndex - startIndex
		}`
	);
	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}
	return response.json();
});

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addData: (state, action: PayloadAction<Product[]>) => {
			// state.data = [...state.data, ...action.payload];
			state.data = [...action.payload];
		},
		resetData: (state) => {
			state.data = [];
			state.startIndex = 0;
			state.endIndex = 4;
			state.hasMore = true;
			state.loading = false;
			state.error = "";
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				const fetchedData = action.payload;
				state.data = [...state.data, ...fetchedData];
				state.startIndex = state.startIndex + 4;
				state.endIndex = state.endIndex + 4;
				state.hasMore = fetchedData.length > 0;
				state.error = "";
			})
			.addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload || "unknown error";
			});
	},
});

export const { addData, resetData } = productSlice.actions;

export default productSlice.reducer;
