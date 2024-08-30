import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ShippingForm = ({ onNext }: { onNext: () => void }) => {
  return (
    <form className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="fname">Full Name</Label>
          <Input type="text" id="fname" placeholder="John Doe" />
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input type="text" id="address" placeholder="chapali" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" placeholder="KTM" />
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="state">State</Label>
          <Input type="text" id="state" placeholder="Bagmati" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="zip">Zip Code</Label>
          <Input type="text" id="zip" placeholder="10001" />
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select>
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
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" id="phone" placeholder="980000000" />
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="example@example.com" />
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;
