import React, { FC, useEffect, useState } from "react";
import { BasicModal } from "./modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ProofStyled, proofStyle, btnStyle, letterStyle, imgContact } from "./variablesContact";
import { searchContacts } from "../../features/contactSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IContact } from "../../types";



export const Proof: FC = (): JSX.Element => {
  
  const [number, setNumber] = useState<number[]>([0, 3]);
  const proofMail: IContact[] = useAppSelector<IContact[]>((store) => store.contact);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchContacts());
  }, []);

  const hanldePrev = () => {
    if (number[0] === 0) {
      setNumber([9, 12]);
    } else {
      setNumber([number[0] - 3, number[1] - 3]);
    }
  };

  const hanldeNext = () => {
    if (number[1] === 12) {
      setNumber([0, 3]);
    } else {
      setNumber([number[0] + 3, number[1] + 3]);
    }
  };

  const handleArchive = (item) => {

  };

  return (
    <>
      <ProofStyled>
        <p
          style={{ fontWeight: "700", fontSize: "20px", margin: "0 27px 10px" }}
        >
          Latest Review by Costumer
        </p>
        <article>
          <ArrowBackIosIcon onClick={() => hanldePrev()} />
          {proofMail.slice(number[0], number[1]).map((item) => {
            return (
              <div style={proofStyle} key={item._id}>
                <div style={{ display: "flex" }}>
                  <div style={letterStyle}>
                    <img src={item.photo} style={imgContact}alt="" />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px" }}>{item.name}</p>
                    <p style={{ fontSize: "13px" }}>Date: {item.date}</p>
                    <p style={{ fontSize: "13px" }}>Id: {item._id}</p>
                  </div>
                </div>
                <p style={{ fontSize: "14px" }}>Subject: {item.subject}</p>
                <BasicModal />
                <p style={{ fontSize: "13px", marginTop: "10px" }}>
                  {item.email}
                </p>
                <p style={{ fontSize: "13px", marginBottom: "10px" }}>
                  {item.phone}
                </p>
                <button style={btnStyle} onClick={() => handleArchive(item)}>
                  Delete
                </button>
              </div>
            );
          })}
          <ArrowForwardIosIcon onClick={() => hanldeNext()} />
        </article>
      </ProofStyled>
    </>
  );
};
