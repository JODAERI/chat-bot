import styled from "styled-components";

function UserQuestion({ question, timeStamp, formatDate }) {
  return (
    <>
      <Wrapper>
        <ContentsBox>
          <TimeStampBox>{formatDate(timeStamp)}</TimeStampBox>
          <AnswerBox>{question}</AnswerBox>
        </ContentsBox>
      </Wrapper>
    </>
  );
}

export default UserQuestion;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  width: 80%;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
  }
`;

const ContentsBox = styled.div``;

const TimeStampBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.timeStamp};
  padding: 10px;
`;

const AnswerBox = styled.div`
  background: ${({ theme }) => theme.backgroundColor.userQuestion};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 10px;
  }
`;
