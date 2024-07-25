import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../UserContext";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
    </header>
  );
}
