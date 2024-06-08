import '../styles/boxTwo.css'
import { Link, useLocation } from 'react-router-dom';

const BoxTwo = ({ menu }) => {

    const { pathname } = useLocation();

    return (
        menu && menu.map((item, index) => (
            <Link key={index} to={item.link} className={`boxTwo ${pathname === item.link ? 'active' : ''}`}>
                {item.icon && item.icon} {item.title && item.title}
            </Link>
        ))
    )
}

export default BoxTwo