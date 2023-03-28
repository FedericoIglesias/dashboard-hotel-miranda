import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button style={{textAlign:'left', border: 'none', backgroundColor:'white'}} onClick={handleOpen}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur ipsa, facere quis maiores esse quasi est, iusto similique voluptatem, corporis ex architecto t...</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Message
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur ipsa, facere quis maiores esse quasi est, iusto similique voluptatem, corporis ex architecto totam illo pariatur dolorum quaerat possimus? Consectetur.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}