import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    return (
        <div className='home page'>
            <h1>Welcome to Nature Snacks</h1>
            <div>
                <img src="./images/organic store.png" alt="" />
            </div>
            <Link className="" to="/Catalog">
                <h3>Check out our Fruits catalog</h3>
            </Link>
        </div>
    );
}

export default Home;