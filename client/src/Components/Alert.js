import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Link from "@mui/material/Link";

function Alert() {
  const [open, setOpen] = useState(false);

  setTimeout(() => {
    setOpen(true);
  }, 6000);

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText sx={{ color: "black" }}>
            Please Login or Register To Shop!
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
              href="/login"
            >
              Login
            </Link>
            <Link
              sx={{
                color: "red",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "Crimson",
                },
              }}
              href="/register"
            >
              Register
            </Link>
          </span>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Alert;
