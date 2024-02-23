import React from 'react';
import HomeImage from '../image/Habib2.png'
import AuthInfo from '../components/Custom Hook/AuthInfo';


const Home = () => {
	const {name,age} = AuthInfo()
	return (
		<div>
			<img className="w-screen h-screen " src={HomeImage} alt="" />
			<h1 className='text-2xl text-center'>this is a home page</h1>
			{/* <p className='text-4xl'>{age}</p> */}
		</div>
	);
};

export default Home;