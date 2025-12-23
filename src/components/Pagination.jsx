import React from "react";

const Pagination = ({ page, totalPages, onChange }) => {
  return (
    <div className="flex gap-3 mt-4 items-center">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Prev
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
