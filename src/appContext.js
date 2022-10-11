import React  from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const context = {
        username : "Agata-Duda"
    };

    return (
        <AppContext.Provider value={context}>                    {children}
        </AppContext.Provider>    );
};
export default AppProvider;