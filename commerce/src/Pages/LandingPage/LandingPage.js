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
                <Tiles />
            </div>
            <Section />
            <Footer />
            </div>

        </>

    );

}
export default Home;