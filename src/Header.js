import React, { useState } from "react";
import "./Header.css";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import db from "./firebase";

function Header(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (input) {
      props.onSubmit(input);
      db.collection("terms").add({
        term: input,
      });
    }
  };
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </div>
      <div className="header__button homePage">
        <a href="/">Homepage</a>
      </div>
      <div className="header__button following">
        <a href="/">Following</a>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchIcon />
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}>
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="header__menuItems">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
