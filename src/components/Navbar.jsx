/**
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 * 
 * are usually exported 
 */  

import './Navbar.css';
function Navbar() {
    return(
        <div className="Navbar">
            <h1>Navbar</h1>
        </div>
    );
}
export default Navbar;