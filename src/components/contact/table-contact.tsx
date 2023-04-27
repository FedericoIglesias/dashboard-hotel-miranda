import React, { FC, useEffect, useState } from "react";
import { BasicModal } from "./modal";
import { Row, btnStyle } from "./variablesContact";
import { SelectPage } from "../select-page";
import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../../features/contactSlice";



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
