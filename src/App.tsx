import { Outlet } from "react-router"
import { SideBar } from "./components/layout/SideBar/SideBar"

function App() {

  return (
    <>
      <div className="w-screen h-screen p-2">
        <div className="grid grid-cols-[auto_1fr] w-full h-full rounded-[15px] border border-border ">
          <SideBar />
          <div className="w-full h-full py-2 overflow-y-scroll">
            <div className="w-full h-full mx-auto max-w-[1440px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App