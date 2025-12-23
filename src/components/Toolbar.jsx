const Toolbar = ({ search, onSearch, onAdd, onViewChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Search product..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="border px-4" onClick={() => onViewChange("list")}>
        List
      </button>
      <button className="border px-4" onClick={() => onViewChange("card")}>
        Card
      </button>
      <button className="bg-blue-600 text-white px-4" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};
export default Toolbar;
