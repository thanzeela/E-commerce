import Women from '../../Components/Products/WomenFashion'
import Navigation1 from '../../Components/Navbar/Navbar1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Navigation1 />
            {/* <Navigation /> */}
            <Women />
        </div>
       

    );
    
}
export default ProductListing;