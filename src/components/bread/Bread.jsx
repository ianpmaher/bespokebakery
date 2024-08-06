import "./bread.css"; // Create and import your custom CSS

const Bread = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bread-container relative w-64 h-32">
                <div className="bread-top absolute w-full h-20 bg-yellow-500 rounded-t-full top-0 flex flex-col justify-center items-center">
                    <div className="scoring-mark w-10/12 h-1 bg-yellow-600 my-1"></div>
                    <div className="scoring-mark w-10/12 h-1 bg-yellow-600 my-1"></div>
                    <div className="scoring-mark w-10/12 h-1 bg-yellow-600 my-1"></div>
                </div>
                <div className="bread-bottom absolute w-full h-12 bg-yellow-400 rounded-b-lg bottom-0"></div>
                <div className="steam-container absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="steam steam-1"></div>
                    <div className="steam steam-2"></div>
                    <div className="steam steam-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Bread;
