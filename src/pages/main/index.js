import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView"

function MainPage( { isCookieAccepted, onChangeCookies, setCookie,  isFirst,onChangeIsFirst }) {
    return (
        <>
            {isCookieAccepted ?(
                <MainView isFirst={isFirst} onChangeIsFirst={onChangeIsFirst} />
            ):(
                <CookieModal onChangeCookiePage={onChangeCookies} setCookie={setCookie}/>
            )
            }
        </>

    );
}

export default MainPage;
