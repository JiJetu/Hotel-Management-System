import { useLoaderData } from "react-router-dom";

const Category = () => {
    const category = useLoaderData()
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
            <h1 id="category" className="text-5xl text-lime-400 font-bold text-center my-5">Category of <span className="text-green-500">{category.categories}</span></h1>
        </div>
    );
};

export default Category;