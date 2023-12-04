import styled from "styled-components";

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media screen (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
