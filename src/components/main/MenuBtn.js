import styled from "styled-components";
import postQuickQuestion from "../../api/postQuickQuestion";


function MenuBtn({icon, text, question, onChangeIsFirst,setQuickQuestion}) {
    const formatText = (text) => {
        return text.replace(/\t/g, '\n');
    };

    const postQuestion = async ()=>{
      const response = await postQuickQuestion({question});
        onChangeIsFirst()
        setQuickQuestion(response)
    }
    return (
        <>
            <Container onClick={postQuestion}>
                <ItemBox>
                    <IconBox>
                        {icon}
                    </IconBox>
                    <TextBox>
                        {formatText(text)}
                    </TextBox>
                </ItemBox>
            </Container>
        </>
    );
}

export default MenuBtn;

const Container = styled.div`
    border: solid 1px ${({theme}) => theme.borderColor.btnBorder};
    border-radius: 20px;
    width: 127px;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background: ${({theme})=>theme.backgroundColor.btnBack};
    &:hover{
        border: solid 2px ${({theme}) => theme.borderColor.btnBorder};
    }
`



const ItemBox =styled.div`
    color: ${({theme}) => theme.colors.iconColor};
    margin: 10px;

`


const IconBox=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
   
`

const TextBox = styled.div`
    color: ${({theme}) => theme.colors.btnFont};
    font-size:15px ;
    text-align: center;
    width : 70px;
    white-space: pre-line;
`
