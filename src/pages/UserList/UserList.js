import React, { useState, useEffect } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userLists } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  let [userDatas, setUserDatas] = useState();
  let [getData, setGetData] = useState(true);

  useEffect(() => {
    fetch("https://sabzlearn-255fb-default-rtdb.firebaseio.com/userLists.json")
      .then((res) => res.json())
      .then((data) => {
        setUserDatas(Object.entries(data));
        console.log(Object.entries(data));
      });
    // .catch(setUserDatas(userLists));
  }, [getData]);

  const deleteUser = async (userID) => {
    // setUserDatas(userDatas.filter((user) => user.id != userID));

    let delUserID = userDatas.find((user) => user[1].id == userID);
    await fetch(
      `https://sabzlearn-255fb-default-rtdb.firebaseio.com/userLists/${delUserID[0]}.json`,
      { method: "DELETE" }
    ).then((res) => console.log(res));
    setGetData((prev) => !prev);
    console.log(userID);
    console.log(delUserID);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 220,
      renderCell: (params) => {
        // console.log(params);
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    {
      field: "state",
      headerName: "State",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={`/userlist/${params.row.id}`} className="link"> */}
            <button className="userListEdit">Edit</button>
            {/* </Link> */}
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => deleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  let muiTableArray = [];
  userDatas &&
    userDatas.forEach((userData) => {
      muiTableArray.push(userData[1]);
    });
  console.log(muiTableArray);

  return (
    <div className="userListContainer">
      {userDatas ? (
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
