import React, { useState } from "react";
import NavBar from "./NavBar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Link from "@mui/material/Link";

function FourOFour() {
  const [open, setOpen] = useState(false);

  setTimeout(() => {
    setOpen(true);
  }, 1500);

  return (
    <>
      <NavBar></NavBar>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText sx={{ color: "black" }}>
            OOPS! Looks Like The Page Was Not Found!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <span className="login-register">
            <Link
              sx={{
                color: "red",
                textDecoration: "none",
                ":hover": "color:blue",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "Crimson",
                },
              }}
              className="login-register-padding"
              href="/"
            >
              Go Back Home
            </Link>
          </span>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FourOFour;
