import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Section, FeaturesBox, DemoBox } from "~/components";
import StoryBox from "./components/StoryBox";
import { Image } from "@unpic/qwik";
import {
  FoodIcon,
  PlanningIcon,
  GuidanceIcon,
  FlowerIcon,
} from "~/components/icon";
import HeroImage from "/images/about-page-hero.png";
import Image1 from "/images/inspiring-transformations-story.png";
import Image2 from "/images/recognition-and-accolades-story.png";
import Image3 from "/images/continued-growth-story.png";
import Image4 from "/images/collaborating-for-success-story.png";
import Image5 from "/images/enhanced-support-story.png";
import Image6 from "/images/innovating-for-clients-story.png";
import Image7 from "/images/celebrating-success-stories.png";
import Image8 from "/images/expanding-reach-story.png";
import Image9 from "/images/research-and-expertise-story.png";
import Image10 from "/images/the-inception-story.png";

const storyComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Our Story",
    sub_title:
      "Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey.",
  },
};

const achievementsComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "Company Achievements",
    sub_title:
      "At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements",
  },
};

const featuresList = [
  {
    icon: FlowerIcon,
    title: "10,000+ Transformations",
    description:
      "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.",
  },
  {
    icon: GuidanceIcon,
    title: "Recognition for Excellence",
    description:
      "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.",
  },
  {
    icon: FoodIcon,
    title: "Positive Client Reviews",
    description:
      "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.",
  },
  {
    icon: PlanningIcon,
    title: "Collaborate With Top Health Experts.",
    description:
      "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.",
  },
];

const storyList = [
  {
    image: Image1,
    title: "Inspiring Transformations Story",
    description:
      "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.",
    date: "July 1, 2024",
  },
  {
    image: Image2,
    title: "Recognition and Accolades Story",
    description:
      "Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.",
    date: "March 10, 2023",
  },
  {
    image: Image3,
    title: "Continued Growth Story",
    description:
      "Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.",
    date: "November 2, 2021",
  },
  {
    image: Image4,
    title: "Collaborating for Success Story",
    description:
      "Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.",
    date: "July 15, 2019",
  },
  {
    image: Image5,
    title: "Enhanced Support Story",
    description:
      "In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.",
    date: "April 1, 2018",
  },
  {
    image: Image6,
    title: "Innovating for Clients Story",
    description:
      "Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.",
    date: "January 20, 2017",
  },
  {
    image: Image7,
    title: "Celebrating Success Stories",
    description:
      "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.",
    date: "September 5, 2015",
  },
  {
    image: Image8,
    title: "Expanding Reach Story",
    description:
      "Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.",
    date: "June 10, 2014",
  },
  {
    image: Image9,
    title: "Research and Expertise Story",
    description:
      "After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.",
    date: "March 15, 2012",
  },
  {
    image: Image10,
    title: "The Inception Story",
    description:
      "On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.",
    date: "January 1, 2010",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="container-regular">
        <Image
          src={HeroImage}
          alt="about hero image"
          width="1597"
          height="520"
        />
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <div class="w-full border border-solid text-center border-green85 bg-green95 space-y-12 p-24">
          <h2 class="font-semibold text-5xl text-grey15">
            Welcome to Nutritionist
          </h2>
          <p class="text-grey20 font-medium text-lg">
            Your trusted source for personalized nutrition coaching. Our mission
            is to help you achieve your weight loss and health goals through
            tailored nutrition plans and expert guidance. We understand that
            every individual is unique, and that's why we believe in providing
            personalized solutions that fit your lifestyle and preferences. With
            our team of qualified nutritionists and dietitians, we are dedicated
            to empowering you with the knowledge and tools you need to make
            lasting changes. Whether you want to shed those extra pounds,
            improve your overall well-being, or develop a healthier relationship
            with food, we are here to support you every step of the way. At
            Nutritionist, we believe that healthy eating should be enjoyable and
            sustainable. We emphasize the importance of balanced nutrition,
            focusing on whole foods and mindful eating practices. Our approach
            is rooted in scientific research and evidence-based strategies,
            ensuring that you receive the most up-to-date and accurate
            information. Join our community of individuals committed to
            transforming their lives through nutrition. Take control of your
            health, boost your energy levels, and discover the joy of nourishing
            your body with wholesome foods. We are here to guide you towards a
            healthier, happier you.
          </p>
        </div>
      </section>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={storyComponent}
      >
        <div class="w-full">
          {storyList.map((story) => (
            <StoryBox key={story.title} {...story} />
          ))}
        </div>
      </Section>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={achievementsComponent}
      >
        <div class="grid grid-cols-2 gap-5 2xl:gap-7">
          {featuresList.map((feature, i) => (
            <FeaturesBox key={i} data={feature} />
          ))}
        </div>
      </Section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <DemoBox />
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Nutritionist - Personalized Nutrition Coaching",
  meta: [
    {
      name: "description",
      content:
        "Transform your health with personalized nutrition coaching. Our certified nutritionists provide customized plans and ongoing support for your weight loss journey.",
    },
    {
      name: "keywords",
      content:
        "nutrition, personalized coaching, health transformation, weight loss, nutrition plans, certified nutritionists",
    },
    {
      name: "author",
      content: "jeet kasundra",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Nutritionist - Personalized Nutrition Coaching",
    },
    {
      property: "og:description",
      content:
        "Transform your health with personalized nutrition coaching. Start your journey to optimal health today!",
    },
    {
      property: "og:image",
      content: "https://jeetkasundra.com/metaImage.png",
    },
    {
      property: "og:url",
      content: "https://jeetkasundra.com",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Nutritionist - Personalized Nutrition Coaching",
    },
    {
      name: "twitter:description",
      content:
        "Transform your health with personalized nutrition coaching. Start your journey to optimal health today!",
    },
    {
      name: "twitter:image",
      content: "https://jeetkasundra.com/metaImage.png",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://jeetkasundra.com",
    },
  ],
};
