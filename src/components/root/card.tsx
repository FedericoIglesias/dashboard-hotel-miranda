import { ProfileCard } from "./variablesRoot";
// import founder from '../../assets/founder'
import { FC, useState } from "react";
import { EditCard } from "./edit-card";
import React from "react";


export const Card: FC = (): JSX.Element => {

    const [edit, setEdit] = useState<number>(0)

    const handelEdit = () => {
        edit === 0 ? setEdit(1) : setEdit(0)
    }

    return (
        <ProfileCard>
            <img  alt="photoProfile" />
            <EditCard edit={edit} />
            <button onClick={() => handelEdit()} >Edit</button>
        </ProfileCard>
    )
}