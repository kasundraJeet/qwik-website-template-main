import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./pricing.css?inline";

interface PricingPlan {
  name: string;
  discount: string;
  price: string;
  features: string[];
  note?: string;
}

export default component$((props: { plan: PricingPlan }) => {
  useStyles$(styles);
  const { plan } = props;
  return (
    <div class="pricing--box">
      <div class="space-y-1">
        <h4 class="text-grey15 font-semibold text-3xl">{plan.name}</h4>
        <h6 class="font-medium text-grey30 text-lg">{plan.discount}</h6>
      </div>
      <div class="space-y-5">
        <div class="w-full bg-green90 border border-solid border-green85 divide-y divide-green85 rounded-lg">
          {plan.features.map((feature, index) => (
            <div key={index} class="py-5 px-6 w-full">
              <p class="font-medium text-lg text-grey20">{feature}</p>
            </div>
          ))}
        </div>
        {plan.note && (
          <div class="w-full bg-darkGreen20 rounded-lg py-5 px-6">
            <p class="text-lg text-white">{plan.note}</p>
          </div>
        )}
      </div>
      <div class="space-y-8">
        <h5 class="font-bold text-darkGreen25 text-5xl">{plan.price}/month</h5>
        <button class="pricing--btn">Choose Plan</button>
      </div>
    </div>
  );
});
