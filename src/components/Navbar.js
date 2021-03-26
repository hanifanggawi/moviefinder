import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" exact><label className="logotype"> MOVIE FINDER</label></Link>
        </nav>
    )
}

export default Navbar
