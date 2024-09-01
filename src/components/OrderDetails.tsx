import PaymentInfoCard from "./PaymentInfoCard";
import ShippingInfoCard from "./ShippingInfoCard";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const OrderDetails = () => {
  return (
    <div className="space-y-10">
      <div>
        <ShippingInfoCard />
      </div>
      <Separator className="my-6" />
      <div>
        <PaymentInfoCard />
      </div>
      <Separator className="my-6" />
      <div className="w-full md:flex justify-end">
        <Button className="w-full md:w-fit">Place Order</Button>
      </div>
    </div>
  );
};
export default OrderDetails;
