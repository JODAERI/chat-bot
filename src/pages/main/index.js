import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView"

function MainPage( { isCookieAccepted, onChangeCookies,onChangeIsFirst,setQuickQuestion }) {
    return (
        <>
            {isCookieAccepted ?(
                <MainView onChangeIsFirst={onChangeIsFirst} setQuickQuestion={setQuickQuestion}/>
            ):(
                <CookieModal onChangeCookiePage={onChangeCookies} />
            )
            }
        </>

    );
}

export default MainPage;
