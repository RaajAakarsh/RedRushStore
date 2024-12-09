import "./ProductCatalogue.css";
import PanelType1 from "./PanelType1";
import PanelType2 from "./PanelType2";
import previous from "./../assets/Previous.png";
import next from "./../assets/next.png";

const ProductCatalogue: React.FC = () => {
	return (
		<div className="product_catalogue_outermost_container">
			<div className="product_catalogue_search_bar_container">
				<input type="text" placeholder="Search" />
			</div>
			<div className="product_catalogue_panel_container">
				<PanelType1 />
				<PanelType2 />
				<PanelType1 />
			</div>

			<div className="table-pagination-container">
				<div className="table-pagination">
					<button className="pagination-prev">
						<img src={previous} alt="prev" />
					</button>
					<p>10</p>
					<button className="pagination-next">
						<img src={next} alt="next" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCatalogue;
