import Bread from "./bread/Bread";
import Carousel from "./Carousel";

const ContentContainer = () => {
  return (
    <section className="flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-24">
        <Bread className="scale-75" />
        <Carousel
          className="max-w-2xl mt-20"
          images={[
            "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1615199348139-00bf10980769?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1621792955481-c99c3862283a?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
      </div>
    </section>
  );
};

export default ContentContainer;
