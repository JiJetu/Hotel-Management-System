
const Hospitality = () => {
    return (
        <div className="mt-[100px] container mx-auto grid grid-cols-12 items-center">
            <div className="col-span-7">
                <div className="flex justify-center items-center relative">
                    <div className="">
                        <img src="https://sailing.thimpress.com/demo-9/wp-content/uploads/sites/10/2020/09/background-2.png"
                            alt="" />
                    </div>
                    <div className="flex">
                        <div className="absolute left-8 bottom-20">
                            <img src="https://sailing.thimpress.com/demo-9/wp-content/uploads/sites/10/2020/09/image_box_1.jpg" alt="" />
                        </div>
                        <div className="absolute right-8 bottom-12">
                            <img className="" src="https://sailing.thimpress.com/demo-9/wp-content/uploads/sites/10/2020/09/image_box_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-5">
                <div className="text-center max-w-[450px] mx-auto space-y-5">
                    <h3 className="font-serif font-semibold text-4xl">Redefines the luxury hospitality experience.</h3>
                    <p className="text-xl text-gray-500">Sitting on the high cliffs of the Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on elegant simplicity and first-rate food, An airy refuge, our boutique 39-room hotel.</p>
                    <button className="py-3 px-12 border border-yellow-500 hover:bg-yellow-400 hover:text-white font-semibold">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Hospitality;