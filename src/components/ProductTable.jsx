const ProductTable = ({ products = [], onEdit = () => {} }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border-t">
            <td>{p.name}</td>
            <td>₹{p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock ?? "-"}</td>
            <td>
              <button className="underline" onClick={() => onEdit(p)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
