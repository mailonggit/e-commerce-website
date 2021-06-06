import React, { Component } from "react";

class Product extends Component {
  render() {
    var products = [
      {
        img: "https://www.xtmobile.vn/vnt_upload/product/04_2021/thumbs/600_poco_x3_pro_xanh_xtmobile1.jpg",
        name: "Xiaomi Poco X3 Pro ",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg",
        name: "Xiaomi Redmi Note 10 pro",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/222758/xiaomi-redmi-note-10-thumb-green-600x600.jpg",
        name: "Xiaomi Redmi Note 10 ",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/214925/xiaomi-redmi-note-9-xam-600x600-200x200.jpg",
        name: "Xiaomi Redmi Note 9",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/209535/xiaomi-redmi-note-8-blue-1-200x200.jpg",
        name: "Xiaomi Redmi Note 8",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/218734/xiaomi-redmi-9a-xanhla-600x600-200x200.jpg",
        name: "Xiaomi Redmi 9A",
        price: 50,
      },
    ];
    var elements = products.map((product, index) => {
      return (
        <div key={index} className="col-sm-4">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            {/*Card image*/}
            <div className="view view-cascade overlay text-center">
              {" "}
              <img className="card-img-top" src={product.img} alt />{" "}
              <a>
                <div className="mask rgba-white-slight" />
              </a>{" "}
            </div>
            {/*Card Body*/}
            <div
              className="card-body card-body-cascade text-center"
              style={{ width: "100%", padding: "0" }}
            >
              {/*Card Title*/}
              <h4 className="card-title">
                <strong>
                  <p>{product.name}</p>
                </strong>
              </h4>{" "}
              {/* Card Description*/}
              <p className="card-text">
                This is a Mobile phone with all the advance features and at best
                price.{" "}
              </p>
              <p
                className="price"
                style={{
                  fontWeight: "bold",
                }}
              >
                {product.price} $
              </p>{" "}
              {/* Card Rating*/}
              {/*Card footer*/}
              <div
                className="card-footer"
                style={{ padding: "0", width: "100%" }}
              >
                <button
                  style={{
                    padding: "20px 10px",
                    width: "100%",
                    backgroundColor: "aquamarine",
                    border: "1px",
                    fontWeight: "bold",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="page">
          <div className="row">{elements}</div>
        </div>
      </div>
    );
  }
}

export default Product;
