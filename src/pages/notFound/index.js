import styled from "styled-components";
import { ErrorIcon } from "../../assets/icons";

function NotFoundPage() {
  return (
    <Wrapper>
      <Contents>
        <ErrorIcon />
        <ErrorMessage>404 ERROR</ErrorMessage>
        <p>해당 페이지를 찾을 수 없습니다.</p>
      </Contents>
    </Wrapper>
  );
}

export default NotFoundPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Contents = styled.div`
  color: ${({ theme }) => theme.colors.description};
  padding-top: 120px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 200px;
  }
  p {
    margin-top: 5px;
    font-size: 20px;
  }
`;
const ErrorMessage = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
