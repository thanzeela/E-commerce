import Women from '../../Components/Products/WomenFashion'
import Nav1 from '../../Components/Navbar/Nav1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Nav1 />
            {/* <Navigation /> */}
            <Women />
        </div>
       

    );
    
}
export default ProductListing;