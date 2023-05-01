import React, { useState, useEffect } from "react";
import "./NewUser.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function NewUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [transaction, setTransaction] = useState("");
  const [status, setStatus] = useState("");
  // const [avatar, setAvatar] = useState("./images/profile.jfif");
  const [id, setID] = useState();

  useEffect(() => {
    fetch("https://sabzlearn-255fb-default-rtdb.firebaseio.com/userLists.json")
      .then((res) => res.json())
      .then((data) => {
        setID(Object.entries(data).length + 1);
      });
  }, []);

  const addUser = async (e) => {
    e.preventDefault();
    await setID((prev) => prev + 1);
    let newObject = {
      id,
      username,
      status,
      avatar: "./images/profile.jfif",
      transaction,
      email,
    };
    await fetch(
      "https://sabzlearn-255fb-default-rtdb.firebaseio.com/userLists.json",
      {
        method: "POST",
        body: JSON.stringify(newObject),
      }
    ).then((res) => console.log(res));
    setUsername("");
    setEmail("");
    setTransaction("");
    setStatus("");
  };

  return (
    <div className="newUserContainer">
      <form className="newUserForm" onSubmit={(e) => addUser(e)}>
        <TextField
          value={username}
          label="Username"
          variant="outlined"
          onChange={(e) => {
            setUsername(e.target.value);
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
          value={email}
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
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
          value={transaction}
          label="Transaction"
          variant="outlined"
          onChange={(e) => {
            setTransaction(e.target.value);
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
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{
              color: "#5550bd",
            }}
          >
            Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <FormControlLabel
              value="active"
              control={
                <Radio
                  sx={{
                    color: "#5550bd",
                    "&.Mui-checked": {
                      color: "#5550bd",
                    },
                  }}
                />
              }
              label="Active"
            />
            <FormControlLabel
              value="non-active"
              control={
                <Radio
                  sx={{
                    color: "#5550bd",
                    "&.Mui-checked": {
                      color: "#5550bd",
                    },
                  }}
                />
              }
              label="Non-acvtive"
            />
          </RadioGroup>
        </FormControl>

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
