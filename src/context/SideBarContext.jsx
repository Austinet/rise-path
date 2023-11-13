import {createContext, useContext, useState} from 'react'
import PropTypes from "prop-types"
const MenuContext = createContext({})

const SideBarContext = ({children}) => {
 const [activeTab, setActiveTab] = useState("settings")
 const [mode, setMode] = useState("light")

  return (
    <MenuContext.Provider value={{activeTab, setActiveTab, mode, setMode}}>
        {children}
    </MenuContext.Provider>
  )
}

SideBarContext.propTypes = {
    children: PropTypes.element
}

export const MenuContextProvider = () => (useContext(MenuContext))

export default SideBarContext