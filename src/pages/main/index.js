import CookieModal from "../../components/modal/CookieModal";
import MainView from "../../components/main/MainView";

function MainPage({
  isCookieAccepted,
  onChangeCookies,
  setQuickQuestion,
  isLoading,
}) {
  return (
    <>
      {isCookieAccepted ? (
        <MainView setQuickQuestion={setQuickQuestion} isLoadin={isLoading} />
      ) : (
        <CookieModal onChangeCookiePage={onChangeCookies} />
      )}
    </>
  );
}

export default MainPage;
