import Products from '../../Components/Products/Products'
import Navigation1 from '../../Components/Navbar/Navbar1'
import './ProductListing.css'
function ProductListing() {
    return(
        <div className='list'>
            <Navigation1 />
            {/* <Navigation /> */}
            <Products />
        </div>
       

    );
    
}
export default ProductListing;