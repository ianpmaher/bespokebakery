import React from "react";

const AboutPage = (props) => {
  return (
    <div className={`${props.className} mx-auto my-0`}>
      <h1>About Page</h1>
      <p>Welcome to our bakery! We are passionate about creating delicious and unique baked goods.</p>
      <p>Our team of talented bakers use only the finest ingredients to ensure every bite is a delight.</p>
      <p>
        Whether you're looking for a special occasion cake, freshly baked bread, or a sweet treat, we've got you
        covered.
      </p>
      <div className="flex center-center">
        <img
          src="https://images.unsplash.com/photo-1615199348139-00bf10980769?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bakery"
          className="center-center"
        />
      </div>
    </div>
  );
};

export default AboutPage;
