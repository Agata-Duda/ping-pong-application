import React,{ useEffect, useState } from "react"

import PropTypes from "prop-types"

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    const userData = (window.localStorage.getItem('UserLoggedIn'));
    if( userData !== null) setUser(JSON.parse(userData))

  }, []);

  useEffect(() => {
    window.localStorage.setItem('UserLoggedIn', JSON.stringify(user))
  }, [user]);

  return (
    <AppContext.Provider value={{
      user, 
      setUser,
      tournaments,
      setTournaments
      }}
    >
      {children}
    </AppContext.Provider>)
};
export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.element
}
