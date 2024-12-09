import "./PanelType3.css";
import ProductCard from "./ProductCard";
import React from "react";

interface ProductCardProps {
	products: {
		id: string;
		title: string;
		price: number;
		description: string;
		rating: { rate: number };
		image: string;
	}[];
}

const PanelType3: React.FC<ProductCardProps> = ({ products }) => {
	const truncateTitle = (title: string) => {
		if (title.length > 23) {
			return title.slice(0, 23) + "...";
		}
		return title;
	};

	const isLoading = false;

	return (
		<div className="PanelType3_outermost_container">
			<div className="Panel_type3_before"></div>
			<div className="PanelType3_outer_container">
				{products.length > 0
					? products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id.toString()}
								name={truncateTitle(product.title)}
								price={product.price}
								description={product.description}
								rating={product.rating.rate}
								image={product.image}
								isLoading={isLoading}
							/>
					  ))
					: ""}
			</div>

			<div className="Panel_type3_after"></div>
		</div>
	);
};

export default PanelType3;
