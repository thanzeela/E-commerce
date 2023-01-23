import './Section.css'
import pic1 from './images/pic2.jpg'
function Section() {
    return (
        <>
        <div className='complete'>
        <div className="left">
                <img 
                width={500} height={400}
                src={pic1} />
            </div>
            <div className="right">
                <h1 style={{fontSize:"60pt"}}>
                     Axio 
                </h1>
                <p style={{fontSize:"20pt"}}>
                    Fast, Simple & Delightful.The experience you deserve.
                   
                </p>

            </div>

        </div>
            
        </>

    );
}
export default Section;