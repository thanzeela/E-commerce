import Mobile from '../../Components/Products/Mobile'
import Nav1 from '../../Components/Navbar/Nav1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Nav1 />
            {/* <Navigation /> */}
            <Mobile />
        </div>
       

    );
    
}
export default ProductListing;