import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import IconButton from "@mui/material/IconButton";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const Toolbar = ({ search, onSearch, onAdd, onViewChange, view }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Search product..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <IconButton>
        {view === "list" ? (
          <FormatListBulletedIcon onClick={() => onViewChange("card")} />
        ) : (
          <ViewModuleIcon onClick={() => onViewChange("list")} />
        )}
      </IconButton>

      <Button
        sx={{
          textTransform: "none",
          border: "1px solid black",
          borderRadius: "0px",
          color: "gray",
          "&:hover": { color: "black" },
        }}
        startIcon={<AddIcon />}
        className="bg-blue-600 text-white px-4"
        onClick={onAdd}
      >
        Add
      </Button>
    </div>
  );
};
export default Toolbar;
