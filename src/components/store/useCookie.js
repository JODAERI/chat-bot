import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [quickQuestion, setQuickQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeCookies = () => setIsCookieAccepted(true);

  const onChangeLoading = (loadingState) => {
    setIsLoading(loadingState);
  };

  function formatDate(isoString) {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // 12시간 형식으로 변경
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    return `${formattedHours}.${minutes} ${ampm}, ${day} ${month}`;
  }

  return (
    <CookieContext.Provider
      value={{
        isCookieAccepted,
        onChangeCookies,
        quickQuestion,
        setQuickQuestion,
        isLoading,
        onChangeLoading,
        formatDate,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = () => useContext(CookieContext);
