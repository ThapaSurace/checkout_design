import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import SubTotal from "./SubTotal";

const OrderSummaryCard = () => {
  return (
    <Card className="pt-4">
      <CardContent className="space-y-6">
        <SubTotal />
      </CardContent>

      <CardFooter>
        <Link to="/checkout?step=shipping" className="w-full">
          <Button className="w-full">Go To Checkout</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default OrderSummaryCard;
