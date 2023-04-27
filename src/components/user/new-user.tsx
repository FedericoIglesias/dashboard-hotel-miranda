import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC } from "react";

export const NewUser: FC = (): JSX.Element => {
  return (
    <>
      <section
        style={{
          backgroundColor: "white",
          width: "80%",
          margin: "0 auto",
          padding: "20px 20px 20px 40px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Full Name</p>
                <input type="text" name="" id="" />
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Job</p>
                <input type="text" name="" id="" />
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Email</p>
                <input type="text" />
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Phone</p>
                <input type="text" name="" id="" />
              </label>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="">
              <p>Start Date</p>
              <input type="date" name="" id="" />
            </label>
          </Grid>
        </Box>
        <label htmlFor="" style={{ margin: "0 auto" }}>
          <p>Description</p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            style={{ resize: "none" }}
          ></textarea>
        </label>
        <label htmlFor="">
          <p>Status</p>
          <select name="" id="">
            <option value="">Active</option>
            <option value="">Inactive</option>
          </select>
        </label>
        <label htmlFor="">
          <p>Password</p>
          <input type="password" />
        </label>
        <button>Create User</button>
      </section>
    </>
  );
};
