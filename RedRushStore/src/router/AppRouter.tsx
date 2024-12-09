import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavSlider from "../Components/NavSlider";
import Landing from "./../Components/Landing"

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Navbar></Navbar>
            <NavSlider></NavSlider>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Routes>
				<Route path="/lan" element={<Landing />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
