import { Link } from 'react-router-dom';
import errorimage from '../image/404-error-page-templates.jpg'

const ErrorElement = () => {
	return (
		<div>
			<img className='w-[800px]  mx-auto text-center mt-6'  src={errorimage} alt="" />
			<Link to='/'>
			<button className='btn btn-success flex items-center mx-auto capitalize'>Back to home page</button>
			</Link>
		</div>
	);
};

export default ErrorElement;