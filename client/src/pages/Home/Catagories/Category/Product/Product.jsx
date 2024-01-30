import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData();
    const { _id, productName, image, price, productDescription, productFeatures } = product;
    return (
        <div>
            <figure className="w-full h-[65vh]"><img className="w-full h-full" src={image} alt="" /></figure>
            <div className="container mx-auto mt-5 flex gap-3">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl">
                            <span className="font-bold">Product Name:</span> <span className="text-lime-500">{productName}</span>
                        </h2>
                        <div className="flex items-center justify-center gap-3 text-center space-y-3">
                            <p className="text-3xl text-green-700">$ {price}</p>
                            <Link to={`/checkout/${_id}`}>
                                <button className="py-2 px-4 border border-lime-300 rounded-xl hover:bg-lime-400 hover:text-white">Proceed Checkout</button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-lg text-justify"><span className="font-bold">Description:</span>
                        <br />
                        {productDescription}
                    </p>
                    <p><span className="font-bold text-lg">Key Features:</span>
                        <br />
                        {productFeatures}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;