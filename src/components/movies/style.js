import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 60px;
  width: 100%;

  @media (max-width: 560px){
      padding: 20px;
  }

  .react-multi-carousel-list {
    padding: 0px 17px;
    background: rgba(103, 101, 113, 0.34);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.14);

    margin-bottom: 26px;

    & li {
      display: flex;
      padding: 8px;
      align-items: center;
    }
  }
`

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
  margin: 12px 0;
`

export const Movie = styled.img`
  width: 200px;
  height: 290px;
  cursor: pointer;
  border-radius: 20px;

  transform: scale(0.9);
  transition: 0.3s;

  &:hover {
    transform: scale(1);
  }
`