import styled from "styled-components";

export const Container = styled.div`
  width: 520px;
  min-height: 44vh;
  padding: 50px 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 560px){
    width: 100%;
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
`

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 17px 0;
  color: #ffffff;
  opacity: 0.7;
`

export const Button = styled.button`
  width: 194px;
  height: 56px;
  margin-top: 17px;
  background: #fa4776;
  border-radius: 40px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`