import { useState } from "react";
import "./About.css";
function About() {
    const [contactVisible, setContactVisible] = useState(false);

    function showData() {
        setContactVisible(!contactVisible);
    }
    
    return (
        <div className="about page">
            <h3>Nature Snacks</h3>

            {contactVisible? (
                <div className="box">
                    <p>
                        To get in touch please write to <b>NatureSnacks.com</b>
                    </p>
                </div>
            ) : null}

        <button onClick={showData} className="btn btn-outline-dark">
            View Contact Info
            </button>
        </div>
    );
}



export default About;