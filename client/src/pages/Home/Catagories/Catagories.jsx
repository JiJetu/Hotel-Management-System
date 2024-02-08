import { useEffect, useState } from "react";
import { GrNext } from 'react-icons/gr';
import { Link } from "react-router-dom";

const Catagories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);

            })
    }, [])

    return (
        <div className="container mx-auto h-[500px]">
            <h1 className="my-5 text-center text-4xl font-bold text-green-700">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    categories.map(category => (
                        <div key={category._id}>
                            <Link to={`/category/${category.path}`}>
                                <div className="bg-base-100 hover:shadow-2xl h-72 border border-gray-300 rounded-2xl">
                                    <figure className="w-full h-3/4"><img src={category.image} className="w-full h-full rounded-t-2xl" alt={category.categories} /></figure>
                                    <div className="flex justify-between p-6">
                                        <h2 className="card-title">
                                            {category.categories}
                                        </h2>
                                        <button><GrNext className="text-2xl text-red-500"></GrNext ></button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Catagories;