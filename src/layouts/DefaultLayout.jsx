import { useState } from "react"
import WebRoutes from "../routes/WebRoutes"
import Header from "./Header"
import Sidebar from "./Sidebar"

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSideBar = () => {
      setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <div className="app-container">
        <Header toggleSideBar={toggleSideBar} open={sidebarOpen} />
        <Sidebar open={sidebarOpen} />
        <main className="main p-4 sm:ml-64 mt-14">
          <WebRoutes />
        </main>
      </div>
    </>
  )
}

export default DefaultLayout