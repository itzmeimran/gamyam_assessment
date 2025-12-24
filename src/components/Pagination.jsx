import Button from "@mui/material/Button";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Pagination = ({ page, totalPages, onChange }) => {
  return (
    <div className="flex gap-3 mt-4 items-center">
      <Button
        sx={{ textTransform: "none" }}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        startIcon={<ArrowBackIcon />}
      >
        Prev
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{ textTransform: "none" }}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
