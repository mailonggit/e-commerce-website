import React, { Component } from "react";

class Product extends Component {
  render() {
    var products = [
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-vang-dong-200x200.jpg",
        name: "Galaxy Z Fold 2",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-den-600x600-1-200x200.jpg",
        name: "Galaxy S21 Ultra",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/226385/samsung-galaxy-s21-plus-tim-600x600-200x200.jpg",
        name: "Galaxy S21+",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-200x200.jpg",
        name: "Galaxy Note 20 Ultra",
        price: 50,
      },
      {
        img: "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s20-fe-bhdt-tim.jpg",
        name: "Galaxy S20 FE",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/226101/samsung-galaxy-a72-thumb-balck-600x600-200x200.jpg",
        name: "Galaxy A72",
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
