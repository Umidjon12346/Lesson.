import React, { useState } from "react";
import Cart from "../components/Cart";
import AddCart from "./AddCart";

const Products = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 2,
      name: "product-2",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 3,
      name: "product-3",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 4,
      name: "product-4",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 5,
      name: "narsa",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
  ]);

  const openAddModal = () => {
    setEditItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setEditItem(null);
    setModalOpen(false);
  };

  const handleSave = (item) => {
    if (editItem) {
      setProduct(product.map((p) => (p.id === item.id ? item : p)));
    } else {
      setProduct([...product, item]);
    }
  };

  const deleteProduct = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-2">
          <button className="btn btn-danger" onClick={openAddModal}>
            Yangi mahsulot qoshish
          </button>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-3">
        {product.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).length > 0 ? (
          product
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div className="col-md-4" key={item.id}>
                <Cart
                  item={item}
                  onDelete={deleteProduct}
                  onUpdate={openEditModal}
                />
              </div>
            ))
        ) : (
          <h1>Not Found</h1>
        )}
      </div>

      {modalOpen && (
        <AddCart
          isOpen={modalOpen}
          toggle={closeModal}
          onSave={handleSave}
          initialData={editItem}
        />
      )}
    </div>
  );
};

export default Products;
