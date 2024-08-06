import "./bread.css"; // Ensure you have any necessary additional CSS

const Bread = () => {
    return (
        <div className="flex justify-center items-center h-64 bg-custom8008-bg-color rounded-xl">
            <div className="bread-container relative w-64 h-32">
                <div className="bread-top absolute w-full h-20 bg-baguette-crust-tan rounded-t-full top-0 flex flex-col justify-center items-center">
                    <div className="scoring-mark w-8/12 h-1 bg-baguette-crust-saddleBrown my-1"></div>
                    <div className="scoring-mark w-9/12 h-1 bg-baguette-crust-saddleBrown my-1"></div>
                    <div className="scoring-mark w-10/12 h-1 bg-baguette-crust-saddleBrown my-1"></div>
                </div>
                <div className="bread-bottom absolute w-full h-12 bg-baguette-innerBread-wheat rounded-b-lg bottom-0"></div>
                <div className="steam-container absolute top-2 left-1/2 transform -translate-x-1/2">
                    <div className="steam steam-1"></div>
                    <div className="steam steam-2"></div>
                    <div className="steam steam-3"></div>
                </div>
                <div className="steam-container absolute top-0 left-1/4 transform -translate-x-1/2">
                    <div className="steam steam-1"></div>
                    <div className="steam steam-2"></div>
                    <div className="steam steam-3"></div>
                </div>
                <div className="steam-container absolute top-0 left-3/4 transform -translate-x-1/2">
                    <div className="steam steam-1"></div>
                    <div className="steam steam-2"></div>
                    <div className="steam steam-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Bread;
