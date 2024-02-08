const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[90vh]">
                <div className="w-full h-full">
                    <img src="https://minio.havehalalwilltravel.com/hhwt-upload/original_images/16012023082115_1636624165551_n9.jpg" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-6xl text-white font-bold p-2 font-serif">Luxury
                            <br />
                            Resort & Suits</h1>
                        <p className="text-lg font-medium text-lime-100 mt-2 mb-10">Where every stay is Unique</p>
                        <button className="text-lg text-white py-3 px-7 border-2 border-white">ROOM SUITES</button>
                    </div>
                </div>
                <div className="absolute flex gap-6 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[90vh]">
                <div className="w-full h-full">
                    <img src="https://minio.havehalalwilltravel.com/hhwt-upload/original_images/16012023082110_1636623789490_sticks.jpg" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-6xl text-white font-bold font-serif">Elite
                        <br /> 
                        Havens & Retreats</h1>
                        <p className="text-lg font-medium text-lime-100 mt-4 mb-10">Where every stay is Unique</p>
                        <button className="text-lg text-white py-3 px-7 border-2 border-white">ROOM SUITES</button>
                    </div>
                </div>
                <div className="absolute flex gap-6 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;