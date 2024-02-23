
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";


const AuthInfo = () => {
	const Info = useContext(AuthContext)
	return Info
}

export default AuthInfo; 