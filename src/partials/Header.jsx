import '../styles/header.css'

const Header = ({ children }) => {

    return (
        <header>
            <div className="header-content">
                {children}
            </div>
        </header>
    )
}

export default Header