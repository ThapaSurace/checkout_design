const cardNumber = "1234567812345678";
const PaymentInfoCard = () => {
  const maskedCardNumber = cardNumber.replace(/\d(?=\d{4})/g, "*");
  return (
    <>
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
    </>
  );
};
export default PaymentInfoCard;
