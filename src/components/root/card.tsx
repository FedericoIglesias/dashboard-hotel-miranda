import { ProfileCard } from "./variablesRoot";
import { FC, useState } from "react";
import { EditCard } from "./edit-card";
import React from "react";


export const Card: FC = (): JSX.Element => {

    const [edit, setEdit] = useState<number>(0)

    const founder =  require("../../assets/founder.jpg")

    const handelEdit = () => {
        edit === 0 ? setEdit(1) : setEdit(0)
    }

    return (
        <ProfileCard>
            <img src={founder} alt="photoProfile" />
            <EditCard edit={edit} />
            <button onClick={() => handelEdit()} >Edit</button>
        </ProfileCard>
    )
}