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
						<span>SHOP FAST, SHOP RED</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>RUSH TO THE BEST DEALS</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>WHERE RED MEETS STYLE</span>
					</li>
                    <li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>EXPERIENCE THE RUSH OF RED</span>
					</li>
                    
				</ul>
				<ul aria-hidden="true">
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>SHOP FAST, SHOP RED</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>RUSH TO THE BEST DEALS</span>
					</li>
					<li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>WHERE RED MEETS STYLE</span>
					</li>
                    <li>
						<span className = "navslider-dot">·</span>
					</li>
					<li>
						<span>EXPERIENCE THE RUSH OF RED</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavSlider;
