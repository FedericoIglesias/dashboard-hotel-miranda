import styled from "styled-components"
import founder from '../../assets/founder.jpg'
import { useState } from "react";
import { useEffect } from "react";
import { EditCard } from "./edit-card";

export function Card (){


    const [edit, setEdit] = useState(0)


    const handelEdit = () => {
        edit == 0 ? setEdit(1) : setEdit(0)
    }



    const Card = styled.div`
    width: 200px;
    background-color: #f8f8f8;
    text-align: center;
    padding: 20px;
    margin: 20px auto;
    box-shadow: 1px 1px 5px gray;
    & img{
        width: 80px;
    }
    & p{
        font-size: 13px;
        margin-bottom: 10px;
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

    return(
        <Card>
            <img src={founder} alt="yourface" />
                <EditCard edit={edit}/>
            <button onClick={() => handelEdit()} >Edit</button>
        </Card>
    )
}