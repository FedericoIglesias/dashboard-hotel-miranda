import { CSSProperties } from "react";
import styled from "styled-components";

export const redStyle: CSSProperties = {
  marginRight: "20px",
  borderBottom: "1px solid black",
  fontSize: "12px",
  color: "#e23428",
  fontWeight: "700",
};

export const grayStyle: CSSProperties = {
  marginRight: "20px",
  borderBottom: "1px solid black",
  fontSize: "12px",
  color: "gray",
  fontWeight: "700",
};

export const btnStyle: CSSProperties = {
  color: "white",
  border: "none",
  padding: "10px 20px",
  backgroundColor: "#135846",
  borderRadius: "20px",
};

export interface IUser {
  id: 1;
  name: string;
  email: string;
  startDate: Date;
  description: string;
  conctac: number;
  status: boolean;
  password: number;
}

  export const Row = styled.div`
    display: flex;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    align-items: center;
    :hover {
      box-shadow: 1px 1px 5px gray;
      transform: Scale(1.02);
    }
  `;

  