import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, productName, selectedProduct, image, price, productDescription, productFeatures } = product;

    const navigate = useNavigate()

    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const pname = form.pname.value;
        const sproduct = form.sproduct.value;
        const pimage = form.pimage.value;
        const price = form.price.value;
        const pdesc = form.pdesc.value;
        const pfeat = form.pfeat.value;

        const updateProduct = {
            productName: pname,
            selectedProduct: sproduct,
            image: pimage,
            price,
            productDescription: pdesc,
            productFeatures: pfeat
        }
        console.log(updateProduct);

        fetch(`http://localhost:5000/addProducts/${_id}`, {
            method:"PUT",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("update successfully");
                // window.history.back()
                navigate(-1)
            }
        })
    }  

    return (
        <div>
            <h1 className="text-green-500 text-5xl font-semibold text-center">Update Product</h1>
            <form onSubmit={handleUpdateProduct}  className="card-body">
                <div className="flex gap-2">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"
                            name="pname"
                            placeholder="name....."
                            defaultValue={productName}
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full" name="sproduct" defaultValue={selectedProduct} required>
                            <option disabled>Select Your Category</option>
                            <option>Crops</option>
                            <option>Flowers</option>
                            <option>Fruits</option>
                            <option>Vegetables</option>
                            <option>Herbs</option>
                            <option>Seasonal Gardening</option>
                            <option>Indoor Plants</option>
                            <option>Evergreen Trees</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="url"
                            name="pimage"
                            placeholder="Image in URL...."
                            defaultValue={image}
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text"
                            name="price"
                            placeholder="Price in $....."
                            defaultValue={price}
                            className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea
                         name="pdesc"
                          className="textarea textarea-bordered"
                          defaultValue={productDescription} placeholder="Insert some Info......." required></textarea>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Product Features</span>
                        </label>
                        <textarea 
                        name="pfeat" 
                        className="textarea textarea-bordered"
                        defaultValue={productFeatures}
                         placeholder="Insert some Info......." required></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update Product" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;