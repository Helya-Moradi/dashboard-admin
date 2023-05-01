import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/product/product";
import NewProduct from "./pages/NewProduct/NewProduct";

let Routes = [
  { path: "/", element: <Home /> },
  { path: "/userlist", element: <UserList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/newProduct", element: <NewProduct /> },
  { path: "/products/:productID", element: <Product /> },
];

export default Routes;
