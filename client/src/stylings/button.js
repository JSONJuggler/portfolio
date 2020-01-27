import styled, { css } from "styled-components";

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background: ${props => props.theme.basecolor};
  ${props =>
    props.kind &&
    css`
      background: ${props => props.theme[props.kind]};
    `}
  color: #fff;
  &:hover {
    background: yellow;
    border: none;
  }
`;

export default Button;
