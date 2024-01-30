import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../../provider/context/Authprovider";

const CheckOut = () => {
    const product = useLoaderData();
    const { _id, productName, image, price } = product;

    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const oitem = form.oitem.value;
        const order = {
            name,
            date,
            email,
            orderItem : oitem,
            orderItemId : _id,
            image,
            price,
        }
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('added successfully')
                navigate(location?.state ? location.state : "/")
            }
        })
    }
    return (
        <div>
            <h1 className="mt-4 text-5xl text-center text-green-500 font-medium">Check Out</h1>
            <form onSubmit={handleCheckout} className="card-body">
                <div className="flex gap-2">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            placeholder="name....."
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Require Date</span>
                        </label>
                        <input type="date"
                            name="date"
                            className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name="email"
                            defaultValue={user.email}
                            placeholder="email......"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Order Item</span>
                        </label>
                        <input type="text"
                            name="oitem"
                            disabled
                            defaultValue={productName}
                            className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-success" type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;