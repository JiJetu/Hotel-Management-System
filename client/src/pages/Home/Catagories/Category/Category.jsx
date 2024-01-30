import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryPageDesign from "./CategoryPageDesign";

const Category = () => {
    const category = useLoaderData()
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addProducts')
        .then(res => res.json())
        .then(data => {
            const remaining = data.filter(d => d.selectedProduct === category.categories)
            setCategoriesData(remaining, ...categoriesData)
        })
    }, [category.categories, categoriesData])

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${category.image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a href="#category">
                        <button className="btn btn-primary">Get Started</button>
                        </a>
                    </div>
                </div>
            </div>
            <h1 id="category" className="text-5xl text-lime-400 font-bold text-center my-5">Category of <span className="text-green-500">{category.categories}</span>
             {categoriesData.length}</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto">
                {
                    categoriesData.map(categoryData => <CategoryPageDesign key={categoryData._id} categoryData={categoryData}></CategoryPageDesign>)
                }
             </div>
        </div>
    );
};

export default Category;