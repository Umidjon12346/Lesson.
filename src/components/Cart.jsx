import React from "react";

function Cart({ item, onDelete, onEdit }) {
  return (
    <div>
      <div className="card" key={item.id}>
        <div className="card-body">
          <img src={item.img} className="w-100 rounded-1" />
        </div>
        <div className="card-footer">
          <h3 className="text-center">{item.name}</h3>
          <div className="d-flex justify-content-between">
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={() => onEdit(item)}>
              Update
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
