import Men from '../../Components/Products/MenFashion'
import Navigation1 from '../../Components/Navbar/Navbar1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Navigation1 />
            {/* <Navigation /> */}
            <Men />
        </div>
       

    );
    
}
export default ProductListing;