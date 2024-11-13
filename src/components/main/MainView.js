import {Link} from "react-router-dom";
import {BtnIcons} from "../../assets/BtnIcons";
import MenuBtn from "./MenuBtn";
import styled from "styled-components";

function MainView({onChangeIsFirst,setQuickQuestion}) {
    return (
        <>
            <Wrapper>
                <ContentsBox>
                    <ServiceDescription>
                        <ServiceComment>
                            당신의 조달 등록을 도와드립니다.
                        </ServiceComment>
                        무엇을 찾고 계신가요?
                    </ServiceDescription>
                    <BtnBox>
                        <Link to={'/question'} style={{ textDecoration: "none"}}>
                            <BtnItem>
                                {BtnIcons.map((item) =>
                                    <MenuBtn
                                        icon={item.icon()}
                                        text={item.text}
                                        question={item.question}
                                        onChangeIsFirst={onChangeIsFirst}
                                        setQuickQuestion={setQuickQuestion}

                                    />
                                )}
                            </BtnItem>
                        </Link>

                    </BtnBox>
                </ContentsBox>
            </Wrapper>
        </>

    );
}

export default MainView;


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`

const ContentsBox = styled.div`
    @media (max-width:${({theme}) => theme.mobile} ) {
        margin: 100px 0;
    }
`

const ServiceDescription = styled.div`
    font-family: Inter;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding: 30px;
    color: ${({theme}) => theme.colors.logoFont};
    @media (max-width:${({theme}) => theme.mobile} ) {
        margin-bottom: 20px;
    }
`

const ServiceComment=styled.div`
    font-size: 17px;
    color: ${({theme}) => theme.colors.description};
    padding: 2px;
    font-weight: normal;
    
`

const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 80px;
    
`
const BtnItem =styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; 
    width: fit-content; 
`