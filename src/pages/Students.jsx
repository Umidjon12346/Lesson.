import { useEffect, useState } from "react";
import { User } from "../service/students";

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    jshshr: "",
    dob: "",
    address: "",
  });
  const [editId, setEditingId] = useState(null);

  const editItem = (item) => {
    setForm({
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      jshshr: item.jshshr,
      dob: item.dob,
      address: item.address,
    });
    setEditingId(item.id);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await User.getAll();
      setStudents(response);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      const res = await User.updateUser(form, editId);
      if (res?.status === 200) {
        const updated = await User.getAll();
        setStudents(updated);
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          jshshr: "",
          dob: "",
          address: "",
        });
        setEditingId(null);
      }
    } else {
      const res = await User.createUser(form);
      if (res?.status === 201) {
        const updated = await User.getAll();
        setStudents(updated);
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          jshshr: "",
          dob: "",
          address: "",
        });
      }
    }
  };
  const deleteItem = async (id)=>{
    const res = await User.deleteUser(id)
    if(res.status === 200){
        const res = await User.getAll()
        setStudents(res)
    }
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <form id="students" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  placeholder="first name"
                  className="form-control my-2"
                />
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  placeholder="last name"
                  className="form-control my-2"
                />
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="form-control my-2"
                />
                <input
                  type="text"
                  name="jshshr"
                  value={form.jshshr}
                  onChange={handleChange}
                  placeholder="JSHSHR"
                  className="form-control my-2"
                />
                <input
                  type="text"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  className="form-control my-2"
                />
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="address"
                  className="form-control my-2"
                />
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" form="students">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>JSHSHR</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.jshshr}</td>
                  <td>{item.dob}</td>
                  <td>{item.address}</td>
                  <td className="d-flex gap-1">
                    <button
                      className="btn btn-info"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
