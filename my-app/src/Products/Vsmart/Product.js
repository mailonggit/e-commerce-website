import React, { Component } from "react";

class Product extends Component {
  render() {
    var products = [
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/228360/vsmart-joy-4-den-200x200.jpg",
        name: "Vsmart Joy 4",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/228531/vsmart-aris-pro-green-600jpg-600x600.jpg",
        name: "Vsmart Aris Pro",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/226436/vsmart-live-4-xanh-la-200x200.jpg",
        name: "Vsmart Live 4",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/224949/vsmart-star-4-den-200x200.jpg",
        name: "Vsmart Star 4",
        price: 50,
      },
      {
        img: "https://cellphones.com.vn/media/catalog/product/v/s/vsmart-star-5-1_3.jpg",
        name: "Vsmart Star 5",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-new-600x600-200x200.jpg",
        name: "Vsmart Joy 3 ",
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
