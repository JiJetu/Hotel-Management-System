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

    const handleDeleteOrder = id => {
        const proceed = confirm("Are you sure you want to delete it?");

        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successful')
                        const remaining = bookings.filter(bookItem => bookItem._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:"PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: "Confirm"})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find( booking => booking._id === id)
                updated.status = "Confirm";
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl text-center font-semibold text-green-600">Bookings {bookings.length}</h1>
            <div className="overflow-x-auto container mx-auto">
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
                            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDeleteOrder={handleDeleteOrder}
                            handleConfirm={handleConfirm}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;