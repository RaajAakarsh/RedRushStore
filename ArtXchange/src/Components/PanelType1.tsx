import "./PanelType1.css";
import ProductCard from "./ProductCard";
import React, { useEffect } from "react";
import { useAppSelector } from "./../utils/hooks";

const PanelType1: React.FC = () => {
	const products = useAppSelector((state) => state.products.data);
	const isLoading = useAppSelector((state) => state.products.loading);

	useEffect(() => {
		console.log("Fetched Products:", products);
	}, [products]);

	return (
		<div className="PanelType1_outermost_container">
			<div className="Panel_type1_before"></div>
			<div className="PanelType1_outer_container">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id.toString()}
						name={product.name}
						price={product.price}
						rating={product.rating.rate}
						image={product.image}
						isLoading={isLoading}
					/>
				))}
			</div>
			<div className="Panel_type1_after"></div>
		</div>
	);
};

export default PanelType1;
