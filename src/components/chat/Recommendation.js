import styled from "styled-components";

function Recommendation({question}) {
    return (
        <Wrapper>
            <QuestionBox>
                <p>{question}</p>
            </QuestionBox>
        </Wrapper>

    );
}

export default Recommendation;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`

const QuestionBox = styled.div`
    border-radius: 10px;
    border: solid 1px ${({theme})=>theme.borderColor.inputBorder};
    height: 57px;
    background:  ${({theme})=>theme.backgroundColor.inputBack};
    width: 80%;
    display: flex;
    text-align: center;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 390px;
    }
    p{
        margin: auto 0 ;
        padding-left: 10px;
        color:${({theme})=>theme.colors.btnFont}
    }
    &:hover{
        border: solid 2px ${({theme}) => theme.borderColor.btnBorder};
    }
`