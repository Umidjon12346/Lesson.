import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Outlet/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="/posts" element={<Post />} />
      </Routes> */}
    </>
  );
}

export default App;
