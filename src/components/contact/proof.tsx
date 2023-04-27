import React, { FC, useEffect, useState } from "react";
import { BasicModal } from "./modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ProofStyled, proofStyle, btnStyle, letterStyle } from "./variablesContact";
import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../../features/contactSlice";



export const Proof: FC = (): JSX.Element => {
  
  const [number, setNumber] = useState<number[]>([0, 3]);
  const archive: object[] = [];
  const proofMail: any = useSelector<any>((store) => store.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchContact());
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
    archive.unshift(item);
    console.log(archive); // this will be removed
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
              <div style={proofStyle} key={item.id}>
                <div style={{ display: "flex" }}>
                  <div style={letterStyle}>
                    <p style={{ color: "white" }}>{item.name.slice(0, 1)}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "13px" }}>{item.name}</p>
                    <p style={{ fontSize: "13px" }}>Date: {item.date}</p>
                    <p style={{ fontSize: "13px" }}>Id: {item.id}</p>
                  </div>
                </div>
                <p style={{ fontSize: "14px" }}>Subject: {item.subject}</p>
                <BasicModal />
                <p style={{ fontSize: "13px", marginTop: "10px" }}>
                  {item.email}
                </p>
                <p style={{ fontSize: "13px", marginBottom: "10px" }}>
                  {item.contact}
                </p>
                <button style={btnStyle} onClick={() => handleArchive(item)}>
                  ARCHIVE
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
