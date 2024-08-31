import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
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
import CartCard from "@/components/cart/CartCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

  const getBreadcrumbItemClass = (step: string) => {
    if (currentStep === step) {
      return "text-sky-500";
    }
    if (step === "shipping" && currentStep !== "shipping") {
      return "text-green-500";
    }
    if (step === "payment" && currentStep === "review") {
      return "text-green-500";
    }
    return "text-gray-400";
  };

  return (
    <MaxWidthWrapper className=" my-4 md:my-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem
            className={cn(
              "text-sm md:text-base",
              getBreadcrumbItemClass("shipping")
            )}
          >
            Shipping
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem
            className={cn(
              "text-sm md:text-base",
              getBreadcrumbItemClass("payment")
            )}
          >
            Payment
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem
            className={cn(
              "text-sm md:text-base",
              getBreadcrumbItemClass("review")
            )}
          >
            Review
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-24">
        <div className="basis-[60%]">
          {currentStep === "shipping" && (
            <ShippingForm onNext={handleNextStep} />
          )}
          {currentStep === "payment" && <PaymentForm onNext={handleNextStep} />}
          {currentStep === "review" && <OrderDetails />}
        </div>
        {/* <div className="hidden md:block min-h-[50vh] border border-gray-200"></div> */}
        <div className="basis-[40%] ">
          <h1 className="mb-4 font-bold text-xl text-gray-800">
            Order Summary
          </h1>
          <CartCard />
          <Separator className="my-4" />
          {/* sub total */}
          <div className="mt-6 space-y-3 font-medium text-gray-700">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>$1000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Taxes</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold border-t pt-4">
              <span>Total</span>
              <span>$1000</span>
            </div>
          </div>
          <Separator className="md:hidden my-4" />
          <div className="mt-4 flex justify-end md:hidden">
            <Button>Place Order</Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Checkout;
