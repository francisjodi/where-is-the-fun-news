import styled from "styled-components";

const BackDiv = styled.div`
  position: absolute;
  left: max(50px, 10%);
  top: 68px;
`;

const Background = styled.div`
  padding: 3px;
  background: rgb(156,45,253);
  background: linear-gradient(0deg, rgba(156,45,253,1) 0%, rgba(34,193,195,1) 100%);
  border-radius: 25px;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BackBtn = styled.button`
  border-radius: 25px;
  border: none;
  width: 99%;
  height: 25px;
  cursor: pointer;
`

export default function ReRoute(props) {
  const { route, text } = props;
  return (
    <BackDiv>
      <Background>
        <BackBtn onClick={() => window.location.href = route}>{text}</BackBtn>
      </Background>
    </BackDiv>
  )
}