import React, { useEffect, useRef, useState } from "react";
import { Breadcrumbs, Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddItem = () => {
  const formRef = useRef();

  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const [resName, setResName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
      {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
          "Access-Control-Allow-Methods": "POST",
        },
        body: formRef.current,
      }
    )
      .then((response) => response.json())
      .then((json) =>
        toast.success("Success!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .catch((err) =>
        toast.error("Couldn't add item to Resource List", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );

    setItemName("");
    setDescription("");
    setLink("");
    setResName("");
  };

  useEffect(() => {
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate(-1)}
          sx={{
            display: "flex",
            alignItems: "center",
            ":hover": { cursor: "pointer" },
          }}
        >
          <ArrowBackIosIcon fontSize="small" />
          Resource Table
        </Link>
      </Breadcrumbs>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          maxLength="20"
          required
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="link">Link</label>
        <input
          type="text"
          id="link"
          value={link}
          maxLength="20"
          required
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="resName">Resource Name</label>
        <input
          type="text"
          id="resName"
          value={resName}
          maxLength="20"
          required
          onChange={(e) => setResName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          id="description"
          value={description}
          rows="20"
          maxLength="400"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="createButtonDiv">
          <button className="createButton" type="submit">
            CREATE
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
