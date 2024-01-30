import { useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData();
    const { productName, image, price, productDescription, productFeatures } = product;
    return (
        <div>
            <figure className="w-full h-[70vh]"><img className="w-full h-full" src={image} alt="" /></figure>
            <div className="container mx-auto mt-5 space-y-4">
                <h2 className="text-3xl">
                <span className="font-bold">Product Name:</span> <span className="text-green-600">{productName}</span>
                </h2>
                <p className="text-lg"><span className="font-bold">Description:</span>
                    <br />
                    {productDescription}
                </p>
                <p><span className="font-bold text-lg">Key Features:</span>
                    <br />
                    {productFeatures}
                </p>
            </div>
        </div>
    );
};

export default Product;