import { Link } from "react-router-dom"
import { LastOrderItem } from "./LastOrderItem"
import { Button } from "@/components/ui/button"

export const LastOrders = () => {
  return (
    <>
        <div className="w-full bg-card border border-border rounded-xl px-4 py-6">
            <div className="flex justify-between items-center">
              <span className="font-bold leading-none pl-2">Last Orders</span>
              <Link to={'/orders'}>
                <Button className="cursor-pointer" variant="outline">View Orders</Button>
              </Link>
            </div>
            <div className="w-full h-full border border-border rounded-xl mt-5">
                <div className="grid grid-cols-[repeat(6,1fr)_40px] border-b border-border bg-muted rounded-t-xl">
                  <ul className="grid grid-cols-subgrid col-span-full py-3 px-5 w-full border-b border-border last:border-transparent">
                    <li>Order</li>
                    <li>Date</li>
                    <li>Customer</li>
                    <li>Status</li>
                    <li>Total</li>
                    <li>Items</li>
                    <div></div>
                  </ul>
                </div>
                <div className="grid grid-cols-[repeat(6,1fr)_40px]">
                  <LastOrderItem />
                  <LastOrderItem />
                </div>
            </div>
        </div>
    </>
  )
}
