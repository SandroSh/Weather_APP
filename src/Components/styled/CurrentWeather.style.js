import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
  margin:20px 0 0 50px;

  @media (max-width:1000px) {
    margin:50px auto 0 auto;
  }
`;
export const WeatherContainer = styled.div`
margin: 5px auto 0 auto;
  
  padding: 20px;
  width: 320px;
  background-color: white;
  border-radius: 2px;
  h2 {
    margin-top: -20px;
  }
`;
export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const City = styled.p`
  font-size: 25px;
`;
export const WeatherDescription = styled.p`
  color: #0e6cc4;
`;

export const StatsContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 2px;
  margin-left: 5px;
  width: 158px;
  height: 12vh;
  margin-top: 5px;
  &:first-child {
    margin-left: 0;
  }
  &:nth-child(3) {
    margin-left: 0;
  }
  progress {
    width: 80%;
  }
  img {
    margin-left: 10px;
  }
`;

export const StatsBigContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content:center;
  flex-basis: 50%;
  flex-wrap: wrap;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

  h3 {
    margin-left: 10px;
  }
`;

export const PopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px 0 0;
`;
