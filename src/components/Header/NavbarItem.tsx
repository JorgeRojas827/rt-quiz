import { Link } from 'react-router-dom';
interface IProps {
  icon: string;
  to: string;
}

export const NavbarItem = ({ icon, to }: IProps) => {
    return (
        <Link to = { to }>
            <button
                className="h-14 w-14 rounded-full dark:bg-gray-700 shadow hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none">
                <i className = { icon }></i>
            </button>
        </Link>
    )
}
