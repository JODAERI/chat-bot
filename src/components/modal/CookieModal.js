import styled from "styled-components";
import ReactMarkdown from "react-markdown";

function CookieModal() {
    const cookieInformation = '본 AI 챗봇 서비스는 이전 **대화를 기억**하여 보다 편리한 사용자 경험을 제공하기 위해 쿠키를 사용합니다. 로그인 없이도 대화가 유지되도록 하기 위해 쿠키를 저장하며, 이를 통해 사용자는 이전 대화를 이어갈 수 있습니다.\n' +
        '\n' +
        '쿠키 사용을 거부하실 경우, 기존 대화를 기억하지 못해 **매번 새로운 대화를 시작**해야 할 수 있습니다. 쿠키 사용에 대한 자세한 정보는 개인정보 처리방침에서 확인하실 수 있습니다.'

    return (
        <>
            <Wrapper>
                <ContentsBox>
                    <TextBox>
                        <h1>대화를 시작하기 전에</h1>
                        <ReactMarkdown>
                            {cookieInformation}
                        </ReactMarkdown>
                    </TextBox>

                    <AcceptBtn><p>모든 쿠키 허용</p></AcceptBtn>
                    <SettingBtn><p>쿠키 설정</p></SettingBtn>
                </ContentsBox>
            </Wrapper>
        </>

    );
}

export default CookieModal;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    @media (max-width:${({theme}) => theme.mobile} ) {
        padding-top: 40px;
    }
    
`
const ContentsBox = styled.div`
    background: ${({theme}) => theme.backgroundColor.cookieBack};
    width: 80%;
    height: 80%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;

`

const TextBox = styled.div`
    text-align: left;
    font-family: Inter;
    padding: 15px 20px;
    h1{

        font-size:30px;
        font-weight: bold;
        color: ${({theme})=>theme.colors.logoFont};
        margin-bottom: 20px;
    }
    p{
        white-space: pre-line;
        margin-bottom: 20px;
        font-size: 17px;
        color: ${({theme})=>theme.colors.description};
    }
`

const AcceptBtn = styled.div`
    background: ${({theme}) => theme.backgroundColor.cookieAccept};
    width: 95%;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto ;
    border-radius: 10px;
    p{
        color: ${({theme})=>theme.colors.hoverFont};
        font-size: 15px;
        font-weight: bold;
    }
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 328px;
    }
`

const SettingBtn = styled.div`
    background: ${({theme}) => theme.backgroundColor.btnBack};
    width: 95%;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto ;
    border-radius: 10px;
    border: solid 1px ${({theme})=>theme.borderColor.btnBorder};;
    p{
        color: ${({theme})=>theme.colors.btnFont};
        font-size: 15px;
        font-weight: bold;
    }
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 328px;
    }
`