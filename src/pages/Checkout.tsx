import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OrderDetails from "@/components/OrderDetails";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { useState } from "react";
import SmallCartList from "@/components/SmallCartList";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CheckoutBreadcrumb from "@/components/CheckOutBreadCrum";
import SubTotal from "@/components/SubTotal";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const step = searchParams.get("step");
    if (step) {
      setCurrentStep(step);
    }
  }, [searchParams]);

  const handleNextStep = () => {
    if (currentStep === "shipping") {
      setCurrentStep("payment");
      navigate("?step=payment");
    } else if (currentStep === "payment") {
      setCurrentStep("review");
      navigate("?step=review");
    }
  };

  return (
    <MaxWidthWrapper className=" my-4 md:my-10">
      <CheckoutBreadcrumb currentStep={currentStep} />

      <div className="mt-4 md:mt-10 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-24">
        <div className="basis-[60%] order-2 md:order-1">
          {currentStep === "shipping" && (
            <ShippingForm onNext={handleNextStep} />
          )}
          {currentStep === "payment" && <PaymentForm onNext={handleNextStep} />}
          {currentStep === "review" && <OrderDetails />}
        </div>

        <div className="basis-[40%] order-1 md:order-2">
          <h1 className="mb-4 font-bold text-xl text-gray-800">
            Order Summary
          </h1>
          <SmallCartList />
          {/* sub total */}
          <div className="my-4">
            <SubTotal />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Checkout;
