import React,{ useState } from "react"

import PropTypes from "prop-types"

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [tournaments, setTournaments] = useState([])

  return (
    <AppContext.Provider value={{user, setUser, tournaments, setTournaments}}>
      {children}
    </AppContext.Provider>)
};
export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.element
}
