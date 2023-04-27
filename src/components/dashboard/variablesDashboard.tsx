import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 20px;
  width: 23%;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #eee;
  :hover {
    box-shadow: 1px 1px 5px red;
    transform: Scale(1.08);
  }
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 30px;
`;

export const Category = styled.p`
  color: gray;
  font-size: 14px;
`;

export const styleIcon = {
  backgroundColor: "#FFEDEC",
  padding: "2px",
  marginRight: "22px",
  color: "#E23428",
  width: "65px",
  height: "65px",
};