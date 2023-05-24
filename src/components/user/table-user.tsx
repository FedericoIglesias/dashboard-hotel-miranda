import React, { FC, useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Row } from "./variablesUser";
import { SelectPage } from "../select-page";
import { CSSProperties } from "styled-components";
import { IUser } from "../../types";
import { StatusUser } from "../../enum";
import { OptionUser } from "./optionUser";


export const TableUSer:FC<any> = ({  template  }): JSX.Element => {

  const [page, setPage] = useState<number>(1);
  const user: IUser[] = template.slice(10 * page - 10, 10 * page);


  useEffect(() => {}, [user]);


  const ifStyle = (status: StatusUser): CSSProperties =>
    status === StatusUser.Active ? { color: "#5AD07A" } : { color: "#E23428" };

  return (
    <section style={{ width: "90%", margin: "auto" }}>
      <Row>
        <p style={{ width: "20%" }}>Name</p>
        <p style={{ width: "20%" }}>Job Desk</p>
        <p style={{ width: "20%" }}>Schedule</p>
        <p style={{ width: "20%" }}>Contact</p>
        <p style={{ width: "20%" }}>Status</p>
      </Row>
      {template.slice(10 * page - 10, 10 * page).map((item) => {
        return (
          <Row key={item.id}>
            <div style={{ width: "20%", display: "flex", fontSize: "10px" }}>
              <img  alt="profile" src={item.photo} style={{ width: "25px" }} />
              <div>
                <p>{item.name}</p>
                <p>{item._id}</p>
                <p>{(new Date(item.startDate).toLocaleDateString('es-ES'))}</p>
              </div>
            </div>
            <p style={{ width: "20%" }}>{item.description}</p>
            <p style={{ width: "20%" }}> {item.schedule}</p>
            <p style={{ width: "20%" }}>
              <CallIcon />
              {item.phone}
            </p>
            <p style={{ width: "15%", fontWeight: "700" }}>
              <span style={ifStyle(item.status)}>
                {item.status}
              </span>
            </p>
            <OptionUser/>
          </Row>
        );
      })}
      <SelectPage array={template} show={user} setNp={setPage} />
    </section>
  );
}
