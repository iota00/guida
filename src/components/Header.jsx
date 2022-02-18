import React, { useState } from "react";
// import styling
import "../styles/header.css";
// import Icons
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaUser,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
//  import bootstrap
// import { Button } from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="header">
      {/* 1st Navbar */}
      <div className="nav-bar-1">
        <div className="nb-1-title">
          Make your <span>business</span> digital
        </div>
        <div className="nb-1-blog-btn">Blogs</div>
        <div className="nb-1-social">
          <FaFacebook size={25} />
          <FaInstagram size={25} />
          <FaLinkedin size={25} />
          <FaLinkedinIn size={25} />
        </div>
        <div className="nb-1-languages">
          <select>
            <option value="English">English</option>
            <option value="Français">Français</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
      {/* 2nd Navbar */}
      <div className="nav-bar-2">
        <div className="nb-2-logo">
          <div className="image-logo"></div>
          <div className="title-logo">
            <h2>Guide Ni</h2>
          </div>
        </div>
        {/* if user isn't logged */}
        <div className="nb-2-log">
          <Button variant="outline-primary">Sign Up</Button>
          <Button variant="primary">Sign In</Button>
        </div>
        {/* if user is logged */}
        <div className="nb-2-user">
          <FaUser size={30} />
          <div className="user">
            <ul>
              <li>Profil</li>
              <li>Settings</li>
              <li>Log out</li>
            </ul>
          </div>
          <FaHeart size={30} color="red" />
        </div>
      </div>
    </div>
  );
};

export default Header;
