import styled from "styled-components";

export interface ObjCheck {
    check: boolean
    marleft: string
}

export const BoxNav = styled.div`
width: 20%;
padding: 20px;
background-Color: white;
height: 100vh;
position: fixed;
left: 0;
box-Sizing: border-box;
`; 


export const smallLetter = {
    fontSize: '12px',
    color: '#799283',
}

export const title = {
    color: '#212121',
    fontWeight: 700,
    fontSize: '23px',
}

export const marRight: object = {
    marginRight: '20px',
}
export const linkStyle: object = { color: 'gray', textDecoration: 'none', fontWeight: 700 }
export const active: object = { borderLeft: '3px solid #E23428', color: '#E23428', fontWeight: 400 }

export const ProfileCard = styled.div`
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

export interface Edit {
    edit: number
}

export const styleMail = {
    color: 'gray',
    fontSize: '12px',
    marginBottom: '10px'
}