import "bootstrap/dist/css/bootstrap.min.css";
import Products from "../Products/Vsmart/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Body() {
  const mystyle = {
    width: "80%",
    margin: "20px auto",
  };
  return (
    <div className="Body" style={mystyle}>
      <Products />
    </div>
  );
}

export default Body;
