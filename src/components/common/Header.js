import styled from "styled-components";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <LogoBox>
                <Link style={{ textDecoration: "none"}} to={'/'}>
                    <LogoItem>
                        조대리
                    </LogoItem>
                </Link>
            </LogoBox>
        </>

    );
}
export default Header;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;   
    z-index: 1000;
    background: ${({theme}) => theme.backgroundColor.background};

`
const LogoItem = styled.div`
    @font-face {
        font-family: 'RiaSans-ExtraBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/RiaSans-ExtraBold.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'RiaSans-ExtraBold';
    font-size: 40px;
    color: ${({theme}) => theme.colors.logoFont};
    pointer-events: visibleStroke;
    &:hover{
        color: ${({theme}) => theme.colors.btnFont};
    }
`