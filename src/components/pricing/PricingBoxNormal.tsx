import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./pricing.css?inline";

interface PricingPlanData {
  title: string;
  description: string;
  price: string;
  text: string;
}

interface PricingBoxProps {
  data: PricingPlanData;
}

export default component$(({ data }: PricingBoxProps) => {
  useStyles$(styles);
  return (
    <div class="pricing--box">
      <div class="space-y-1">
        <h4 class="text-grey15 font-semibold text-3xl">{data.title}</h4>
        <h6 class="font-medium text-grey30 text-lg">{data.description}</h6>
      </div>
      <p class="text-lg text-grey15 font-medium">{data.text}</p>
      <div class="space-y-8">
        <h5 class="font-bold text-darkGreen25 text-5xl">{data.price}</h5>
        <button class="pricing--btn">Choose Plan</button>
      </div>
    </div>
  );
});
