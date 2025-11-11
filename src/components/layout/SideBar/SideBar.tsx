import { useState } from "react"
import { Link } from "react-router-dom";
import { SVGLogo } from "../../../assets/logo";
import { Dashboard } from "../../../assets/dashboard";
import { Settings } from "../../../assets/settings";
import { Products } from "../../../assets/products";
import { Orders } from "../../../assets/orders";
import { Clients } from "../../../assets/clients";
import { Arrow } from "../../../assets/arrow";

export const SideBar = () => {

    const [isOpen,setIsOpen] = useState(false)

  return (
    <>
        <aside className="p-3 transition-all duration-300 max-w-[270px]" style={{width: isOpen ? '15vw' : '6.5rem'}}>
            <div className="h-full">
                <div className="relative flex flex-col bg-card h-full rounded-[7px] shadow-[--soft-shadow] transition-all duration-300" style={{width: isOpen ? '100%' : '5rem'}} >
                    <div className="w-9 h-9 bg-background absolute -right-4.5 top-18 rounded-full flex items-center justify-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <span className="transition-all duration-400 ease-in-out" style={{rotate: isOpen ? '180deg':'0deg'}}><Arrow className="w-6" /></span>
                        <div className="w-2 h-2 bg-background absolute bottom-[-20%] right-[50%]"><div className="w-full h-full bg-card rounded-tr-full"></div></div>
                        <div className="w-2 h-2 bg-background absolute top-[-20%] right-[50%]"><div className="w-full h-full bg-card rounded-br-full"></div></div>
                    </div>
                    <div className="pl-6 pt-5 flex items-center gap-5 font-bold">
                        <SVGLogo className="w-8 shrink-0" />
                        <span className="whitespace-nowrap transition-all duration-200 select-none" style={{opacity: isOpen ? '1':'0' }}>MY STORE</span>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <ul className="px-2 pt-16 flex flex-col gap-4">
                            <li className="flex items-center rounded-[10px] cursor-pointer hover:bg-popover transition-all duration-200 px-5 py-2"><Link to={''}><Dashboard className="w-7" /></Link><span className="pl-5 whitespace-nowrap transition-all duration-200" style={{opacity: isOpen ? '1':'0' }}>Home</span></li>
                            <li className="flex items-center rounded-[10px] cursor-pointer hover:bg-popover transition-all duration-200 px-5 py-2"><Link to={''}><Orders className="w-6" /></Link><span className="pl-5 whitespace-nowrap transition-all duration-200" style={{opacity: isOpen ? '1':'0' }}>Orders</span></li>
                            <li className="flex items-center rounded-[10px] cursor-pointer hover:bg-popover transition-all duration-200 px-5 py-2"><Link to={''}><Products className="w-6" /></Link><span className="pl-5 whitespace-nowrap transition-all duration-200" style={{opacity: isOpen ? '1':'0' }}>Products</span></li>
                            <li className="flex items-center rounded-[10px] cursor-pointer hover:bg-popover transition-all duration-200 px-5 py-2"><Link to={''}><Clients className="w-6" /></Link><span className="pl-5 whitespace-nowrap transition-all duration-200" style={{opacity: isOpen ? '1':'0' }}>Customers</span></li>
                        </ul>
                        <ul className="px-2 pb-5">
                            <li className="flex items-center rounded-[10px] cursor-pointer hover:bg-popover transition-all duration-200 px-4 py-2"><div className="w-8 h-8"><img className="border border-border min-w-8 min-h-8 rounded-full" src="/media/images/avatar.jpg" alt="profile" /></div><span className="pl-5 whitespace-nowrap transition-all duration-200" style={{opacity: isOpen ? '1':'0' }}>My Account</span></li>
                            <li className="flex items-center rounded-[10px] cursor-pointer hover:bg-popover transition-all duration-200 px-5 py-2"><Link to={''}><Settings className="w-6" /></Link><span className="pl-5 whitespace-nowrap transition-all duration-200" style={{opacity: isOpen ? '1':'0' }}>Settings</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}
