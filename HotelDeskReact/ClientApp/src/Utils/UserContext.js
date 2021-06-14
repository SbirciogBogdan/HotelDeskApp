import React, { useContext } from "react";

const UserContext = React.createContext();


export const useGlobalUser = () => {
    return useContext(UserContext);
};

export { UserContext };