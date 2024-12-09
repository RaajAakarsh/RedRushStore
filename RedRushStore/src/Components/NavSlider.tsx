import "./NavSlider.css";

const NavSlider: React.FC = () => {
	return (
		<>
			<div className="navslider-outermost-container">
				<ul>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>UNLEASH YOUR INNER ARTIST</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>PAINT YOUR SOUL</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>ART IN MOTION, CREATORS UNITE</span>
					</li>
                    <li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>THE ART REVOLUTION IS HERE</span>
					</li>
                    
				</ul>
				<ul aria-hidden="true">
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>UNLEASH YOUR INNER ARTIST</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>PAINT YOUR SOUL</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>ART IN MOTION, CREATORS UNITE</span>
					</li>
                    <li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>THE ART REVOLUTION IS HERE</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavSlider;
