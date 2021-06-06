import React, { Component } from "react";

class Product extends Component {
  onAddToCart(text) {
    alert(text);
  }
  render() {
    var products = [
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xam-new-600x600-200x200.jpg",
        name: "Iphone 12 Promax",
        price: 50,
      },
      {
        img: "https://dienmaythienhoa.vn/static/images/4.%20hinh%20sp/3.%20Hinh%20SP%202/iPhone-12-Pro-Gold-1.jpg",
        name: "Iphone 12 Pro",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg",
        name: "Iphone 12",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
        name: "Iphone 11 Promax",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-bac-600x600-200x200.jpg",
        name: "Iphone 11 Pro",
        price: 50,
      },
      {
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/09/17/apple-iphone-11-64gb-6.1.jpg",
        name: "Iphone 11",
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
                  onClick={() => {
                    this.onAddToCart("Add Success");
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
