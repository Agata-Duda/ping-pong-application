import React from "react"
import PropTypes from "prop-types"

export const AppContext = React.createContext()
//PJ working on login auth in another branch - using app context to display username of user logged in 
const AppProvider = ({ children }) => {
  const context = {
    "username": " JohnDoe123 "
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>)
}
export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.element
}
