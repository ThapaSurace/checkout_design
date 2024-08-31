import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OrderDetails from "@/components/OrderDetails";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("shipping");

  const handleNextStep = () => {
    if (currentStep === "shipping") {
      setCurrentStep("payment");
    } else if (currentStep === "payment") {
      setCurrentStep("review");
    }
  };

  const getBreadcrumbItemClass = (step: string) => {
    if (currentStep === step) {
      return "text-sky-500"; // Blue for the current step
    }
    if (step === "shipping" && currentStep !== "shipping") {
      return "text-green-500"; // Green for completed steps
    }
    if (step === "payment" && currentStep === "review") {
      return "text-green-500"; // Green for completed steps
    }
    return "text-gray-500"; // Default color for steps that are not yet completed
  };

  return (
    <MaxWidthWrapper className="my-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem
            className={cn("text-lg", getBreadcrumbItemClass("shipping"))}
          >
            Shipping
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem
            className={cn("text-lg", getBreadcrumbItemClass("payment"))}
          >
            Payment
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem
            className={cn("text-lg", getBreadcrumbItemClass("review"))}
          >
            Review
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10 flex gap-24">
        <div className="basis-[60%]">
          {currentStep === "shipping" && (
            <ShippingForm onNext={handleNextStep} />
          )}
          {currentStep === "payment" && <PaymentForm onNext={handleNextStep} />}
          {currentStep === "review" && <OrderDetails />}
        </div>
        <div className="basis-[40%]">right</div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Checkout;
