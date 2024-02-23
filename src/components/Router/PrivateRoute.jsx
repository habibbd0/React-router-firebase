import { Navigate } from "react-router-dom";
import AuthInfo from "../Custom Hook/AuthInfo";

const PrivateRoute = ({children}) => {
	const {user,loading} = AuthInfo();

	if(loading) {
		return <div className="flex items-center justify-center mx-auto w-full h-auto my-52">
			<span className="text-2xl font-bold">Loading</span>
			<img src={loadingsvg} alt=""/>
		</div>
	}

	if(user){ 
		return children;
	}
	return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;