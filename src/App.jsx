import { GiWorld } from "react-icons/gi";
import Navbar from "./components/Navbar";
import { ImHome } from "react-icons/im";
import Icon from "./components/Icon";
import { navLinks } from "./constant";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}

export default App
