import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  background-color: transparent;
  height: 50px;
  display: flex;
  backdrop-filter: blur(18px);
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
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
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  animation-duration: 0.5s;
  animation-name: animate-fade;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

export const RollDownWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 9999;
`;

export const ButtonRollDown = styled.button`
  border-radius: 20px;
  background-color: #0b93f6;
  border: none;
  font-size: 1em;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  animation-duration: 0.5s;
  animation-name: animate-pop;
  animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  @keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export const styledImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;
