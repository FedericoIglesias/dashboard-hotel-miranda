import React, { FC, useEffect, useState } from "react";
import { BasicModal } from "./modal";
import { Row, btnStyle } from "./variablesContact";
import { SelectPage } from "../select-page";
import { searchContacts } from "../../features/contactSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IContact } from "../../types";

export const TableContact: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const mail: IContact[] = useAppSelector<IContact[]>((state) => state.contact);

  const mails: IContact[] = mail.slice(10 * page - 10, 10 * page);

  const archive: IContact[] = [];

  useEffect(() => {
    dispatch(searchContacts());
  }, []);

  const handleArchive = (item) => {
    archive.unshift(item);
  };

  return (
    <>
      <section style={{ width: "90%", margin: "auto" }}>
        <Row>
          <p style={{ width: "30%" }}>Email</p>
          <p style={{ width: "20%" }}>Date</p>
          <p style={{ width: "20%" }}>Customer</p>
          <p style={{ width: "20%" }}>Coments</p>
          <p style={{ width: "10%" }}>Action</p>
        </Row>
        {mails.map((item) => {
          return (
            <Row key={item._id}>
              <p style={{ width: "30%" }}>{item.email}</p>
              <p style={{ width: "20%" }}>{(new Date(item.date).toDateString())}</p>
              <p style={{ width: "20%" }}>{item.name}</p>
              <p style={{ width: "20%" }}>
                <BasicModal />
              </p>
              <p
                style={{ width: "10%" }}
                onClick={(item) => handleArchive(item)}
              >
                <span style={btnStyle}>Delete</span>
              </p>
            </Row>
          );
        })}
        <SelectPage array={mail} show={mails} setNp={setPage} />
      </section>
    </>
  );
};
