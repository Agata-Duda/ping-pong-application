import React,{ useState } from "react"

import PropTypes from "prop-types"

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    const data = (window.localStorage.getItem('UserLoggedIn'));
    if( data !== null) setUser(JSON.parse(data))
  }, []);

  useEffect(() => {
    window.localStorage.setItem('UserLoggedIn', JSON.stringify(user))
  }, [user]);

  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>)
};
export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.element
}
