import React, { useState, useEffect } from "react";
import "./NewProduct.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function NewUser() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  // const [avatar, setAvatar] = useState("./images/profile.jfif");
  const [id, setID] = useState();

  useEffect(() => {
    fetch("https://sabzlearn-255fb-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        setID(Object.entries(data).length + 1);
      });
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    await setID((prev) => prev + 1);
    console.log(id);
    let newObject = {
      id,
      avatar: "/images/asus.jpeg",
      title,
      price,
    };
    await fetch(
      "https://sabzlearn-255fb-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(newObject),
      }
    ).then((res) => console.log(res));
    setTitle("");
    setPrice("");
  };

  return (
    <div className="newUserContainer">
      <form className="newUserForm" onSubmit={(e) => addProduct(e)}>
        <TextField
          value={title}
          label="Product title"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#5550bd",
            },
            "& .Mui-focused fieldset": {
              borderColor: "#5550bd !important",
            },
          }}
        />
        <TextField
          value={price}
          label="Price"
          variant="outlined"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#5550bd",
            },
            "& .Mui-focused fieldset": {
              borderColor: "#5550bd !important",
            },
          }}
        />
        <Button
          variant="contained"
          component="label"
          endIcon={<SendIcon />}
          sx={{
            color: "#5550bd",
            backgroundColor: "rgb(240, 240, 255)",
            "&:hover": {
              backgroundColor: "rgb(240, 240, 255)",
            },
          }}
        >
          Upload Avatar
          <input type="file" hidden />
        </Button>
        <Button
          variant="contained"
          component="label"
          sx={{
            color: "#5550bd",
            backgroundColor: "rgb(240, 240, 255)",
            "&:hover": {
              backgroundColor: "rgb(240, 240, 255)",
            },
          }}
        >
          Add user
          <input type="submit" hidden />
        </Button>
      </form>
    </div>
  );
}
