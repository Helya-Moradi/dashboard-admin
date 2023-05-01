import React, { useEffect, useState } from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { XAxisProduct } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  const [productData, setProductData] = useState();
  const [product, setProduct] = useState();

  const [newTitle, setNewTitle] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newImg, setNewImg] = useState();

  let params = useParams();

  useEffect(() => {
    fetch("https://sabzlearn-255fb-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductData(Object.entries(data));
      });
  }, []);

  useEffect(() => {
    if (productData) {
      let product = productData.find(
        (product) => product[1].id == params.productID
      );
      setProduct(product);

      if (product) {
        setNewTitle(product[1].title);
        setNewPrice(product[1].price);
        setNewImg(product[1].avatar);
      }
    }
  }, [productData]);

  function editProduct(e) {
    e.preventDefault();
    if (newTitle && newPrice) {
      let newProductObject = {
        title: newTitle,
        price: newPrice,
        id: product[1].id,
        avatar: "/images/dell.jpg",
      };

      fetch(
        `https://sabzlearn-255fb-default-rtdb.firebaseio.com/products/${product[0]}.json`,
        { method: "PUT", body: JSON.stringify(newProductObject) }
      ).then((res) => console.log(res));
    }
  }

  return (
    <div className="productContainer">
      <div className="productTileContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title="Sale in this month"
            data={XAxisProduct}
            dataKey="sale"
          />
        </div>
        <div className="produtTopRight">
          <div className="productInfoTop">
            <img
              src={product && product[1].avatar}
              className="productInfoTopImg"
            />
            <span className="productInfoTopName">
              {product && `${product[1].title} Laptop`}
            </span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">{product && product[1].id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Title:</div>
              <div className="productInfoValue">
                {product && product[1].title}
              </div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Price:</div>
              <div className="productInfoValue">
                {product && product[1].price}
              </div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Store:</div>
              <div className="productInfoValue">Yes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={editProduct}>
          <div className="productFormLeft">
            <label>Product Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label>Price</label>
            <input
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <div className="imageUploader">
              <img src={newImg} className="imageUploaderImg" />
              <label for="upimg">
                <PublishIcon />
              </label>
              <input
                type="file"
                id="upimg"
                style={{ display: "none" }}
                onChange={(e) =>
                  setNewImg(URL.createObjectURL(e.target.files[0]))
                }
              />
            </div>
            <button className="editButton">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
