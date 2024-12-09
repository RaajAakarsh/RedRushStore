import "./ProductCard.css";
import star from "./../assets/star.png";
import CardSkeleton from "./CardSkeleton";

interface ProductCardProps {
	id: string;
	name: string;
	price: number;
	rating: number;
	image: string;
	isLoading: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	name,
	price,
	rating,
	image,
	isLoading,
}) => {
	return isLoading ? (
		<CardSkeleton />
	) : (
		<div className="product_card_outermost_container">
			<div className="product_card_image">
				<img src={image} alt={`Product ${id}`} />
			</div>
			<div className="product_card_below_thumbnail">
				<div className="product_card_top_header">
					<div className="product_card_name">{name}</div>
					<div className="product_card_price">&#8377;{price}</div>
				</div>

				<div className="product_card_rating_outercontainer">
					<img src={star} alt="rating" />
					<span>{rating}</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
