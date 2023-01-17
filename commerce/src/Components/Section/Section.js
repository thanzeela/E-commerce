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
                <h1>
                    Download Axio App Now
                </h1>
                <p>
                    Fast, Simple & Delightful.
                    All it takes is 30 seconds to Download.
                </p>

            </div>

        </div>
            
        </>

    );
}
export default Section;