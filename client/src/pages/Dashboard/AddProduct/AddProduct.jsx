import Text from "../../../Text/Text";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const pname = form.pname.value;
        const sproduct = form.sproduct.value;
        const pimage = form.pimage.value;
        const price = form.price.value;
        const pdesc = form.pdesc.value;
        const pfeat = form.pfeat.value;

        const product = {
            productName: pname,
            selectedProduct: sproduct,
            image: pimage,
            price,
            productDescription: pdesc,
            productFeatures: pfeat
        }
        console.log(product);

        fetch('http://localhost:5000/addProducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId > 0) {
                    console.log(data);
                    alert("Product added successfully")
                }
                alert("Product added successfully...")
                form.reset();
            })
    }

    return (
        <div>
            <Text>Add Product</Text>
            <form onSubmit={handleAddProduct} className="card-body">
                <div className="flex gap-2">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"
                            name="pname"
                            placeholder="name....."
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full" name="sproduct" defaultValue='Select Your Category' required>
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
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text"
                            name="price"
                            placeholder="Price in $....."
                            defaultValue='30'
                            className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea name="pdesc" className="textarea textarea-bordered" placeholder="Insert some Info......." required></textarea>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Product Features</span>
                        </label>
                        <textarea name="pfeat" className="textarea textarea-bordered" placeholder="Insert some Info......." required></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;