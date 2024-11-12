import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView"

function MainPage( { isCookieAccepted, onChangeCookies, setCookie }) {
    return (
        <>
            {isCookieAccepted ?(
                <MainView/>
            ):(
                <CookieModal onChangeCookiePage={onChangeCookies} setCookie={setCookie}/>
            )
            }
        </>

    );
}

export default MainPage;
