import { Close, FilterList } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FilterPane } from "./FilterPane";

export const MobileFilterPane = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{ maxWidth: 200, alignSelf: "end" }}
        onClick={handleClickOpen}
        startIcon={<FilterList />}
      >
        Filter
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              Filter Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 2 }}>
          <FilterPane />
        </Box>
      </Dialog>
    </>
  );
};
