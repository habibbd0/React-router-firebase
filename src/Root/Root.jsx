import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Root = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div>
				<Outlet></Outlet>
			</div>
		
		</div>
	);
};

export default Root;