import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(shippingFormValidationSchema),
  });
  const onSubmit = (values: FormInput) => {
    console.log(values);
    onNext();
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="fname">Full Name</Label>
          <Input
            type="text"
            id="fname"
            placeholder="John Doe"
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
            {...register("address")}
          />
          <ErrorMessage error={errors.address} />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            id="city"
            placeholder="KTM"
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
            {...register("state")}
          />
          <ErrorMessage error={errors.state} />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="zip">Zip Code</Label>
          <Input
            type="text"
            id="zip"
            placeholder="10001"
            {...register("zip")}
          />
          <ErrorMessage error={errors.zip} />
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            {...register("country")}
            onValueChange={(value) => setValue("country", value)} // Manually set the value
            value={getValues("country")} // Bind the value to the current form state
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="np">Nepal</SelectItem>
              <SelectItem value="ind">India</SelectItem>
              <SelectItem value="cn">China</SelectItem>
              <SelectItem value="us">USA</SelectItem>
            </SelectContent>
          </Select>

          <ErrorMessage error={errors.country} />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="text"
            id="phone"
            placeholder="980000000"
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
          />
          <ErrorMessage error={errors.email} />
        </div>
      </div>
      <Button type="submit">Proceed to Payment</Button>
    </form>
  );
};

export default ShippingForm;
