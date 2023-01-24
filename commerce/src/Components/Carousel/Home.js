import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import img6 from './images/img4.jpg'
import img1 from './images/img3.jpg'
import img7 from './images/img9.jpg'
import img5 from './images/img5.jpg'

import './Home.css'
function Card() {
    return (
        <>
            <Carousel className="cards" fade  indicators= {false} autoPlay={true} interval={3000}>
                <Carousel.Item >
                    <img
                        className='d-block w-100'
                        width= "100%"
                        height="400px"
                        src={img7}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        width= "100%"
                        height="400px"
                        src={img1}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width= "100%"
                        height="400px"
                        src={img6}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width= "100%"
                        height="400px"
                        src={img5}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Card;