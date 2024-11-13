import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';


const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);
    const [isFirst, setIsFirst] = useState(false);
    const [isSecond, setIsSecond] = useState(false);
    const [quickQuestion, setQuickQuestion]= useState([])
    const [isLoading, setIsLoading] = useState(false);


    const onChangeCookies = () => setIsCookieAccepted(true);
    const onChangeIsFirst=()=> setIsFirst(true);
    const onChangeIsSecond =()=>{
        setIsFirst(false);
        setIsSecond(true);
    }

    const onChangeLoading=(loadingState)=>{
        setIsLoading(loadingState)
    }

    function formatDate(isoString) {
        const date = new Date(isoString);

        // 시간 포맷팅
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // 12시간 형식으로 변경

        // 날짜 포맷팅
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });

        return `${formattedHours}.${minutes} ${ampm}, ${day} ${month}`;
    }


    return (
        <CookieContext.Provider
            value={{
            isCookieAccepted,
            onChangeCookies,
                isFirst,
                onChangeIsFirst ,
                quickQuestion,
                setQuickQuestion,
                onChangeIsSecond,
                isLoading,
                onChangeLoading,
                formatDate
        }}>
            {children}
        </CookieContext.Provider>
    );
};


export const useCookie = () => useContext(CookieContext);
