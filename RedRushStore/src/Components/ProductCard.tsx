import "./ProductCard.css";
import star from "./../assets/star.png";
import CardSkeleton from "./CardSkeleton";
import { useState } from "react";

interface ProductCardProps {
	id: string;
	name: string;
	price: number;
	rating: number;
	description: string;
	image: string;
	isLoading: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	name,
	price,
	rating,
	description,
	image,
	isLoading,
}) => {
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};

	return isLoading ? (
		<CardSkeleton />
	) : (
		<div
			className={`product_card_outermost_container ${active ? "active" : ""}`}
			onClick={handleClick}
		>
			<div
				className={`product_card_description ${active ? "active" : ""}`}
			>
				<h3>Description</h3>
				{description}
			</div>
			<div className={`product_card_image ${active ? "active" : ""}`}>
				<img src={image} alt={`Product ${id}`} />
			</div>
			<div className={`product_card_below_thumbnail ${active ? "active" : ""}`}>
				<div className={`product_card_top_header ${active ? "active" : ""}`}>
					<div className={`product_card_name ${active ? "active" : ""}`}>
						{name}
					</div>
					<div className={`product_card_price ${active ? "active" : ""}`}>
						&#8377;{price}
					</div>
				</div>

				<div
					className={`product_card_rating_outercontainer ${
						active ? "active" : " "
					}`}
				>
					<img src={star} alt="rating" />
					<span>{rating}</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
