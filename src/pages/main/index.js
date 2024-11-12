import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView";
import {useState} from "react";

function MainPage() {
    const [isAcceptCookie, setIsAcceptCookie] = useState(false);
    const onChangeCookiePage= ()=>{
        setIsAcceptCookie(true)
    }


    return (
        <>
            {isAcceptCookie ?(
                <MainView/>
            ):(
                <CookieModal onChangeCookiePage={onChangeCookiePage}/>

            )
            }

        </>

    );
}

export default MainPage;
