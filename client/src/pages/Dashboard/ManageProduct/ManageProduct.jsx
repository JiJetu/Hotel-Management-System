import { useLoaderData } from "react-router-dom";
import Text from "../../../Text/Text";
import ManageProductCards from "./ManageProductCards";

const ManageProduct = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <Text>Manage Product {products.length}</Text>
            <div className="ps-3">
                {
                    products.map(product => <ManageProductCards key={product._id} product={product}></ManageProductCards>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;