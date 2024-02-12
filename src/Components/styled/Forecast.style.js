import styled from "styled-components";

export const MainContainer = styled.div`
  z-index: 100;
  margin: 0 50px 0 0;
  cursor: pointer;
  h1 {
    color: white;
    text-align:center;
  }
  @media (max-width:1000px) {
    margin: 40px auto;
  }
`;
export const DailyItem = styled.div`
  width: 25vw;
  background-color: white;
  margin-top: 7px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50px;
  }
  label {
    font-size: 20px;
  }
  p {
    color: #0e6cc4;
  }

  &:hover {
    transition: 1s;
    transform: scale(0.95);
  }
  @media (max-width:1000px) {
    width:80vw;
    margin: 5px auto;
  }
`;
export const DailyItemInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
     margin-right:20px;
     font-size:20px;
  }
 
  
`;
