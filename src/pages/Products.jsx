import { useState } from "react";
import AddCart from "./AddCart";
import Cart from "../components/Cart";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const filtered = product.filter((item) => item.id !== id);
    setProduct(filtered);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setOpen(true);
  };

  const handleSave = (updatedItem) => {
    const newList = product.map((el) =>
      el.id === updatedItem.id ? updatedItem : el
    );
    setProduct(newList);
    setEditingItem(null);
  };

  return (
    <div className="container">
      <div className="d-flex mt-2">
        <div className="col-md-4">
          <button
            className="btn btn-success"
            onClick={() => {
              setEditingItem(null);
              setOpen(true);
            }}
          >
            Yangi mahsulot qo'shish
          </button>
          <AddCart
            isOpen={open}
            toggle={() => setOpen(false)}
            product={product}
            setProduct={setProduct}
            editItem={editingItem}
            onSave={handleSave}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Qidirish..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-3">
        {product
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div className="col-md-4" key={item.id}>
              <Cart item={item} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
