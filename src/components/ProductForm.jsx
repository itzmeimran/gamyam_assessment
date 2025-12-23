import { useState } from "react";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [form, setForm] = useState({
    id: product.id || null,
    name: product.name || "",
    price: product.price || "",
    category: product.category || "",
    stock: product.stock || "",
    description: product.description || "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name required";
    if (!form.price) e.price = "Price required";
    if (!form.category) e.category = "Category required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (validate()) {
      onSave({
        ...form,
        price: Number(form.price),
        stock: form.stock ? Number(form.stock) : undefined,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 w-96">
        <h2 className="font-bold mb-4">{form.id ? "Edit" : "Add"} Product</h2>

        <input
          className="border p-2 w-full mb-1"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="number"
          className="border p-2 w-full mb-1"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

        <input
          className="border p-2 w-full mb-1"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}

        <input
          type="number"
          className="border p-2 w-full mb-1"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <div className="flex gap-2 mt-3">
          <button className="bg-blue-600 text-white px-4" onClick={submit}>
            Save
          </button>
          <button className="border px-4" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
