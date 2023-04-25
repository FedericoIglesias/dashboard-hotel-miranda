import styled from "styled-components"
import founder from '../../assets/founder.jpg'
import { FC, useState } from "react";
import { EditCard } from "./edit-card";
import React from "react";

    const ProfileCard = styled.div`
    width: 200px;
    background-color: #f8f8f8;
    text-align: center;
    padding: 5px;
    margin: 20px auto;
    box-shadow: 1px 1px 5px #e7e7e7;
    border-radius: 10px;
    & img{
        width: 70px;
        height: 70px;
    }
    & button{
        border: none;
        background-color: #EBF1EF;
        padding:10px 20px;
        font-weight: 700;
        color: #135846;
        border-radius: 10px
    }
    `;

export const Card: FC = (): JSX.Element => {

    const [edit, setEdit] = useState<number>(0)

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