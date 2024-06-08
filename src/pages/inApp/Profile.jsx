import '../../styles/innerAppStyles.css'

import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { BsSpeedometer2 } from 'react-icons/bs';
import { GoLog } from 'react-icons/go';
import { GrAscend, GrMoney } from "react-icons/gr";

import Header from '../../partials/Header';
import Main from '../../partials/Main';
import Footer from '../../partials/Footer';
import BoxOne from '../../components/BoxOne';
import BoxTwo from '../../components/BoxTwo';
import ProfileContent from '../../components/ProfileContent'

const Profile = () => {
    const { user } = useAuth();
    const { theme } = useTheme();

    return (
        <div className={`inner-app-container ${theme === 'light' ? '' : 'dark-mode'}`}>
            <Header>
                <div className="level-one">
                    <div>
                        <Link className="logo" to="/user/dashboard">
                            <img src="/logo.png" alt="logo" /> {" "}
                            DollarDock
                        </Link>
                    </div>
                    <div>
                        <BoxTwo 
                            menu={[
                                { title: "Dashboard", link: "/user/dashboard", icon: <BsSpeedometer2 /> },
                                { title: "Expenses", link: "/user/expense", icon: <GrMoney /> },
                                { title: "Budgets", link: "/user/budget", icon: <GrAscend /> },
                                { title: "Reports", link: "/user/report", icon: <GoLog /> },
                            ]} 
                        />
                    </div>
                    <div><BoxOne /></div>
                </div>
            </Header>
            <Main>
                <div className="container">
                    {
                        user.user?.status === 1 ? null : 
                        <div className="unverified-status">Kindly verify your email.</div> 
                    }
                    <ProfileContent />
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default Profile;