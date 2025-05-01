import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cart, setCart] = useState(Map({}));

    return (
        <UserContext.Provider value={{ email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword, cart, setCart }}>
            {children}
        </UserContext.Provider>
    );
};

export const useStoreContext = () => {
    return useContext(UserContext);
}
