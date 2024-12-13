"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { pricingPlans } from "@/app/pricing-plans";
import { useParams } from "next/navigation";
import { ONE_GENERATION_COST } from "@/app/consts";

const Payment = () => {
  const params = useParams();

  const planId = params.plan as string;

  const selectedPlan = pricingPlans.find(
    (plan) => String(plan.id) === String(planId),
  );

  if (!selectedPlan) {
    return (
      <div className="flex flex-col items-center gap-8 py-10 bg-white">
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">
                Plan not found
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  const productData = {
    title: `${selectedPlan.tokens / ONE_GENERATION_COST} AI Image Generation credit`,
    name: `${selectedPlan.tokens / ONE_GENERATION_COST} AI Image Generation credit (${selectedPlan.tokens} tokens)`,
    price: `$${selectedPlan.price}.00`,
    paymentType: "One time payment - no recurring charge",
  };

  return (
    <div className="flex flex-col items-center gap-8 py-10 bg-white">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">
              {productData.title}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-base text-center">
              Product details
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="text-sm">
              <span className="font-semibold">Name:</span>
              <span className="text-muted-foreground"> {productData.name}</span>
            </div>
            <div className="text-sm font-semibold">
              Price: {productData.price}
            </div>
            <div className="text-xs text-muted-foreground">
              ({productData.paymentType})
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Box for CC Payment
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button className="w-full bg-collection-1-primary hover:bg-collection-1-primary/90 text-white">
              Pay
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              One time purchase
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
