import CartList from "@/components/CartList";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OrderSummaryCard from "@/components/OrderSummaryCard";

const Cart = () => {
  return (
    <MaxWidthWrapper className=" space-y-6  md:flex md:gap-16 my-16">
      <div className="basis-[70%]">
        <h1 className=" text-2xl font-semibold tracking-tight mb-6 text-secondary-foreground">
          Cart Items
        </h1>
        <CartList />
      </div>
      <div className="basis-[30%]">
        <h1 className=" text-2xl font-semibold tracking-tight mb-6 text-secondary-foreground">
          Order Summary
        </h1>
        <OrderSummaryCard />
      </div>
    </MaxWidthWrapper>
  );
};
export default Cart;
