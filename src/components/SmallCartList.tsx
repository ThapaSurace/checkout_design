import { cartItems } from "@/constants";
import { Separator } from "./ui/separator";

const SmallCartList = () => {
  return (
    <div>
      <div className="flex justify-between mb-3 text-gray-700 text-xl capitalize font-medium">
        <span>items</span>
        <span>total</span>
      </div>
      <Separator />
      <div className="space-y-6 mt-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-16 h-16 rounded-md"
                src={item.image}
                alt={item.name}
              />
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-gray-500 text-xs">${item.price}</div>
                <div className="text-gray-700 text-xs">
                  quantity: {item.quantity}
                </div>
              </div>
            </div>
            <div>
              <span>${item.quantity * item.price}</span>
              {/* <span className="text-sky-500">Edit</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SmallCartList;
