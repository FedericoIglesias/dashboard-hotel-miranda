import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react'

interface Iprops{
    array: any;
    setNp: any;
    show:  any
}

export const SelectPage : FC<Iprops> = ({ array, setNp, show }): JSX.Element => {


    const secSelect = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 30px',
        alignItems: 'center',
        borderRadius: '10px'
    }


    const theme = createTheme({
        palette: {
            primary: {
                main: '#135846',
                
                light: '#135846',
                contrastText: '#135846',
            },
        },
    });


    return (
        <>
            <section style={secSelect}>
                <p style={{ color: '#393939' }}>Showing {show.length} of {array.length} data</p>
                <Stack spacing={2} >
                    <ThemeProvider theme={theme}>
                    <Pagination color='primary' style={{ margin: ' 10px auto', backgroundColor:'white' }} shape='rounded' count={Math.ceil(array.length / 10)} variant="outlined" onChange={(event, nPage) => setNp(nPage)} />
                    </ThemeProvider>
                </Stack>
            </section>
        </>
    )
}