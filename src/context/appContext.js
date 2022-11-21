import React from "react"
import PropTypes from "prop-types"
import { useState } from "react";

export const AppContext = React.createContext()
//PJ working on login auth in another branch - using app context to display username of user logged in 
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});


  return (
    <AppContext.Provider value={[user, setUser]}>
      {children}
    </AppContext.Provider>)
};
export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.element
}
