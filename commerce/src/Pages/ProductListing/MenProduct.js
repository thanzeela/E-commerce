import Men from '../../Components/Products/MenFashion'
import Nav1 from '../../Components/Navbar/Nav1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Nav1 />
            {/* <Navigation /> */}
            <Men />
        </div>
       

    );
    
}
export default ProductListing;