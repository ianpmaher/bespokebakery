import { Heading, Theme, ThemePanel } from "@radix-ui/themes";

const AboutPage = (props) => {
  return (
    <Theme
      accentColor="mint"
      backgroundColor="gray"
      panelBackground="translucent"
      radius="full"
    >
      <div className={`${props.className} mx-auto my-0`}>
        <div className="text-bake-warm-beige bg-bake-espresso max-w-fit center-center text-lg px-2 py-1 mt-8 rounded-md">
          <Heading>About Page</Heading>
          <p>Welcome to our bakery! We are passionate about creating delicious and unique baked goods.</p>
          <p>Our team of talented bakers use only the finest ingredients to ensure every bite is a delight.</p>
          <p>
            Whether you&apos;re looking for a special occasion cake, freshly baked bread, or a sweet treat, we&apos;ve
            got you covered.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1615199348139-00bf10980769?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bakery"
            className="absolute scale-90 rounded-md"
          />
        </div>
      </div>
      <ThemePanel />
    </Theme>
  );
};

export default AboutPage;
