import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  backdrop-filter: blur(8px);
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  h4 {
    color: white;
  }
`;

export const ButtonLogin = styled.button`
  border-radius: 20px;
  backdrop-filter: blur(8px);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  padding: 10px 20px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const styledImg = styled.img`
  width: 80px;
  height: 80px;
`;
