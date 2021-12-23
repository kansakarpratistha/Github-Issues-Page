import { SearchIcon } from "@primer/octicons-react";
import React from "react";
import { Nav } from "react-bootstrap";

const SubNav = () => {
  return (
    <div className="subnav">
      <Nav className="subnav-filters">
        <a className="subnav-item">Created</a>
        <a className="subnav-item">Assigned</a>
        <a className="subnav-item">Mentioned</a>
      </Nav>
      <div className="subnav-form">
        <form className="search-form">
          <input
            type="text"
            name="search-text"
            placeholder="search all issues"
          ></input>
          <SearchIcon size={16} className="subnav-search-icon" />
        </form>
      </div>
    </div>
  );
};

export default SubNav;
