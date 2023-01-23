import Mobile from '../../Components/Products/Mobile'
import Navigation1 from '../../Components/Navbar/Navbar1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Navigation1 />
            {/* <Navigation /> */}
            <Mobile />
        </div>
       

    );
    
}
export default ProductListing;