import { ProfileCard } from "./variablesRoot";
import { FC, useContext, useState } from "react";
import { EditCard } from "./edit-card";
import React from "react";
import { LoginContext } from "../../context/loginContext";


export const Card: FC = (): JSX.Element => {

    const [edit, setEdit] = useState<number>(0)

    const { login } = useContext<any>(LoginContext)

    const handelEdit = () => {
        edit === 0 ? setEdit(1) : setEdit(0)
    }

    return (
        <ProfileCard>
            <img src={"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"} alt="photoProfile" />
            <EditCard edit={edit} />
            <button onClick={() => handelEdit()} >Edit</button>
        </ProfileCard>
    )
}