import React, { useMemo, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { productsData } from "./products";
import ProductForm from "./components/ProductForm";
import Pagination from "./components/Pagination";
import ProductTable from "./components/ProductTable";
import ProductGrid from "./components/ProductGrid";
import Toolbar from "./components/Toolbar";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const App = () => {
  const [products, setProducts] = useState(productsData);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null);

  const pageSize = 5;
  const debouncedSearch = useDebounce(search, 500);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [products, debouncedSearch]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleSave = (product) => {
    if (product.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    }
    setEditing(null);
  };
  return (
    <div>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>

        <Toolbar
          search={search}
          onSearch={setSearch}
          onAdd={() => setEditing({})}
          onViewChange={setView}
          view={view}
        />

        {view === "list" ? (
          <ProductTable products={paginatedProducts} onEdit={setEditing} />
        ) : (
          <ProductGrid products={paginatedProducts} onEdit={setEditing} />
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />

        {editing && (
          <ProductForm
            product={editing}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
