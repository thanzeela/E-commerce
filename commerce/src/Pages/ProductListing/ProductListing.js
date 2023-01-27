import Products from '../../Components/Products/Products'
import Nav1 from '../../Components/Navbar/Nav1'
import './ProductListing.css';
function ProductListing() {
    return(
        <div className='list'>
            <Nav1 />
            {/* <Navigation /> */}
            <Products />
        </div>
    );
    
}
export default ProductListing;