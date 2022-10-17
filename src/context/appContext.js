import React  from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const context = {
        username : " JohnDoe123 "
    };

    return (
        <AppContext.Provider value={context}>                    {children}
        </AppContext.Provider>    );
};
export default AppProvider;