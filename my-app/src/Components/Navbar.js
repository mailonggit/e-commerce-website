import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Iphone from "../Products/Iphone/Product";
import Samsung from "../Products/Samsung/Product";
import Oppo from "../Products/Oppo/Product";
import Xiaomi from "../Products/Xiaomi/Product";
import Vsmart from "../Products/Vsmart/Product";

function Navbar() {
  return (
    <Router>
      <div>
        <div className="App">
          <nav className="nav-style navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
              <b>ONLINEstore</b>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold", color: "white" }}
                    to="/"
                    exact
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ fontWeight: "bold", color: "white" }}
                    to="/products/iphone"
                    className="nav-link"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ fontWeight: "bold", color: "white" }}
                    to="/cart"
                    className="nav-link"
                  >
                    Carts
                  </NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="search-form form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="search-btn btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <ul class="brand-list nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <NavLink
                to="/products/iphone"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "white ",
                  border: "3px solid white",
                  borderTopLeftRadius: "20%",
                  borderTopRightRadius: "20%",
                }}
                style={{ textDecoration: "none" }}
              >
                IPHONE
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/products/samsung"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "white ",
                  border: "3px solid white",
                  borderTopLeftRadius: "20%",
                  borderTopRightRadius: "20%",
                }}
                style={{ textDecoration: "none" }}
              >
                SAMSUNG
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/products/vsmart"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "white ",
                  border: "3px solid white",
                  borderTopLeftRadius: "20%",
                  borderTopRightRadius: "20%",
                }}
                style={{ textDecoration: "none" }}
              >
                VSMART
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/products/xiaomi"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "white ",
                  border: "3px solid white",
                  borderTopLeftRadius: "20%",
                  borderTopRightRadius: "20%",
                }}
                style={{ textDecoration: "none" }}
              >
                XIAOMI
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/products/oppo"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "white ",
                  border: "3px solid white",
                  borderTopLeftRadius: "20%",
                  borderTopRightRadius: "20%",
                }}
                style={{ textDecoration: "none" }}
              >
                OPPO
              </NavLink>
            </li>
          </ul>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/products" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/iphone" exact component={Iphone} />
        <Route path="/products/samsung" component={Samsung} />
        <Route path="/products/xiaomi" component={Xiaomi} />
        <Route path="/products/oppo" component={Oppo} />
        <Route path="/products/vsmart" component={Vsmart} />
      </div>
    </Router>
  );
}

export default Navbar;
