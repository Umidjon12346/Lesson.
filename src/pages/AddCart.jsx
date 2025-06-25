import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function AddCart({ isOpen, toggle, product, setProduct, editItem, onSave }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg",
  });

  useEffect(() => {
    if (editItem) {
      setForm({
        id: editItem.id,
        name: editItem.name || "",
        price: editItem.price || "",
        sale: editItem.sale || "",
        quantity: editItem.quantity || "",
        img:
          editItem.img ||
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
      });
    } else {
      setForm({
        name: "",
        price: "",
        sale: "",
        quantity: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
      });
    }
  }, [editItem, isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editItem) {
      onSave({ ...form });
    } else {
      const newItem = {
        ...form,
        id: Date.now(),
      };
      setProduct([...product, newItem]);
    }

    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {editItem ? "Mahsulotni tahrirlash" : "Yangi mahsulot qo'shish"}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Nomi</Label>
          <Input name="name" value={form.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Narxi</Label>
          <Input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Chegirma</Label>
          <Input
            name="sale"
            type="number"
            value={form.sale}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soni</Label>
          <Input
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          {editItem ? "Saqlash" : "Qo‘shish"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Bekor qilish
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddCart;
