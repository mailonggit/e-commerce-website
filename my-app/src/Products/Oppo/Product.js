import React, { Component } from "react";

class Product extends Component {
  render() {
    var products = [
      {
        img: "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/p/oppo_find_x3_pro-6.jpg",
        name: "Oppo Find X3 Pro",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/220438/oppo-reno5-trang-600x600-1-600x600.jpg",
        name: "Oppo Reno 5",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/220654/oppo-a92-tim-600x600.jpg",
        name: "Oppo  A92",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/229885/oppo-a15-black-fix-200x200.jpg",
        name: "Oppo A15",
        price: 50,
      },
      {
        img: "https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-14-200x200.jpg",
        name: "Oppo A93",
        price: 50,
      },
      {
        img: "https://cellphones.com.vn/media/catalog/product/o/p/oppo-a54-4g-black-600x600.jpg",
        name: "Oppo A54",
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
