import { Separator } from "./ui/separator";

const SubTotal = () => {
  return (
    <>
      <div className="space-y-2 md:space-y-4 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$100</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>$0</span>
        </div>
      </div>
      <Separator className="my-2 md:my-4" />
      <div className="text-gray-800 font-semibold flex justify-between">
        <span>Total</span>
        <span>$200</span>
      </div>
    </>
  );
};
export default SubTotal;
