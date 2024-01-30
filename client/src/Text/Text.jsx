
const Text = ({children}) => {
    return (
        <div className="relative border-s-8 rounded-xl border-lime-400 w-full ps-3">
            <h1 className="text-6xl text-green-500 font-medium">{children}</h1>
            <h3 className="absolute opacity-5 text-9xl bottom-0 -z-10 left-5">{children}</h3>
        </div>
    );
};

export default Text;