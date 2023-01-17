import Card from 'react-bootstrap/Card';
import './Cards.css'
import image1 from './images/image1.webp'
import image2 from './images/image5.jpg'
import image3 from './images/image3.jpg'

function Tiles() {
    return (

        <div className='all'>
            <div className='card'>
            <Card style={{ width: '18rem', backgroundColor: 'white' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Link className="fashion" href="/products">Fashion</Card.Link>
            </Card>
            </div>
            <div className='card'>
                <Card style={{ width: '18rem', backgroundColor: 'white' }}>
                    <Card.Img variant="top" src={image2} />
                    <Card.Link className="electronics" href="#">Electronics</Card.Link>
                </Card>
            </div>
            <div className='card'>
                <Card style={{ width: '18rem', backgroundColor: 'white' }}>
                    <Card.Img variant="top" src={image3} />
                    <Card.Link className="mobiles" href="#">Mobiles</Card.Link>
                </Card>
            </div>

        </div>


    );
}

export default Tiles;