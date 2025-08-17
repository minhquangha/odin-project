import { useOutletContext } from "react-router-dom";
function CheckProduct() {
    const [count,setCount] = useOutletContext();
    return(
        <div className="currentProducts">
            <h1>Number of product you have choosen: {count||0}</h1>
        </div>
    )
}
export default CheckProduct;