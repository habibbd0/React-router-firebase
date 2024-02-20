import { useContext } from "react";
import { AuthContext } from "../components/Authprovider/Authprovider";


const UserProfile = () => {
	const {user} = useContext(AuthContext)
	return (
		<div className="max-w-3xl mx-auto text-center my-10">
			<h1 className="text-4xl font-bold">User Profile Info</h1>
			<div className="border border-slate-800 my-6 py-4">
             <img src={user?.photoURL} className="w-40 h-40 mx-auto rounded-full"  alt="Habib vai" />
			 <h2 className="mt-4 text-2xl font-semibold capitalize">{user?.displayName}</h2>
			 <span className="text-xl">{user?.email}</span>
			</div>
		</div>
	);
};

export default UserProfile;