"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { useRouter } from "next/navigation";
import { pricingPlans } from "@/app/pricing-plans";

const faqItems = [
  {
    question: "How many designs can I generate?",
    answer:
      "You can generate as many designs as your token balance allows. Each design costs one token, and you can purchase additional tokens whenever you need them.",
  },
  {
    question: "Can I use the designs commercially?",
    answer:
      "Yes, all designs generated through our platform come with full commercial usage rights. You own the designs you create and can use them for any business or personal purpose.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "When your credits run out, you can simply purchase more tokens from your dashboard. There's no waiting period or limit - buy what you need, when you need it.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Our platform operates on a pay-as-you-go model with one-time purchases rather than a subscription. You buy tokens when you need them, with no recurring charges or commitments.",
  },
  {
    question: "How realistic are the designs?",
    answer:
      "Our AI generates highly detailed, professional-quality designs that provide a realistic representation of how the final product would look. The designs are detailed enough to serve as clear references for production or visualization purposes.",
  },
];

const Pricing = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-14 pt-10 pb-10 px-0 relative bg-white">
      <Button
        onClick={() => router.push("/designer")}
        size="sm"
        className="absolute top-[47px] left-[234px] z-[4]"
        icon={
          <svg
            className="!w-4 !h-4"
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-1.90735e-06 6.00005C0.00486469 6.52616 0.216843 7.02915 0.589998 7.40005L4.88 11.7001C5.06736 11.8863 5.32081 11.9908 5.585 11.9908C5.84918 11.9908 6.10264 11.8863 6.29 11.7001C6.38373 11.6071 6.45812 11.4965 6.50889 11.3746C6.55966 11.2528 6.5858 11.1221 6.5858 10.9901C6.5858 10.858 6.55966 10.7273 6.50889 10.6055C6.45812 10.4836 6.38373 10.373 6.29 10.2801L3 7.00005L13 7.00005C13.2652 7.00005 13.5196 6.89469 13.7071 6.70716C13.8946 6.51962 14 6.26527 14 6.00005C14 5.73484 13.8946 5.48048 13.7071 5.29295C13.5196 5.10541 13.2652 5.00005 13 5.00005L3 5.00005L6.29 1.71005C6.4783 1.52307 6.58462 1.26895 6.58556 1.00359C6.58649 0.738224 6.48198 0.483356 6.295 0.295052C6.10802 0.106748 5.8539 0.000432014 5.58853 -0.000505447C5.32317 -0.00144291 5.0683 0.103075 4.88 0.290052L0.589998 4.59005C0.214411 4.9634 0.00223064 5.47048 -1.90735e-06 6.00005Z"
              fill="white"
            />
          </svg>
        }
      ></Button>

      <div className="flex flex-col items-center gap-4 z-[3]">
        <Logo />
        <h1 className="font-semibold text-2xl text-center">
          Create Custom Lingerie Designs in Seconds
        </h1>
        <p className="text-collection-1-lighttext text-xl text-center">
          Skip the design school. Skip the sketching.
          <br />
          Just pick your style and watch AI bring your vision to life.
        </p>
      </div>

      <div className="flex items-start gap-4 z-[2] flex-wrap justify-around">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="w-[300px]">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">{plan.tokens} tokens</h3>
                <span className="text-xl text-collection-1-primary">
                  ${plan.price}
                </span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-collection-1-lighttext">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                onClick={() => router.push(`/checkout/${plan.id}`)}
                className="w-full bg-collection-1-primary hover:bg-collection-1-primary/90"
              >
                Purchase
              </Button>
              <p className="text-sm text-collection-1-lighttext">
                One time purchase
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col max-w-[800px] items-center gap-4 w-full z-[1]">
        <h2 className="font-semibold text-2xl text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Pricing;
