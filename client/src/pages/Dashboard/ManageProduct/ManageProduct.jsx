import { useLoaderData } from "react-router-dom";
import Text from "../../../Text/Text";
import ManageProductCards from "./ManageProductCards";
import { useState } from "react";

const ManageProduct = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)

    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/addProducts/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert("deleted successfully")
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            }
        })
    }

    return (
        <div>
            <Text>Manage Product {products.length}</Text>
            <div className="ps-3">
                {
                    products.map(product => <ManageProductCards 
                        key={product._id} 
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}></ManageProductCards>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;