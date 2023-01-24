import Card from 'react-bootstrap/Card';
import './Cards.css'
import {Link} from 'react-router-dom'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image5 from './images/image5.jpg'
import image4 from './images/image4.jpg'

function Tiles() {
    return (

        <div className='all'>
            <Link to='/products' className='card'>
            <Card style={{ width: '16rem', backgroundColor: 'white' }}>                
                <Card.Img variant="top" src={image4} style={{height:"170px"}} />
                <Card.Text className="whole">All</Card.Text>
            </Card>
            </Link>
        
            <Link to='/women' className='card'>
            <Card style={{ width: '16rem', backgroundColor: 'white' }}>
                <Card.Img variant="top" src={image5} style={{height:"170px"}}/>
                <Card.Text className="fashion" >Womens Fashion</Card.Text>
            </Card>
            </Link>
            <Link to='/men' className='card'>
                <Card style={{ width: '16rem', backgroundColor: 'white' }}>
                    <Card.Img variant="top" src={image1} />
                    <Card.Text className="electronics">Mens Fashion</Card.Text>
                </Card>
            </Link>
            <Link to='/smartphones' className='card'>
                <Card style={{ width: '16rem', backgroundColor: 'white' }}>
                    <Card.Img variant="top" src={image2} />
                    <Card.Text className="mobiles">Mobiles</Card.Text>
                </Card>
                </Link>

        </div>


    );
}

export default Tiles;
