import { Dots } from "@/assets/dots"
import { useEffect, useRef, useState } from "react";

export const LastOrderItem = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    },[])

  return (
    <>
        <ul className="grid grid-cols-subgrid col-span-full py-3 px-5 w-full border-b border-border last:border-transparent hover:bg-popover last:rounded-b-xl">
            <li>#01001</li>
            <li>22/05/2025</li>
            <li>Juan Carlos</li>
            <li>Delivered</li>
            <li>$5000</li>
            <li>5 items</li>
            <div className="relative" ref={menuRef}>
                <button className="hover:bg-accent p-2 rounded-md" onClick={() => setIsOpen(prev => !prev)}>
                    <Dots className="w-3.5 cursor-pointer" />
                </button>
                <div className="absolute right-0 top-8 bg-card border border-border rounded-md shadow-md flex flex-col transition-all duration-150 origin-top-right opacity-0" style={{scale: isOpen ? '1' : '0' , opacity: isOpen ? '1' : undefined , zIndex: isOpen ? '100' : undefined}}>
                    <li className="cursor-pointer select-none whitespace-nowrap text-sm w-full pl-3 pr-10 py-2 hover:bg-popover rounded-t-sm transition-all duration-300">Copy ID</li>
                    <li className="cursor-pointer select-none whitespace-nowrap text-sm w-full pl-3 pr-10 py-2 hover:bg-popover transition-all duration-300">View Order</li>
                    <li className="cursor-pointer select-none whitespace-nowrap text-sm w-full pl-3 pr-10 py-2 text-destructive hover:bg-destructive/10 hover:border-destructive border border-transparent rounded-b-md transition-all duration-300">Delete</li>
                </div>
            </div>
        </ul>
    </>
  )
}
