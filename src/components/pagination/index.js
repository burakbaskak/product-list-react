import React, { useEffect, useState } from "react";
import {
  Stack,
  Pagination as MuiPagination,
  PaginationItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const Pagination = ({ onChange, pageCount }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [pageCount]);

  const handleChange = (event, value) => {
    setPage(value);
    onChange(value);
  };

  const StyledMuiPagination = styled(MuiPagination)({
    "& .Mui-selected": {
      color: "white",
    },
  });

  return (
    <Stack spacing={2} sx={{ marginTop: 3 }}>
      <StyledMuiPagination
        count={pageCount}
        page={page}
        size="large"
        shape="rounded"
        color="primary"
        renderItem={(item) => {
          let component;
          if (item.type === "previous") {
            component = (
              <Button
                variant="text"
                startIcon={<ArrowBack />}
                {...item}
                sx={{ marginRight: 4 }}
              >
                Prev
              </Button>
            );
          } else if (item.type === "next") {
            component = (
              <Button
                variant="text"
                endIcon={<ArrowForward />}
                {...item}
                sx={{ marginLeft: 4 }}
              >
                Next
              </Button>
            );
          } else {
            component = <PaginationItem {...item} />;
          }
          return component;
        }}
        onChange={handleChange}
      />
    </Stack>
  );
};
