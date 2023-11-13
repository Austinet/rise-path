import logo from "../assets/images/Rise-Path.svg"

const Header = () => {
  return (
    <header>
        <nav className="py-[0.62rem] px-[1rem] shadow-lg">
            <div className="py-[1rem]">
                <img src={logo} alt="Rise Path logo" />
            </div>
        </nav>
    </header>
  )
}

export default Header