import React, { useState } from "react";
import { Link } from "react-router-dom";
require("./Nav.css");

const Nav = () => {
  const [menu, setMenu] = useState({
    state: false,
    circle: "",
    links: "",
    button: ""
  });

  const handleClickMenu = () => {
    if (menu.state === false) {
      setMenu({ state: true, circle: "open", links: "fade", button: "close" });
    } else {
      setMenu({ state: false, circle: "", links: "", button: "" });
    }
  };

  return (
    <nav>
      <div class="logo">
        <i class="fas fa-book-open" />
        <Link to="/">
          <h3>NoteApp</h3>
        </Link>
      </div>
      <div className={`hamburger ${menu.button}`} onClick={handleClickMenu}>
        <div className={`line `} />
        <div className={`line `} />
        <div className={`line `} />
      </div>
      <ul className={`nav-links ${menu.circle}`}>
        <li className={`${menu.links}`}>
          <Link to="/" onClick={handleClickMenu}>
            <i class="far fa-bookmark" /> Notes
          </Link>
        </li>
        <li className={`${menu.links}`}>
          <Link to="/create" onClick={handleClickMenu}>
            <i class="far fa-sticky-note" />Create Note
          </Link>
        </li>
        <li className={`${menu.links}`}>
          <Link to="/user" onClick={handleClickMenu}>
            <i class="far fa-user" />Create User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
