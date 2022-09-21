import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  background-color: aquamarine;
  height: 50px;
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: flex-end;
`;

export const Main = styled.div`
  padding: 10px;
  height: 79%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-image: url(https://wallpaperaccess.com/full/6234338.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  ::-webkit-scrollbar-thumb {
    background: #6649b8;
  }
`;

export const Wrapper = styled.div`
  width: 50vw;
  height: 100vh;
`;

export const FormWrapper = styled.form`
  height: 10vh;
  bottom: 0;
  background-color: rgb(24, 23, 23);
  width: 100%;
  display: flex;
  font-size: 1.5rem;
`;
