import React, { useEffect, useState } from "react";
import star from "./../assets/star.png";
import CardSkeleton from "./CardSkeleton";

interface Product {
	image: string;
	name: string;
	price: number;
	rating: number;
}

const ProductList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					"https://product-api-omega-one.vercel.app/products/v1/get_all_products?start_index=94&end_index=98"
				);
				const data = await response.json();

				setProducts(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching products:", error);
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return (
			<div
				style={{
					background: "black",
					color: "white",
					height: "100vh",
					padding: "50px",
					fontFamily: "Audiowide",
					display: "flex",
				}}
			>
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
			</div>
		);
	}

	return (
		<div
			style={{
				background: "black",
				minHeight: "100vh",
				padding: "50px",
				fontFamily: "Audiowide",
			}}
		>
			<div className="product-container" style={{ display: "flex" }}>
				{products.map((product, index) => (
					<div key={index} className="product_card_outermost_container">
						<div className="product_card_image">
							<img src={product.image} alt={product.name} />
						</div>
						<div className="product_card_below_thumbnail">
							<div className="product_card_top_header">
								<div className="product_card_name">{product.name}</div>
								<div className="product_card_price">&#8377;{product.price}</div>
							</div>

							<div className="product_card_rating_outercontainer">
								<img src={star} alt="rating" />
								<span>{product.rating}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
