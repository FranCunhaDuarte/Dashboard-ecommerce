import { Outlet } from "react-router"
import { SideBar } from "../components/layout/SideBar/SideBar"


export const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen p-2">
        <div className="grid grid-cols-[auto_1fr] w-full h-full rounded-[15px] border border-border ">
          <SideBar />
          <div className="w-full h-full overflow-hidden">
            <div className="h-full w-full overflow-y-scroll scroll-reset">
              <div className="w-full h-full mx-auto max-w-[1300px]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
