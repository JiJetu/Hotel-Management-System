import { Link } from "react-router-dom";

const CategoryPageDesign = ({ categoryData }) => {
    const { _id, productName, image, price, productDescription } = categoryData;
    return (
        <div>
            <Link to={`/category/product/${_id}`}>
                <div className="bg-base-100 hover:shadow-2xl min-h-72 border border-gray-300 rounded-2xl">
                    <figure className="w-full h-52"><img src={image} className="w-full h-full rounded-t-2xl" alt={productName} /></figure>
                    <div className="p-6">
                        <div className="flex justify-between items-center">
                            <h2 className="card-title">
                                {productName}
                            </h2>
                            <p className="text-xl text-green-600">$ {price}</p>
                        </div>
                        {
                            productDescription.length > 200 && <p className="text-justify text-base">
                                {productDescription.slice(0, 180)}....
                                <button className="text-lime-500 font-bold">Read More</button>
                            </p>
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryPageDesign;