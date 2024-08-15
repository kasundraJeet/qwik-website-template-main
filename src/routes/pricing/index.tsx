import { component$ } from "@builder.io/qwik";
import { Hero } from "~/components";

const heroContent = {
  title: "Our Pricing",
  description:
    "At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle.",
};

export default component$(() => {
  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
    </main>
  );
});
