import React, { FC } from "react";
import { Proof } from "../contact/proof";
import { Stats } from "./stats";

export const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <Stats />
      <section>
        <p>calendario</p>
        <p>graphic</p>
      </section>
      <Proof />
    </>
  );
};
