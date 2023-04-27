import styled from "styled-components";

export const ProofStyled = styled.section`
  background-color: white;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 1px 1px 5px gray;
  & article {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const btnStyle = {
  background: "#135846",
  color: "white",
  border: "none",
  padding: "10px",
  fontSize: "10px",
  borderRadius: "10px",
};

export const letterStyle = {
  backgroundColor: "#E23428",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  marginRight: "10px",
};

export const proofStyle = {
  width: "250px",
  backgroundColor: "white",
  margin: "5px auto",
  padding: "10px",
  boxShadow: "1px 1px 5px gray",
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

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};