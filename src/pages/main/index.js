import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView"
import {useCookie} from "../../components/common/useCookie";

function MainPage() {
    const { isCookieAccepted, onChangeCookies } = useCookie();


    return (
        <>
            {isCookieAccepted ?(
                <MainView/>
            ):(
                <CookieModal onChangeCookiePage={onChangeCookies}/>
            )
            }

        </>

    );
}

export default MainPage;
