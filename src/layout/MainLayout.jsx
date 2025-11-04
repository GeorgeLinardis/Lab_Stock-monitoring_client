import { Outlet } from "react-router-dom";

import Navbar from './Navbar.jsx';

const MainLayout = () => {
  return (
    <section className="main-layout">
      <Outlet/>
    </section>
  )
}

export default MainLayout
