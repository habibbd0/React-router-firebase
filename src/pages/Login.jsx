import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"
import app from "../../firebase.Config";
const Login = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)

	const HandleGoogleLogin = () => {
		console.log('login success');
	}

	return (
		<div className="max-w-2xl text-center mx-auto border p-8">
			<h1>Login</h1>
		</div>
	);
};

export default Login;