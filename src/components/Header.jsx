import logo from "../assets/images/Rise-Path.svg";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MenuContextProvider } from "../context/SideBarContext";


const Header = () => {
  const {toggleNav, setToggleNav} = MenuContextProvider()


  return (
    <header>
      <nav className="py-[0.62rem] shadow-md">
      <div className="flex items-center gap-[1rem] py-[0.75rem] px-[1rem] w-full max-w-[16rem] md:text-center">
        <div>
          {
            toggleNav ? <AiOutlineClose
            className="text-xl cursor-pointer md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          /> :
           <FaBars
            className="text-xl cursor-pointer md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          />
          }
        </div>

        
          <img src={logo} alt="Rise Path logo" className="inline-block" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
