import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {
  ShoppingBagIcon,
  CreditCardIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits: Array<Object> = [
  {
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    title: "Exclusive Discounts",
    description:
      "Enjoy 15% off every purchase as a member. Get special members-only sales and offers year-round.",
  },
  {
    icon: <CreditCardIcon className="h-6 w-6" />,
    title: "Loyalty Rewards",
    description:
      "Earn Sprout Points for every dollar spent. Redeem points for discounts, exclusive products, and more!",
  },
  {
    icon: <BuildingStorefrontIcon className="h-6 w-6" />,
    title: "Plant Care Workshops",
    description:
      "Attend free monthly workshops to learn about plant care, propagation, and creative plant displays.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A PLANT SHOP.</HText>
          <p className="my-5 text-sm">
            Grow with Us! Discover the Benefits of Being a Little Sprouts Member
          </p>
        </div>

        {/*BENEFITS*/}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit) => (
            <Benefit />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
