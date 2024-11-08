import styled from "styled-components";
import {PuffLoader} from "react-spinners";

function LoadingSpinner() {
    return (
        <>
            <Wrapper>
                잠시만 기다려 주세요.
                <ItemBox>
                    <PuffLoader
                        color = "#666D91"
                        size={100}
                        speedMultiplier={0.8}
                    />
                </ItemBox>

            </Wrapper>

        </>
    );
}

export default LoadingSpinner;

const Wrapper = styled.div`
    width: 100%;
    font-size: 20px;
    margin-top: 150px;
    font-weight: bold;
    color: ${({theme})=>theme.colors.description};
    text-align: center;
    @media (max-width:${({theme}) => theme.mobile} ) {
        margin-top: 250px;
    }
`

const ItemBox = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`