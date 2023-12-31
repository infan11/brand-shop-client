import { Link } from 'react-router-dom';
import error from '../../assets/brand- advertisement/20824298_6342464.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div>
                <img src={error} alt="" />
            </div>
            <Link className='text-4xl ' to={'/'}>Home</Link>
        </div>
    );
};

export default ErrorPage;