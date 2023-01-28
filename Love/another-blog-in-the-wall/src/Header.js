import React from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <button
        className="header-title transparent-btn"
        onClick={() => navigate("/")}
      >
        Another Blog in the Wall
      </button>
    </div>
  );
};

export default Header;
