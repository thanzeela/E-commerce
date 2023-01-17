import Navigation from '../../Components/Navbar/Navbar'
import Cards from '../../Components/Carousel/Home'
import Tiles from '../../Components/Cards/Cards'
import Section from '../../Components/Section/Section'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products'
import './LandingPage.css'

function Home() {
    return (
        <>
            <Navigation />
                <Cards />
            <div className='category'>
                <Tiles />
            </div>
            <Section />
            <Footer />

        </>

    );

}
export default Home;