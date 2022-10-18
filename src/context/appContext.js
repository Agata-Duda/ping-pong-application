import React from "react"
import PropTypes from "prop-types"

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const context = {
    "username": " JohnDoe123 "
  }

  return (
    <AppContext.Provider value={context}>                    {children}
    </AppContext.Provider>)
}
export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.element
}
