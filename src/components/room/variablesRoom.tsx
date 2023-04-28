import styled, { CSSProperties } from "styled-components";

export const btnStyle = {
  padding: "13px 51px",
  backgroundColor: "#135846",
  border: "none",
  borderRadius: "10px",
  margin: "10px",
};


export const Row = styled.div`
  display: flex;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  :hover {
    transform: Scale(1.02);
    box-shadow: 1px 1px 5px gray;
  }
`;

export const styleAvai: CSSProperties = {
  backgroundColor: "#5AD07A",
  borderRadius: "10px",
  paddingLeft: "12px",
  color: "white",
  textAlign: "center",
  padding: "10px 10px",
  width: "125px",
};
export const styleBooked: CSSProperties = {
  borderRadius: "10px",
  paddingLeft: "12px",
  color: "white",
  textAlign: "center",
  padding: "10px 10px",
  width: "125px",
  backgroundColor: "#E23428",
};

export const styleImg = {
  width: "100px",
  height: "70px",
  borderRadius: "5px",
  marginRight: "10px",
};

export const styleColumn = { width: "12%" };

export const secStyle = {
    padding: '50px',
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px grey',
    width: '80%',
    margin: 'auto',
    marginTop: '50px'
}