
'use client';

import { createContext, useContext, useState } from "react";

const BarContext = createContext({})

export const BarContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </BarContext.Provider>
    )
};

export const useBarContext = () => useContext(BarContext);