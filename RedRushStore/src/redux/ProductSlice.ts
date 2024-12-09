import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
	id: string;
	image: string;
	title: string;
	price: number;
	rating: { rate: number; count: number };
	description: string;
}

export interface ProductState {
	data: Product[];
	hasMore: boolean;
	loading: boolean;
	error: string;
}

const initialState: ProductState = {
	data: [],
	hasMore: true,
	loading: false,
	error: "",
};

export const getProducts = createAsyncThunk<Product[]>(
	"products/getProducts",
	async () => {
		const response = await fetch(`https://fakestoreapi.com/products`);
		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}
		return response.json();
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addData: (state, action: PayloadAction<Product[]>) => {
			state.data = [...action.payload];
		},
		resetData: (state) => {
			state.data = [];
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
				state.data = [...fetchedData];
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
