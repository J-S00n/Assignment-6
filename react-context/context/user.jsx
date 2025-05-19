import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [choices, setChoices] = useState(Map({}));
    const [cart, setCart] = useState(Map({}));

    return (
        <StoreContext.Provider value={{ email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword, cart, setCart, choices, setChoices }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStoreContext = () => {
    return useContext(StoreContext);
}
