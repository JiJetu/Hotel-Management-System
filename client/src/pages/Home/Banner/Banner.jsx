const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[80vh]">
                <div className="w-full h-[80vh]">
                    <img src="https://givemetrees.org/site-admin/upload/1356345731.jpg" className="w-full h-full" />
                </div>
                <div className="absolute flex gap-6 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="w-full h-[80vh]">
                    <img src="https://www.plantsnap.com/wp-content/uploads/2021/02/tree-planting-hand-water-shovel_1medium.jpg" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="text-center space-y-6">
                        <h1 className="text-5xl text-lime-400 font-bold">Green today Better tomorrow</h1>
                        <p className="text-base font-medium text-lime-200">Planting trees today not only ensures a vibrant and sustainable tomorrow
                        <br /> but also fosters a legacy of ecological resilience. 
                        Each sapling becomes a beacon of hope, contributing to the collective effort for a
                        <br /> greener planet and a healthier future for generations to come.</p>
                    </div>
                </div>
                <div className="absolute flex gap-6 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="w-full h-[80vh]">
                    <img src="https://reelpaper.com/cdn/shop/articles/how-to-save-trees-5-ways-to-protect-our-forests-reel-talk-179394_1024x1024.jpg?v=1605124157" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="text-center space-y-6">
                        <h1 className="text-5xl text-lime-400 font-bold">Green today Better tomorrow</h1>
                        <p className="text-base font-medium text-lime-200">Planting trees today not only ensures a vibrant and sustainable tomorrow
                        <br /> but also fosters a legacy of ecological resilience. 
                        Each sapling becomes a beacon of hope, contributing to the collective effort for a
                        <br /> greener planet and a healthier future for generations to come.</p>
                    </div>
                </div>
                <div className="absolute flex gap-6 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="w-full h-[80vh]">
                    <img src="https://www.givemetrees.org/img/bread/about.JPG" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="text-center space-y-6">
                        <h1 className="text-5xl text-lime-400 font-bold">Green today Better tomorrow</h1>
                        <p className="text-base font-medium text-lime-200">Planting trees today not only ensures a vibrant and sustainable tomorrow
                        <br /> but also fosters a legacy of ecological resilience. 
                        Each sapling becomes a beacon of hope, contributing to the collective effort for a
                        <br /> greener planet and a healthier future for generations to come.</p>
                    </div>
                </div>
                <div className="absolute flex gap-6 transform -translate-y-1/2 right-8 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;