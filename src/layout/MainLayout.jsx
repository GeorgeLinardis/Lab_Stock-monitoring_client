import { Outlet } from "react-router-dom";

import Navbar from './Navbar.jsx';

const MainLayout = () => {
  return (
    <section className="main-layout min-vh-100 bg-dark text-light">
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </section>
)
}

export default MainLayout
