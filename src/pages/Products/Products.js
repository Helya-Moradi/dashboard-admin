import React, { useState, useEffect } from "react";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
// import { userLists } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  let [productDatas, setProductDatas] = useState();
  let [getData, setGetData] = useState(true);

  useEffect(() => {
    fetch("https://sabzlearn-255fb-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductDatas(Object.entries(data));
        console.log(Object.entries(data));
      });
    // .catch(setUserDatas(userLists));
  }, [getData]);

  const deleteProduct = async (productID) => {
    // setUserDatas(userDatas.filter((user) => user.id != userID));

    let delProduct = productDatas.find((product) => product[1].id == productID);
    await fetch(
      `https://sabzlearn-255fb-default-rtdb.firebaseio.com/products/${delProduct[0]}.json`,
      { method: "DELETE" }
    ).then((res) => console.log(res));
    setGetData((prev) => !prev);
    console.log(productID);
    console.log(delProduct);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 220,
      renderCell: (params) => {
        // console.log(params);
        return (
          <Link to="/" className="link">
            <div className="productUser">
              <img src={params.row.avatar} className="productImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`} className="link">
              <button className="productEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productDelete"
              onClick={() => deleteProduct(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  let muiTableArray = [];
  productDatas &&
    productDatas.forEach((productData) => {
      muiTableArray.push(productData[1]);
    });
  console.log(muiTableArray);

  return (
    <div className="productContainer">
      {productDatas ? (
        <DataGrid
          rows={muiTableArray}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
