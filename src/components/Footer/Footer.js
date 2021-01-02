import './Footer.css';


const Footer = () =>{
    
    return(
        <footer>
                <p></p>
                <br/>
                <div className="footer">
                    <div className="footer-links">
                    <a href="https://www.behance.net/santiagohomps" target="blank"><i className="fab fa-behance"></i></a>
                    <a href="https://www.instagram.com/tomas_borgstrom/" target="blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://ar.linkedin.com/in/santiago-homps" target="blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Frukostman" target="blank"><i className="fab fa-github"></i></a>
                    </div>
                <div className="footer-copyright pt-3">
                    <p>Ilustraciones by:  &nbsp;<i className="fab fa-rebel"></i> &nbsp; Santiago Homps</p>
                </div>
                </div>
            </footer>
    )
}

export default Footer