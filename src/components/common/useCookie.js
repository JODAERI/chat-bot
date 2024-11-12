import React, { createContext, useContext, useState } from 'react';


const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);

    const onChangeCookies = () => setIsCookieAccepted(true);

    return (
        <CookieContext.Provider value={{ isCookieAccepted, onChangeCookies }}>
            {children}
        </CookieContext.Provider>
    );
};


export const useCookie = () => useContext(CookieContext);
