import '../styles/boxOne.css';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TfiBell, TfiUser } from 'react-icons/tfi';
import { FaAnglesRight } from 'react-icons/fa6';
import { GoSignOut, GoChevronDown, GoChevronUp, GoSun, GoMoon } from 'react-icons/go';

const BoxOne = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [dropdown, setDropdown] = useState(null);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdownType) => {
        setDropdown((prevDropdown) => {
            if (prevDropdown === dropdownType) {
                return null;
            } else {
                return dropdownType;
            }
        });
    };

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <div className="boxOne" ref={dropdownRef}>
            <div>
                <a className="theme-toggle-link" onClick={toggleTheme} title="Toggle theme">
                    {theme === 'light' ? <GoMoon /> : <GoSun />}
                </a>
            </div>
            <div>
                <a 
                    onClick={() => toggleDropdown('notification')}
                    className={`notification-link ${pathname === '/user/notifications' ? 'active' : ''}`}
                    title="Notifications"
                >
                    <span><TfiBell /></span>
                </a>
                {
                    dropdown === 'notification' && (
                        <div className="dropdown">
                            <div className="dropdown-arrow" style={{ left: '39.2%' }}></div>
                            <div className="dropdown-content">
                                <h5>No notifications yet!</h5>
                            </div>
                            <button onClick={() => navigate('/user/notifications')}>
                                All Notifications <span><FaAnglesRight /></span>
                            </button>
                        </div>
                    )
                }
            </div>
            <div>
                <a 
                    onClick={() => toggleDropdown('profile')}
                    className={`profile-link ${pathname === '/user/profile' || dropdown === 'profile' ? 'active' : ''}`}
                >
                    Hi! {user.user?.name.slice(0, 10)} {user.user?.name.length > 10 ? '...' : ''} {' '}
                    {dropdown === 'profile' ? <GoChevronUp size={18} /> : <GoChevronDown size={18} />}
                </a>
                {
                    dropdown === 'profile' && (
                        <div className="dropdown">
                            <div className="dropdown-arrow" style={{ left: '78%' }}></div>
                            <div className="dropdown-content">
                                <TfiUser size={35} />
                                <p>{user.user?.email.slice(0, 18)} {user.user?.email.length > 18 ? '...' : ''}</p>
                                {user.user?.status === 1 ? 
                                    <span className="verified">Verified</span>
                                    : 
                                    <span className="unverified">Unverified</span>
                                }
                            </div>
                            <Link className="navigator" to="/user/profile">Edit Profile</Link>
                            <button onClick={logout}>Logout <span><GoSignOut /></span></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BoxOne;
