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

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("shipping");

  const handleNextStep = () => {
    if (currentStep === "shipping") {
      setCurrentStep("payment");
    } else if (currentStep === "payment") {
      setCurrentStep("review");
    }
  };

  return (
    <MaxWidthWrapper className="my-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Shipping</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Payment</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Review</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex gap-24">
        <div className="basis-[60%]">
          {currentStep == "shipping" && (
            <ShippingForm onNext={handleNextStep} />
          )}
          {currentStep == "payment" && <PaymentForm />}
          {currentStep == "review" && <OrderDetails />}
        </div>
        <div className="basis-[40%]">right</div>
      </div>
    </MaxWidthWrapper>
  );
};
export default Checkout;
