import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentFormValidationSchema } from "./utils/yup";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";
import { useToast } from "@/hooks/use-toast";

type FormValues = Yup.InferType<typeof paymentFormValidationSchema>;

const PaymentForm = ({ onNext }: { onNext: () => void }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(paymentFormValidationSchema),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    toast({ description: "Payment from submitted sucessfully!!" });
    onNext();
  };
  return (
    <div>
      <h1 className="mb-6 text-xl md:2xl font-semibold text-gray-800">
        Payment Info
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="username">Name</Label>
          <Input
            type="text"
            id="username"
            placeholder="john Doe"
            className={errors.name && "focus:border-red-600 border-red-600"}
            {...register("name")}
          />
          <ErrorMessage error={errors.name} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="cardnum">Card Number</Label>
          <Input
            type="text"
            id="cardnum"
            placeholder="xxxxxxxxxxxxxxxx"
            className={errors.cardnum && "border-red-600 focus:border-red-600"}
            {...register("cardnum")}
          />
          <ErrorMessage error={errors.cardnum} />
        </div>
        <div className="flex gap-4">
          <div className="space-y-1 flex-1">
            <Label htmlFor="expirationdate">Expiration Date</Label>
            <Input
              type="text"
              id="expirationdate"
              placeholder="MM/YY"
              className={
                errors.expirationdate && "border-red-600 focus:border-red-600"
              }
              {...register("expirationdate")}
            />
            <ErrorMessage error={errors.expirationdate} />
          </div>
          <div className="space-y-1 flex-1">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              type="text"
              id="cvv"
              placeholder="xxxx"
              className={errors.cvv && "border-red-600 focus:border-red-600"}
              {...register("cvv")}
            />
            <ErrorMessage error={errors.cvv} />
          </div>
        </div>
        <div className="flex gap-8 md:gap-16 justify-between items-center pt-6">
          <Button
            type="button"
            className="flex-1"
            onClick={() => navigate("?step=shipping")}
          >
            <ChevronLeft className="h-6 w-6" />
            Back to Shipping
          </Button>
          <Button type="submit" className="flex-1">
            Review Order
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </form>
    </div>
  );
};
export default PaymentForm;
