import "./Home.css";
import ProductCatalogue from "./ProductCatalogue";

const Home: React.FC = () => {
	return (
		<>
			<div className="home-outermost-container">
				<span className="home-art-panel">ART</span>
				<span className="home-X-panel">X</span>
				<span className="home-X-panel-shadow">X</span>
				<span className="home-change-panel">Change</span>
			</div>
			<div className="home_page_quote">ART THAT <br />SPEAKS WORDS</div>
			<div className="product-catalogue">
				<ProductCatalogue />
			</div>
		</>
	);
};

export default Home;
