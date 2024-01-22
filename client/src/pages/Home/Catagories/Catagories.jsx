import { useEffect, useState } from "react";

const Catagories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data);

            })
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="my-5 text-center text-4xl font-bold text-green-700">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    categories.map(category => (
                        <div key={category.id}>
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {category.categories}
                                    </h2>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Catagories;