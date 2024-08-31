const ShippingInfoCard = () => {
  return (
    <>
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
    </>
  );
};
export default ShippingInfoCard;
