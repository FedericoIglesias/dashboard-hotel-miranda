import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "./variablesContact";



export const BasicModal: FC = (): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        style={{ textAlign: "left", border: "none", backgroundColor: "white" }}
        onClick={handleOpen}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
      </button>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            consequatur ipsa, facere quis maiores esse quasi est, iusto
            similique voluptatem, corporis ex architecto totam illo pariatur
            dolorum quaerat possimus? Consectetur.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
