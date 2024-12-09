import "./PanelType2.css";
import ProductCard from "./ProductCard";
import React from "react";
import { useAppSelector } from "./../utils/hooks";
import CardSkeleton from "./CardSkeleton";

interface ProductCardProps {
	index: number;
}

const PanelType2: React.FC<ProductCardProps> = ({ index }) => {
	const products = useAppSelector((state) => state.products.data);
	const isLoading = useAppSelector((state) => state.products.loading);

	const startIndex = index;
	const endIndex = index + 4;

	const productsToDisplay = products.slice(startIndex, endIndex);

	const truncateTitle = (title: string) => {
		if (title.length > 23) {
			return title.slice(0, 23) + "...";
		}
		return title;
	};

	return (
		<div className="PanelType2_outermost_container">
			<div className="Panel_type2_before"></div>
			<div className="PanelType2_outer_container">
				{productsToDisplay.length > 0
					? productsToDisplay.map((product) => (
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
					: [...Array(4)].map((_, index) => <CardSkeleton key={index} />)}
			</div>
			<div className="Panel_type2_after"></div>
		</div>
	);
};

export default PanelType2;
