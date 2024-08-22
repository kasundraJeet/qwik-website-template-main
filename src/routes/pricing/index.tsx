import { component$, useSignal, $ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import Image1 from "/images/abstract-design.png";
import { Hero, Section, PricingBoxPremium } from "~/components";

const heroContent = {
  title: "Our Pricing",
  description:
    "At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle.",
};

const faqComponent = {
  space_y: "50px",
  space_y_lg: "60px",
  space_y_2xl: "80px",
  heading: {
    title: "FAQ",
    sub_title:
      "We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.",
  },
};

const faqList = [
  {
    title: "What is personalized nutrition coaching?",
    description:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    title: "How can nutrition coaching help me lose weight?",
    description:
      "Nutrition coaching can help you lose weight by creating a balanced, sustainable plan that fits your lifestyle.",
  },
  {
    title: "Can I still enjoy my favorite foods while on a nutrition plan?",
    description:
      "Yes, a personalized nutrition plan allows you to enjoy your favorite foods in moderation.",
  },
  {
    title: "How often will I have contact with my nutritionist?",
    description:
      "You will have regular contact with your nutritionist, with options for weekly or bi-weekly check-ins.",
  },
  {
    title: "How long will it take to see results?",
    description:
      "Results vary, but many clients see noticeable changes within a few weeks of following their plan.",
  },
  {
    title:
      "Are the meal plans and recipes provided suitable for vegetarians or vegans?",
    description:
      "Yes, we offer meal plans and recipes that are suitable for vegetarians, vegans, and other dietary preferences.",
  },
];

const features = [
  {
    name: "Personalized Nutrition Plan",
    freePlan1: true,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "Mobile App Access",
    freePlan1: true,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "Email Support",
    freePlan1: true,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "One-on-One Video Consultations",
    freePlan1: false,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "Recipe Recommendations and Meal Planning",
    freePlan1: false,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "Priority Support",
    freePlan1: false,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "Educational Resources and Guides",
    freePlan1: false,
    freePlan2: true,
    freePlan3: true,
  },
  {
    name: "Advanced Progress Tracking Tools",
    freePlan1: false,
    freePlan2: false,
    freePlan3: true,
  },
  {
    name: "Customized Meal Plans and Recipe Suggestions",
    freePlan1: false,
    freePlan2: false,
    freePlan3: true,
  },
  {
    name: "Phone Support",
    freePlan1: false,
    freePlan2: false,
    freePlan3: true,
  },
];

const pricingData = {
  pricingPlans: [
    {
      name: "Basic Plan",
      discount: "Up to 50% off on Yearly Plan",
      price: "$49",
      features: [
        "Personalized nutrition plan tailored to your goals and dietary preferences",
        "Access to our mobile app for convenient meal tracking and progress monitoring",
        "Email support to address your questions and concerns",
        "Regular check-ins with a dedicated nutritionist to review your progress and provide guidance",
      ],
    },
    {
      name: "Premium Plan",
      discount: "Up to 50% off on Yearly Plan",
      price: "$79",
      features: [
        "All the features included in the Basic Plan",
        "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support",
        "Recipe recommendations and meal planning assistance",
        "Priority email support for quicker responses to your inquiries",
        "Educational resources and guides to deepen your understanding of nutrition and healthy habits",
      ],
    },
    {
      name: "Ultimate Plan",
      discount: "Up to 50% off on Yearly Plan",
      price: "$99",
      features: [
        "All the features included in the Plus Plan",
        "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability",
        "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals",
        "Customized meal plans and recipe suggestions based on your preferences and nutritional needs",
        "Priority email and phone support for immediate assistance",
      ],
      note: "The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization",
    },
  ],
};

export default component$(() => {
  const openIndex = useSignal(0);

  const toggleFaq = $((index: number) => {
    openIndex.value = openIndex.value === index ? -1 : index;
  });

  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
      <section class="container-regular">
        <div class="grid grid-cols-3 gap-7 items-start">
          {pricingData.pricingPlans.map((plan, index) => (
            <PricingBoxPremium key={index} plan={plan} />
          ))}
        </div>
      </section>
      <section class="container-regular">
        <div class="w-full bg-green95 border border-solid border-green85 p-12 rounded-xl">
          <table class="w-full features--table">
            <thead>
              <tr>
                <th>
                  <div>Features</div>
                </th>
                <th>
                  <div>Free Plan</div>
                </th>
                <th>
                  <div> Free Plan</div>
                </th>
                <th>
                  <div> Free Plan</div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-green80">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td class="font-medium text-xl text-grey15">
                    {feature.name}
                  </td>
                  <td>
                    <div class="check-box--features-table">
                      {feature.freePlan1 ? (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.715 4.98396C21.1103 5.2852 21.1867 5.84992 20.8854 6.24529L11.2854 18.8453C11.128 19.0519 10.8891 19.1804 10.6299 19.1978C10.3708 19.2153 10.1168 19.1199 9.93314 18.9362L4.53314 13.5362C4.18166 13.1848 4.18166 12.6149 4.53314 12.2635C4.88461 11.912 5.45446 11.912 5.80593 12.2635L10.4777 16.9353L19.4536 5.15441C19.7549 4.75904 20.3196 4.68273 20.715 4.98396Z"
                            fill="#262626"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.20437 6.2636C7.85289 5.91213 7.28304 5.91213 6.93157 6.2636C6.5801 6.61508 6.5801 7.18492 6.93157 7.5364L11.3952 12L6.93157 16.4636C6.5801 16.8151 6.5801 17.3849 6.93157 17.7364C7.28304 18.0879 7.85289 18.0879 8.20437 17.7364L12.668 13.2728L17.1316 17.7364C17.483 18.0879 18.0529 18.0879 18.4044 17.7364C18.7558 17.3849 18.7558 16.8151 18.4044 16.4636L13.9408 12L18.4044 7.5364C18.7558 7.18492 18.7558 6.61508 18.4044 6.2636C18.0529 5.91213 17.483 5.91213 17.1316 6.2636L12.668 10.7272L8.20437 6.2636Z"
                            fill="#262626"
                          />
                        </svg>
                      )}
                    </div>
                  </td>
                  <td>
                    <div class="check-box--features-table">
                      {feature.freePlan2 ? (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.715 4.98396C21.1103 5.2852 21.1867 5.84992 20.8854 6.24529L11.2854 18.8453C11.128 19.0519 10.8891 19.1804 10.6299 19.1978C10.3708 19.2153 10.1168 19.1199 9.93314 18.9362L4.53314 13.5362C4.18166 13.1848 4.18166 12.6149 4.53314 12.2635C4.88461 11.912 5.45446 11.912 5.80593 12.2635L10.4777 16.9353L19.4536 5.15441C19.7549 4.75904 20.3196 4.68273 20.715 4.98396Z"
                            fill="#262626"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.20437 6.2636C7.85289 5.91213 7.28304 5.91213 6.93157 6.2636C6.5801 6.61508 6.5801 7.18492 6.93157 7.5364L11.3952 12L6.93157 16.4636C6.5801 16.8151 6.5801 17.3849 6.93157 17.7364C7.28304 18.0879 7.85289 18.0879 8.20437 17.7364L12.668 13.2728L17.1316 17.7364C17.483 18.0879 18.0529 18.0879 18.4044 17.7364C18.7558 17.3849 18.7558 16.8151 18.4044 16.4636L13.9408 12L18.4044 7.5364C18.7558 7.18492 18.7558 6.61508 18.4044 6.2636C18.0529 5.91213 17.483 5.91213 17.1316 6.2636L12.668 10.7272L8.20437 6.2636Z"
                            fill="#262626"
                          />
                        </svg>
                      )}
                    </div>
                  </td>
                  <td>
                    <div class="check-box--features-table">
                      {feature.freePlan3 ? (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.715 4.98396C21.1103 5.2852 21.1867 5.84992 20.8854 6.24529L11.2854 18.8453C11.128 19.0519 10.8891 19.1804 10.6299 19.1978C10.3708 19.2153 10.1168 19.1199 9.93314 18.9362L4.53314 13.5362C4.18166 13.1848 4.18166 12.6149 4.53314 12.2635C4.88461 11.912 5.45446 11.912 5.80593 12.2635L10.4777 16.9353L19.4536 5.15441C19.7549 4.75904 20.3196 4.68273 20.715 4.98396Z"
                            fill="#262626"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.20437 6.2636C7.85289 5.91213 7.28304 5.91213 6.93157 6.2636C6.5801 6.61508 6.5801 7.18492 6.93157 7.5364L11.3952 12L6.93157 16.4636C6.5801 16.8151 6.5801 17.3849 6.93157 17.7364C7.28304 18.0879 7.85289 18.0879 8.20437 17.7364L12.668 13.2728L17.1316 17.7364C17.483 18.0879 18.0529 18.0879 18.4044 17.7364C18.7558 17.3849 18.7558 16.8151 18.4044 16.4636L13.9408 12L18.4044 7.5364C18.7558 7.18492 18.7558 6.61508 18.4044 6.2636C18.0529 5.91213 17.483 5.91213 17.1316 6.2636L12.668 10.7272L8.20437 6.2636Z"
                            fill="#262626"
                          />
                        </svg>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Section
        class="container-regular py-12 lg:py-24 2xl:py-36"
        data={faqComponent}
      >
        <div class="grid grid-cols-3 gap-12 items-start">
          <div class="col-span-2">
            <ul class="w-full rounded-lg border border-solid border-green85 bg-green95 divide-y divide-green85 p-14">
              {faqList.map((faq, i) => (
                <li
                  class={`flex  gap-12 py-7 ${openIndex.value === i ? " items-start" : " items-center"} `}
                  key={i}
                >
                  <div class="w-full space-y-5">
                    <h5
                      class="font-semibold text-xl text-grey15 cursor-pointer"
                      onClick$={() => toggleFaq(i)}
                    >
                      {faq.title}
                    </h5>
                    <p
                      class={` text-lg font-medium text-grey20 ${openIndex.value === i ? " block" : "hidden"} `}
                    >
                      {faq.description}
                    </p>
                  </div>
                  <button
                    class={`bg-darkGreen20 flex items-center justify-center min-w-12 min-h-12 max-w-12 max-h-12 rounded-md`}
                    onClick$={() => toggleFaq(i)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class={`${openIndex.value === i ? "rotate-45" : ""}`}
                    >
                      <path
                        d="M8.90078 1.6998C8.90078 1.20275 8.49784 0.799805 8.00078 0.799805C7.50372 0.799805 7.10078 1.20275 7.10078 1.6998V7.0998H1.70078C1.20372 7.0998 0.800781 7.50275 0.800781 7.9998C0.800781 8.49686 1.20372 8.8998 1.70078 8.89981L7.10078 8.89981V14.2998C7.10078 14.7969 7.50372 15.1998 8.00078 15.1998C8.49784 15.1998 8.90078 14.7969 8.90078 14.2998V8.89981H14.3008C14.7978 8.89981 15.2008 8.49686 15.2008 7.9998C15.2008 7.50275 14.7978 7.0998 14.3008 7.0998H8.90078V1.6998Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div class="w-full bg-green95 border border-solid border-green85 py-20 px-7 rounded-xl ">
            <div class="space-y-12 flex flex-col items-center text-center">
              <div>
                <Image src={Image1} width="164" height="164" alt="design" />
              </div>
              <div class="space-y-3.5">
                <h4 class="text-darkGreen20 font-semibold text-3xl">
                  Ask your question
                </h4>
                <p class="text-grey20 font-medium text-lg">
                  Feel Free to Ask questions on anytime
                </p>
              </div>
              <button class="font-semibold text-lg text-grey15 rounded-lg bg-green70 py-4 px-7">
                Ask A Question
              </button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
});
