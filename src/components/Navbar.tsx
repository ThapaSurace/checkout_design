import { ShoppingBag } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="py-4 border-b px-4">
      <MaxWidthWrapper>
        <div className="relative flex justify-between items-center">
          <Input type="text" className="w-[300px]" placeholder="search..." />
          <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-2xl text-slate-900">
            Store
          </div>
          <div className="flex items-center text-gray-600">
            <ShoppingBag size={20} />
            <span className="text-lg">(2)</span>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Navbar;
