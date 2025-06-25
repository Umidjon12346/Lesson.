import React, { useState, useEffect } from "react";
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

function AddCart({ isOpen, toggle, onSave, initialData = null }) {
  const isUpdate = initialData !== null;

  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: "./src/assets/foto.jpg",
  });

  useEffect(() => {
    if (isUpdate && initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: "",
        price: "",
        sale: "",
        quantity: "",
        img: "./src/assets/foto.jpg",
      });
    }
  }, [initialData, isUpdate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const finalItem = {
      ...form,
      id: isUpdate ? form.id : Date.now(),
      price: +form.price,
      sale: +form.sale,
      quantity: +form.quantity,
    };

    onSave(finalItem);
    toggle();

    if (!isUpdate) {
      setForm({
        name: "",
        price: "",
        sale: "",
        quantity: "",
        img: "./src/assets/foto.jpg",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {isUpdate ? "Update Product" : "Yangi mahsulot qoshish"}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Nomi</Label>
          <Input
            name="name"
            value={form.name}
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Narxi</Label>
          <Input
            name="price"
            type="number"
            required
            value={form.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Chegirma (%)</Label>
          <Input
            name="sale"
            type="number"
            required
            value={form.sale}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soni</Label>
          <Input
            name="quantity"
            type="number"
            required
            value={form.quantity}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Rasm URL</Label>
          <Input name="img" value={form.img} onChange={handleChange} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          {isUpdate ? "Saqlash" : "Qoshish"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Bekor qilish
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddCart;
