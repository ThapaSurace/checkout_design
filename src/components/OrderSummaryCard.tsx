import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";

const OrderSummaryCard = () => {
  return (
    <Card className="pt-4">
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className=" text-muted-foreground flex justify-between">
            <span>Subtotal</span>
            <span>$100</span>
          </div>
          <div className=" text-muted-foreground flex justify-between">
            <span>Shipping</span>
            <span>$0</span>
          </div>
          <div className=" text-muted-foreground flex justify-between">
            <span>Taxes</span>
            <span>$0</span>
          </div>
        </div>
        <Separator />
        <div className="text-gray-800 font-semibold flex justify-between">
          <span>Total</span>
          <span>$200</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Go To Checkout</Button>
      </CardFooter>
    </Card>
  );
};
export default OrderSummaryCard;
