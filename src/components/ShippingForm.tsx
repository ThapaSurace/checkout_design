import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { shippingFormValidationSchema } from "./utils/yup";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FormInput = {
  fname: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  zip: string;
  country: string;
  email: string;
};

const ShippingForm = ({ onNext }: { onNext: () => void }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(shippingFormValidationSchema),
  });
  const onSubmit = (values: FormInput) => {
    console.log(values);
    onNext();
  };
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold text-gray-800">
        Shipping Form
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="fname">Full Name</Label>
            <Input
              type="text"
              id="fname"
              placeholder="John Doe"
              className={errors.fname && "focus:border-red-600 border-red-600"}
              {...register("fname")}
            />
            <ErrorMessage error={errors.fname} />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Chapali"
              className={
                errors.address && "border-red-600 focus:border-red-600"
              }
              {...register("address")}
            />
            <ErrorMessage error={errors.address} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              placeholder="KTM"
              className={errors.city && "border-red-600 focus:border-red-600"}
              {...register("city")}
            />
            <ErrorMessage error={errors.city} />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              type="text"
              id="state"
              placeholder="Bagmati"
              className={errors.state && "border-red-600 focus:border-red-600"}
              {...register("state")}
            />
            <ErrorMessage error={errors.state} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="zip">Zip Code</Label>
            <Input
              type="text"
              id="zip"
              placeholder="10001"
              className={errors.zip && "border-red-600 focus:border-red-600"}
              {...register("zip")}
            />
            <ErrorMessage error={errors.zip} />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="country">Country</Label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  onValueChange={(value) => {
                    setValue("country", value, { shouldValidate: true });
                  }}
                  value={getValues("country")}
                >
                  <SelectTrigger
                    className={
                      errors.country && "border-red-600 focus:border-red-600"
                    }
                  >
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="np">Nepal</SelectItem>
                    <SelectItem value="ind">India</SelectItem>
                    <SelectItem value="cn">China</SelectItem>
                    <SelectItem value="us">USA</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            <ErrorMessage error={errors.country} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              placeholder="980000000"
              className={errors.phone && "border-red-600 focus:border-red-600"}
              {...register("phone")}
            />
            <ErrorMessage error={errors.phone} />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@example.com"
              {...register("email")}
              className={errors.email && "border-red-600 focus:border-red-600"}
            />
            <ErrorMessage error={errors.email} />
          </div>
        </div>
        <div className="flex gap-4 md:gap-16 justify-between items-center pt-6">
          <Button
            type="button"
            className="flex-1"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="h-6 w-6" />
            Back to Cart
          </Button>
          <Button type="submit" className="flex-1">
            <span>Go to Payment</span>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default ShippingForm;
