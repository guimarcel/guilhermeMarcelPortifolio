import styled from "styled-components";

import backgroundImage from '../../public/background.jpeg'; // Adjust the path according to your project structure

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: "#dddd";
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3f3f3f;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: #3f3f3f;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #3f3f3f;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #3f3f3f;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #707070;
  }
`;
