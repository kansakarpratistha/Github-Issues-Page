import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = (props) => {
  let page = parseInt(props.page);

  return (
    <div className="paginate-container">
      <div className="pagination">
        <Link to={page === 1 ? "/page=1" : "/page=" + (page - 1)} style={page===1?{color:'#8c959f'}:{}}>
          &lt; Previous
        </Link>
        <Link to={"/page=" + (page + 1)}>Next &gt;</Link>
      </div>
    </div>
  );
};

export default Paginate;
