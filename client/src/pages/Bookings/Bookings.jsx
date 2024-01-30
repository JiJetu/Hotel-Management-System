import { useContext, useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { AuthContext } from "../../provider/context/Authprovider";
import Booking from "./Booking/Booking";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url])

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl text-center font-semibold text-green-600">Bookings</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Ordered By</th>
                            <th>Order Item</th>
                            <th>Price</th>
                            <th>Purchase Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;