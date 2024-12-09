import "./App.css";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { getProducts } from "./redux/ProductSlice";
import { useAppDispatch } from "./utils/hooks";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProducts({ startIndex: 0, endIndex: 4 }));
	}, []);

	return (
		<>
			<AppRouter></AppRouter>
		</>
	);
}

export default App;
