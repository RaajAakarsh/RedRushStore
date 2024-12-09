import "./PanelType2.css";
import ProductCard from "./ProductCard";

const PanelType2: React.FC = () => {
	return (
		<div className="PanelType2_outermost_container">
			<div className="Panel_type2_before"></div>
			<div className="PanelType2_outer_container">
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
			</div>
			<div className="Panel_type2_after"></div>
		</div>
	);
};

export default PanelType2;
