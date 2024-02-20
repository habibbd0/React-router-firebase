import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import { AuthContext } from "../components/Authprovider/Authprovider";
import React, { useContext } from "react";


const Root = () => {
	const {name,age} = useContext(AuthContext)
	return (
		<div>
			<Navbar></Navbar>
			{/* <h1 className="text-4xl text-center">{name}</h1>
			<h1 className="text-4xl text-center">{age}</h1> */}
			
			<div>
				<Outlet></Outlet>
			</div>
		
		</div>
	);
};

export default Root;