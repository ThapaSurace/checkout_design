import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const cardNumber = "1234567812345678";

const OrderDetails = () => {
  const maskedCardNumber = cardNumber.replace(/\d(?=\d{4})/g, "*");
  return (
    <div className="space-y-10">
      {/* shipping details */}
      <div>
        <div className="flex justify-between items-center">
          <h1 className="mb-4 font-bold text-xl text-gray-800">
            Shipping Information
          </h1>
          <span className="text-sky-600 cursor-pointer hover:text-sky-700">
            Edit
          </span>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="text-gray-600 mb-2 font-medium">Shipping Address</h3>
            <ul className="text-gray-500 text-sm space-y-1 font-light tracking-wide">
              <li>Suresh Thapa</li>
              <li>Chapali</li>
              <li>44600,Kathmandu</li>
              <li>Nepal</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-600 mb-2 font-medium">Contact</h3>
            <ul className="text-gray-500 text-sm space-y-1 font-light tracking-wide">
              <li>abc@gmail.com</li>
              <li>98000000</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="my-6" />
      {/* payment details */}
      <div>
        <div className="flex justify-between items-center">
          <h1 className="mb-4 font-bold text-xl text-gray-800">
            Payment Information
          </h1>
          <span className="text-sky-600 cursor-pointer hover:text-sky-700">
            Edit
          </span>
        </div>
        <div className="text-gray-500 text-sm font-light space-y-2 tracking-wide">
          <p>
            <span className="font-medium">Cardholder Name:</span> Suresh Thapa
          </p>
          <p>
            <span className="font-medium">Card Number:</span> {maskedCardNumber}
          </p>
          <p>
            <span className="font-medium">Expiry Date:</span> 12/24
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="md:flex justify-end hidden">
        <Button>Place Order</Button>
      </div>
    </div>
  );
};
export default OrderDetails;
