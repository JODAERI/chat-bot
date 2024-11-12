import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';


const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);

    const onChangeCookies = () => setIsCookieAccepted(true);
    const setCookie = ()=>{
        // 현재 저장된 user_id 쿠키 값 가져오기
        let currentUserId = Cookies.get('user_id');

        // 쿠키가 존재하지 않으면 초기값으로 1을 저장하고, 존재하면 1 증가시킴
        const newUserId = currentUserId ? parseInt(currentUserId) + 1 : 1;

        console.log('setCookie 실행중 ')

        // 새로운 user_id 값을 쿠키에 저장
        Cookies.set('user_id', newUserId, { expires: 7 });

        console.log('새로운 user_id:', newUserId);
    }


    return (
        <CookieContext.Provider value={{ isCookieAccepted, onChangeCookies, setCookie }}>
            {children}
        </CookieContext.Provider>
    );
};


export const useCookie = () => useContext(CookieContext);
