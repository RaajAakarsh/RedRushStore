import "./CardSkeleton.css";

const CardSkeleton: React.FC = () => {
	return (
		<div className="skeleton-product_card_outermost_container">
			<div className="skeleton-product_card_image"></div>
			<div className="skeleton-product_card_below_thumbnail">
				<div className="skeleton-product_card_top_header">
					<div className="skeleton-product_card_name"></div>
				</div>

				<div className="skeleton-product_card_rating_outercontainer"></div>
			</div>
		</div>
	);
};

export default CardSkeleton;
