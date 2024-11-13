import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView"

function MainPage( { isCookieAccepted, onChangeCookies,setQuickQuestion }) {
    return (
        <>
            {isCookieAccepted ?(
                <MainView setQuickQuestion={setQuickQuestion}/>
            ):(
                <CookieModal onChangeCookiePage={onChangeCookies} />
            )
            }
        </>

    );
}

export default MainPage;
