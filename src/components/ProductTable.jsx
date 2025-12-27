import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import HighlightText from "./HighlightText";
const ProductTable = ({
  products = [],
  onEdit = () => {},
  searchText = "",
}) => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr
            key={p.id}
            className="border-t hover:bg-gray-100 cursor-pointer transition-all"
          >
            <td>
              <HighlightText str={p.name} subStr={searchText} />
            </td>
            <td>₹{p.price}</td>
            <td>
              {" "}
              <HighlightText str={p.category} subStr={searchText} />
            </td>
            <td>{p.stock ?? "-"}</td>
            <td>
              <Button
                variant="transparent"
                startIcon={<EditIcon />}
                sx={{
                  textDecoration: "none",
                  color: "gray",
                  textTransform: "none",
                  "&:hover": { fontWeight: "bold", color: "black" },
                }}
                className="underline"
                onClick={() => onEdit(p)}
              >
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
