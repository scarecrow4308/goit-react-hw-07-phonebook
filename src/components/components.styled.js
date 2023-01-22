import styled from 'styled-components';

export const Button = styled.button`
  padding: 2px 10px;
  border: 0;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  :hover {
    background-color: blue;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
`;
