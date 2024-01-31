
const Booking = ({ booking, handleDeleteOrder, handleConfirm }) => {
    const { _id, name, email, date, orderItem, image, price, status } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteOrder(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {image && <img src={image} />}
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{orderItem}</td>
            <td>$ {price}</td>
            <td>$ {date}</td>
            <th>
                {
                    status ? <p className="text-red-700 font-bold">Confirmed</p> : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default Booking;