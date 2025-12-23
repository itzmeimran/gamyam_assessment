import React from "react";

const ProductGrid = ({ products = [], onEdit = () => {} }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4">
          <h3 className="font-bold">{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>
          <button className="mt-2 underline" onClick={() => onEdit(p)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
