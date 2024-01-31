
const ManageProductCards = ({ product, handleDeleteProduct }) => {
    const { _id, productName, selectedProduct, image, price, productDescription } = product;
    
    return (
        <div className="grid grid-cols-12 mb-4 border border-lime-300">
            <figure className="col-span-3"><img className="h-full" src={image} alt={productName} /></figure>
            <div className="col-span-2 p-3 flex flex-col justify-center ">
                <h2 className="text-2xl text">
                    {productName}
                </h2>
                <p>Category: <span className="font-bold text-green-600 text-lg">{selectedProduct}</span></p>
            </div>
            <div className="col-span-5">{productDescription}</div>
            <div className="col-span-2 flex gap-3 ml-2">
                <div className="text-2xl text-lime-400 font-semibold flex justify-center items-center">$ {price}</div>
                <div className="col-span-1 flex flex-col items-center justify-center space-y-3">
                    <button className="btn border border-green-500">Update</button>
                    <button onClick={() => handleDeleteProduct(_id)} className="btn btn-md btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageProductCards;