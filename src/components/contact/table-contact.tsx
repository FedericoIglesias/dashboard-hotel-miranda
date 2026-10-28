import React, { FC, useEffect, useState } from "react";
import { BasicModal } from "./modal";
import { Row, btnStyle } from "./variablesContact";
import { SelectPage } from "../select-page";
import { deleteContact, searchContacts } from "../../features/contactSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IContact } from "../../types";

export const TableContact: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const mails: IContact[] = useAppSelector<IContact[]>((state) => state.contact);

  // const mail: IContact[] = []//mail.slice(10 * page - 10, 10 * page);

  dispatch(searchContacts());

  // useEffect(() => {}, [mail]);

  const handleDelete = (item) => {
    dispatch(deleteContact(item._id));
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
        {mails.slice(10 * page - 10, 10 * page).map((item) => {
          return (
            <Row key={item._id}>
              <p style={{ width: "30%" }}>{item.email}</p>
              <p style={{ width: "20%" }}>
                {new Date(item.date).toDateString()}
              </p>
              <p style={{ width: "20%" }}>{item.name}</p>
              <div style={{ width: "20%", background: '#393939', cursor: 'pointer' }}>
                <BasicModal />
              </div>
              <button
                style={{ width: "10%", border: 'none', background: '#fff', cursor: 'pointer' }}
                onClick={(item) => handleDelete(item)}
              >
                <span style={btnStyle}>Delete</span>
              </button>
            </Row>
          );
        })}
        <SelectPage array={mails} show={mails.slice(10 * page - 10, 10 * page).length} setNp={setPage} />
      </section>
    </>
  );
};
