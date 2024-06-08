import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Made with ❤️ By the team of {' '} 
                <Link className="link" target="_blank" to="https://afusystems.com/">
                    AFU Systems PVT(LTD)
                </Link>
            </p>
            <p>&copy; {new Date().getFullYear()} DollarDock. All rights reserved.</p>
        </footer>
    )
}

export default Footer