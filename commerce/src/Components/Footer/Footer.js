import './Footer.css'

function Footer(){
    return(
        <>
        <div className = "container1">
            <div className="containers">
            <div className="about">
                <p>ABOUT</p>
                <ul>
                    <li>
                        <a href="#" >Contact Us</a>
                    </li>
                    <li>
                        <a href="#" >About Us</a>
                    </li>
                    <li>
                        <a href="#" >Careers</a>
                    </li>
                    <li>
                        <a href="#" >Press</a>
                    </li>
                </ul>
            </div>
            <div className="policy">
                <p>POLICY</p>
                <ul>
                    <li>
                        <a href="#" >Return Policy</a>
                    </li>
                    <li>
                        <a href="#" >Terms of Use</a>
                    </li>
                    <li>
                        <a href="#" >Security</a>
                    </li>
                    <li>
                        <a href="#" >Privacy</a>
                    </li>
                </ul>
            </div>
            <div className="social">
                <p>SOCIAL</p>
                <ul>
                    <li>
                        <a href="#" >Facebook</a>
                    </li>
                    <li>
                        <a href="#" >Twitter</a>
                    </li>
                    <li>
                        <a href="#" >Instagram</a>
                    </li>
                    <li>
                        <a href="#" >Youtube</a>
                    </li>
                </ul>
            </div>

            </div>
            
        </div>
        </>

    );
}

export default Footer;