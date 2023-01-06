import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <nav>        
            <h1>WIBU CORNER</h1>
            <Link to="/home" className='mr'>
            Home
            </Link>
            <Link to="/about" className='mr'>
            About
            </Link>
            <Link to="/category/Trending" className='mr'>
            Trending
            </Link>
            <Link to="/category/isekai" className='mr'>
            Isekai
            </Link>
        </nav>
    )
};

export default LandingPage;