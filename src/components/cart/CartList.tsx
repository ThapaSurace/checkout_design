import { cartItems } from "@/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Minus } from "lucide-react";
import { Button } from "../ui/button";

const CartList = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Item</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              <div className="flex flex-col items-start gap-1 sm:gap-2 sm:flex-row sm:items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 md:w-32 md:h-32 object-cover rounded-lg"
                />
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">${item.price}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <span>{item.quantity}</span>
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-right">
              ${item.price * item.quantity}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CartList;
