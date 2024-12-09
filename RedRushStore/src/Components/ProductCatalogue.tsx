import "./ProductCatalogue.css";
import PanelType1 from "./PanelType1";
import PanelType2 from "./PanelType2";
import previous from "./../assets/Previous.png";
import next from "./../assets/next.png";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./../utils/hooks";
import { addData } from "./../redux/IndexSlice";
import PanelType3 from "./PanelType3";

const ProductCatalogue: React.FC = () => {
	const dispatch = useAppDispatch();
	const currentIndex = useAppSelector((state) => state.index.ind);
	const products = useAppSelector((state) => state.products.data);
	const allProducts = useAppSelector((state) => state.products.data);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [searchedProducts, setSearchedProducts] = useState<boolean>(false);

	const filteredProducts = allProducts.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleNext = () => {
		if (products.length >= (currentIndex + 1) * 12) {
			dispatch(addData(currentIndex + 1));
		}
	};

	const handlePrev = () => {
		if (currentIndex + 1 > 0) {
			dispatch(addData(currentIndex - 1));
		}
	};

	useEffect(() => {
		if (searchQuery !== "") setSearchedProducts(true);
		if (searchQuery === "") setSearchedProducts(false);
	}, [searchQuery]);

	const panels = [
		<PanelType1 index={currentIndex * 12} />,
		<PanelType2 index={currentIndex * 12 + 4} />,
		<PanelType1 index={currentIndex * 12 + 8} />,
	];
	return (
		<div className="product_catalogue_outermost_container">
			<div className="product_catalogue_search_bar_container">
				<input
					type="text"
					placeholder="Search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className="product_catalogue_panel_container">
				{searchedProducts ? (
					<PanelType3 products={filteredProducts} />
				) : (
					panels.map((panel, index) => <div key={index}>{panel}</div>)
				)}
			</div>

			<div className="table-pagination-container">
				<div className="table-pagination">
					<button className="pagination-prev" onClick={handlePrev}>
						<img src={previous} alt="prev" />
					</button>
					<p>{currentIndex + 1}</p>
					<button className="pagination-next" onClick={handleNext}>
						<img src={next} alt="next" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCatalogue;
