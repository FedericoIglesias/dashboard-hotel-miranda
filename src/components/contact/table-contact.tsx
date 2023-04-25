import React, { FC, useEffect, useState } from "react";
import { BasicModal } from "./modal";
import styled from "styled-components";
import { SelectPage } from "../select-page";
import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../../features/contactSlice";

const Row = styled.div`
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

export const TableContact: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  const mail: any = useSelector<any>(store => store.contact);

  const mails: any = mail.slice(10 * page - 10, 10 * page);

  const archive: object[] = [];

  useEffect(() => {
    dispatch(searchContact());
  }, []);

  const handleArchive = (item) => {
    archive.unshift(item);
  };

  const btnStyle = {
    background: "#135846",
    color: "white",
    border: "none",
    padding: "10px",
    fontSize: "10px",
    borderRadius: "10px",
  };

  return (
    <>
      <section style={{ width: "90%", margin: "auto" }}>
        <Row>
          <p style={{ width: "20%" }}>Order Id</p>
          <p style={{ width: "20%" }}>Date</p>
          <p style={{ width: "20%" }}>Customer</p>
          <p style={{ width: "20%" }}>Coments</p>
          <p style={{ width: "20%" }}>Action</p>
        </Row>
        {mails.map((item) => {
          return (
            <Row key={item.id}>
              <p style={{ width: "20%" }}>{item.id}</p>
              <p style={{ width: "20%" }}>{item.date}</p>
              <p style={{ width: "20%" }}>{item.name}</p>
              <p style={{ width: "20%" }}>
                <BasicModal />
              </p>
              <p
                style={{ width: "20%" }}
                onClick={(item) => handleArchive(item)}
              >
                <span style={btnStyle}> Archive</span>
              </p>
            </Row>
          );
        })}
        <SelectPage array={mail} show={mails} setNp={setPage} />
      </section>
    </>
  );
};
