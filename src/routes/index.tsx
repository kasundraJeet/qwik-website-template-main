import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { Section, FeaturesBox, BlogBox } from "~/components";
import heroImage from "/images/hero.png";
import avatar1 from "/images/avatar-1.png";
import avatar2 from "/images/avatar-2.png";
import avatar3 from "/images/avatar-3.png";
import blog1 from "/images/blog-1.png";
import blog2 from "/images/blog-2.png";
import blog3 from "/images/blog-3.png";
import blog4 from "/images/blog-4.png";
import auth1 from "/images/auth-1.png";
import auth2 from "/images/auth-2.png";
import auth3 from "/images/auth-3.png";
import auth4 from "/images/auth-4.png";

const featuresComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Features",
    sub_title:
      "Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.",
  },
};

const blogComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Our Blogs",
    sub_title:
      "Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.",
  },
};

const featuresList = [
  {
    title: "Personalized Nutrition Plans",
    description:
      "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  },
  {
    title: "Guidance from Certified Nutritionists",
    description:
      "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
  },
  {
    title: "Food Tracking and Analysis",
    description:
      "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  },
  {
    title: "Meal Planning and Recipes",
    description:
      "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  },
  {
    title: "Lifestyle and Behavior Coaching",
    description:
      "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  },
  {
    title: "Nutritional Education and Workshops",
    description:
      "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  },
];

const blogList = [
  {
    title: "The Benefits of Hydration for Weight Loss",
    category: "Weight Loss",
    description:
      "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    image: blog1,
    author: "Emily Johnson",
    date: "23 May 2023",
    read_time: "3 min read",
    auth_image: auth1,
  },
  {
    title: "Cultivating a Healthy Relationship with Food",
    category: "Mindful Eating",
    description:
      "Learn how to develop a mindful eating habit to cultivate a healthier relationship with food and improve your overall well-being.",
    image: blog2,
    author: "Sarah Thompson",
    date: "23 May 2023",
    read_time: "4 min read",
    auth_image: auth2,
  },
  {
    title: "Carbohydrates, Proteins, and Fats",
    category: "Understanding Macronutrients",
    description:
      "Gain a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    image: blog3,
    author: "Mark Wilson",
    date: "23 May 2023",
    read_time: "5 min read",
    auth_image: auth3,
  },
  {
    title: "Quick and Nutritious Options",
    category: "Healthy Snacks on the Go",
    description:
      "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    image: blog4,
    author: "Emily Johnson",
    date: "23 May 2023",
    read_time: "3 min read",
    auth_image: auth4,
  },
];

export default component$(() => {
  return (
    <>
      <section class="w-full grid grid-cols-2 items-center gap-12">
        <div class="w-full relative rounded-br-2xl pt-[80%] overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            class="absolute inset-0 w-full h-full overflow-hidden"
          />
        </div>
        <div class="w-full flex flex-col items-start gap-16 max-w-3xl">
          <div class="flex flex-col items-start gap-12">
            <div class="flex flex-col items-start gap-5">
              <div class="flex flex-col items-start gap-3.5">
                <h2 class="font-semibold text-2xl text-darkGreen15 border-b-4 pb-2 border-green70">
                  Transform Your ❤️ Health with
                </h2>
                <h1 class="font-bold text-6xl text-darkGreen15">
                  Personalized Nutrition Coaching
                </h1>
              </div>
              <p class="font-medium text-lg text-grey20">
                Welcome to Nutritionist, your partner in achieving optimal
                health through personalized nutrition coaching. Our certified
                nutritionists are here to guide you on your weight loss journey,
                providing customized plans and ongoing support. Start your
                transformation today and experience the power of personalized
                nutrition coaching.
              </p>
            </div>
            <div class="flex items-stretch gap-5">
              <button class="hero--btn">Get Starter Today</button>
              <button class="hero--btn transparent">Book a Demo</button>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full border border-solid border-green70 py-2 px-2.5">
              <div class="flex items-stretch -space-x-3">
                <Image
                  src={avatar1}
                  alt=""
                  width="50"
                  height="50"
                  class="avatar-image"
                />
                <Image
                  src={avatar2}
                  alt=""
                  width="50"
                  height="50"
                  class="avatar-image"
                />
                <Image
                  src={avatar3}
                  alt=""
                  width="50"
                  height="50"
                  class="avatar-image"
                />
              </div>
            </div>
            <p class="text-xl text-darkGreen20 font-semibold">
              <span class="text-darkGreen40 font-bold">430+</span> Happy
              Customers
            </p>
          </div>
        </div>
      </section>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={featuresComponent}
      >
        <div class="grid grid-cols-2 gap-5 2xl:gap-7">
          {featuresList.map((feature, i) => (
            <FeaturesBox key={i} data={feature} />
          ))}
        </div>
      </Section>
      <Section class="container-regular" data={blogComponent}>
        <div class="grid grid-cols-2 gap-5 2xl:gap-7">
          {blogList.map((blog, i) => (
            <BlogBox key={i} {...blog} />
          ))}
        </div>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
