import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';


const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);
    const [isFirst, setIsFirst] = useState(false);

    const onChangeCookies = () => setIsCookieAccepted(true);
    const setCookie = ()=>{
        let currentUserId = Cookies.get('user_id');
        const newUserId = currentUserId ? parseInt(currentUserId) + 1 : 1;
        Cookies.set('user_id', newUserId, { expires: 7 });
        console.log('새로운 user_id:', newUserId);
    }
    const onChangeIsFirst=()=> setIsFirst(true);


    return (
        <CookieContext.Provider value={{ isCookieAccepted, onChangeCookies, setCookie, isFirst,onChangeIsFirst }}>
            {children}
        </CookieContext.Provider>
    );
};


export const useCookie = () => useContext(CookieContext);
