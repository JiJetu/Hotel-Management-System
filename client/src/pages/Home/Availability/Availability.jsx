import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Availability = () => {
    const today = new Date()
    const minDay = today.setDate(today.getDate() + 1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(minDay);

    // console.log(today);
    return (
        <div className='max-w-[1000px] mx-auto'>
            <form className='flex justify-center items-center w-full gap-5 text-center bg-white shadow-lg'>
                <div className='flex-1'>
                    <h3 className='text-lg mb-2'>Check-In</h3>
                    <DatePicker
                        className='py-2 text-2xl text-center'
                        selected={startDate}
                        minDate={new Date()}
                        onChange={(date) => setStartDate(date)} />

                </div>
                <hr className="border-2 border-r-0 border-dotted border-gray-300 h-[80px] text-center" />
                <div className='flex-1'>
                    <h3 className='text-lg mb-2'>Check-Out</h3>
                    <DatePicker
                        className='py-2  text-2xl text-center'
                        selected={endDate}
                        minDate={minDay}
                        onChange={(date) => setEndDate(date)} />
                </div>
                <div>
                    <button className='py-10 px-10 text-white bg-slate-900 text-xl'>Check
                        <br />
                        Availability</button>
                </div>
            </form>
        </div>
    );
};

export default Availability;