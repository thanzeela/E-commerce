import Navigation from '../../Components/Navbar/Navbar'
import Cards from '../../Components/Carousel/Home'
import Tiles from '../../Components/Cards/Cards'
import Section from '../../Components/Section/Section'
import Footer from '../../Components/Footer/Footer'
import './LandingPage.css'

function Home() {
    return (
        <>
        <div className='back'>
            <Navigation />
                <Cards />
            <div className='category'>
                <h1 style={{margin:"10px 0 50px 600px"}}>Categories</h1>
                <Tiles />
            </div>
            <Section />
            <Footer />
            </div>

        </>

    );

}
export default Home;