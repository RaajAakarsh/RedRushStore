import "./Navbar.css";
import monkey_logo from "./../assets/navbar-monkey-logo.png";
import banner_img from "./../assets/banner.png";
import instagram from "./../assets/instagram.png";
import telegram from "./../assets/telegram.png";
import twitter from "./../assets/twitter.png";
import { useState } from "react";

const Navbar: React.FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const menuToggle = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<div className="navbar-outermost-container">
				<div className="navbar-left-half">
					<div className="navbar-logo">
						<img src={monkey_logo} alt="monkey" />
					</div>
					<div className="navbar-header">LETS PAINT THE FUTURE</div>
				</div>
				<div className="navbar-menu">
					<div className={`fullpagemenu ${isActive ? "active" : ""}`} id="nav">
						<div className="banner">
							<img src={banner_img} alt="" />
						</div>
						<div className="nav">
							<ul>
								<li>
									<a href="#" data-text="About Us">
										About Us
									</a>
								</li>
								<li>
									<a href="#" data-text="Events">
										Events
									</a>
								</li>
								<li>
									<a href="#" data-text="Blog">
										Blog
									</a>
								</li>
								<li>
									<a href="#" data-text="Testemonials">
										Testimonials
									</a>
								</li>
								<li>
									<a href="#" data-text="Community">
										Community
									</a>
								</li>
								<li>
									<a href="#" data-text="Coming Soon">
										Coming Soon
									</a>
								</li>
							</ul>
						</div>
					</div>
					<span
						className={`menuicon ${isActive ? "active" : ""}`}
						id="toggle"
						onClick={menuToggle}
					></span>
					<div className={`social_icons ${isActive ? "active" : ""}`}>
						<span>
							<img src={instagram} alt="instagram" />
						</span>
						<span>
							<img src={twitter} alt="twitter" />
						</span>
						<span>
							<img src={telegram} alt="telegram" />
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
