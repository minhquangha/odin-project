import img from '../assets/logo.png';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className='header'>
            <img src={img} alt='logo' />
            <Link to='/'>
                <h1>Jack's Shop</h1>
            </Link>

            <div className='headerUser'>
                <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M7.5 5.5a4.5 4.5 0 0 1 9 0V7H21v16H3V7h4.5V5.5Zm0 3.5H5v12h14V9h-2.5v3h-2V9h-5v3h-2V9Zm7-2V5.5a2.5 2.5 0 0 0-5 0V7h5Z' />
                </svg>
                <Link to='/user'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 20 20'>
                        <path fill='currentColor' d='M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z' />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
