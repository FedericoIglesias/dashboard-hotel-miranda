import styled, { CSSProperties } from "styled-components";

export const styleColumn = { width: "14%" };

export const styleIn: CSSProperties = {
  backgroundColor: "#5AD07A50",
  borderRadius: "10px",
  paddingLeft: "12px",
  color: "#5AD07A",
  textAlign: "center",
  padding: "10px 10px",
  width: "125px",
  fontWeight: 700,
};
export const styleOut: CSSProperties = {
  backgroundColor: "#E2342850",
  borderRadius: "10px",
  paddingLeft: "12px",
  color: "#E23428",
  textAlign: "center",
  padding: "10px 10px",
  width: "125px",
  fontWeight: 700,
};

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

export interface TypeItem {
  id: number;
  name: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  status: boolean;
  tipoHabitacion: any;
}