"use client";
import { ArrowLeftCircleIcon } from "lucide-react";
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

const pricingPlans = [
  {
    tokens: 30,
    price: 29.95,
    features: [
      "Create 100 designs",
      "Generate HD quality images",
      "Download your design",
    ],
  },
  {
    tokens: 250,
    price: 84.0,
    features: [
      "Create 100 designs",
      "Generate HD quality images",
      "Download your design",
    ],
  },
  {
    tokens: 400,
    price: 99.0,
    features: [
      "Create 100 designs",
      "Generate HD quality images",
      "Download your design",
    ],
  },
];

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
    <div className="flex flex-col items-center gap-14 pt-10 pb-0 px-0 relative bg-white">
      <Button
        onClick={() => router.back()}
        variant="ghost"
        className="absolute top-[47px] left-[234px] z-[4]"
      >
        <ArrowLeftCircleIcon className="w-6 h-6" />
      </Button>

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

      <div className="flex items-start gap-4 z-[2]">
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
              <Button className="w-full bg-collection-1-primary hover:bg-collection-1-primary/90">
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
