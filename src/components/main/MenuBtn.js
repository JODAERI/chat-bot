import styled from "styled-components";


function MenuBtn({icon, text}) {
    const formatText = (text) => {
        return text.replace(/\t/g, '\n');
    };

    return (
        <>
            <Container>
                <ItemBox>
                    <LogoBox>
                        {icon}
                    </LogoBox>
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
    border: solid 1px ${({theme}) => theme.colors.btnBorder};
    border-radius: 20px;
    width: 127px;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background: ${({theme})=>theme.backgroundColor.btnBack}
 
`



const ItemBox =styled.div`
    color: ${({theme}) => theme.colors.iconColor};
    margin: 10px;
`


const LogoBox=styled.div`
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
