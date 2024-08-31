import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface CheckoutBreadcrumbProps {
  currentStep: string;
}

const CheckoutBreadcrumb = ({ currentStep }: CheckoutBreadcrumbProps) => {
  const getBreadcrumbItemClass = (step: string) => {
    if (currentStep === step) {
      return "text-gray-600 font-medium";
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
    <Breadcrumb className="border-b w-full pb-3">
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
  );
};

export default CheckoutBreadcrumb;
