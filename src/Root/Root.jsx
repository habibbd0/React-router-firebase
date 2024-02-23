import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import loadingsvg from "../image/Ripple-1s-200px.svg"

import React from "react";
import AuthInfo from "../components/Custom Hook/AuthInfo";


const Root = () => {
	const {loading} = AuthInfo()
	
	if(loading) {
		return <div className="flex items-center justify-center mx-auto w-full h-auto my-52">
			<span className="text-2xl font-bold">Loading</span>
			<img src={loadingsvg} alt=""/>
		</div>
	}

	return (
		<div>
			<Navbar></Navbar>
			{/* <h1 className="text-4xl text-center">{name}</h1>
			<h1 className="text-4xl text-center">{age}</h1> */}
				<Outlet></Outlet>
			
		
		</div>
	);
};

export default Root;